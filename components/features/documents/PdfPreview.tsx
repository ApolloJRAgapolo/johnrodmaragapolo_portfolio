"use client";

import { useEffect, useRef, useState } from "react";
import { AlertCircle, LoaderCircle } from "lucide-react";
import type { PDFDocumentLoadingTask, PDFDocumentProxy, RenderTask } from "pdfjs-dist";
import { createPdfRenderQueue, getPdfCanvasSize } from "@/lib/pdf-rendering";

type LoadedPdf = {
  fileUrl: string;
  pdf: PDFDocumentProxy;
  aspectRatio: number;
  queue: ReturnType<typeof createPdfRenderQueue>;
};

function getScrollRoot(element: HTMLElement) {
  let parent = element.parentElement;
  while (parent && parent !== document.body) {
    if (/(auto|scroll)/.test(getComputedStyle(parent).overflowY)) return parent;
    parent = parent.parentElement;
  }
  return null;
}

function PdfPage({ document: loaded, pageNumber, width, title }: {
  document: LoadedPdf;
  pageNumber: number;
  width: number;
  title: string;
}) {
  const pageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [nearViewport, setNearViewport] = useState(() => pageNumber === 1 || typeof IntersectionObserver === "undefined");
  const [aspectRatio, setAspectRatio] = useState(loaded.aspectRatio);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [hasBitmap, setHasBitmap] = useState(false);

  useEffect(() => {
    const element = pageRef.current;
    if (!element || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      setNearViewport(entry.isIntersecting);
      if (!entry.isIntersecting) setHasBitmap(false);
    }, { root: getScrollRoot(element), rootMargin: "400px 0px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, [width]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (!nearViewport) {
      // Release distant page buffers instead of retaining every HiDPI canvas.
      canvas.width = 0;
      canvas.height = 0;
      return;
    }
    if (width < 1) return;

    const controller = new AbortController();
    const { signal } = controller;
    let renderTask: RenderTask | undefined;
    let frame: number | undefined;

    const render = async () => {
      setStatus("loading");
      try {
        await loaded.queue.enqueue(async () => {
          const panel = canvas.closest(".document-viewer-panel");
          // Let the dialog finish opening before competing with its animation.
          await Promise.allSettled(panel?.getAnimations().map((animation) => animation.finished) ?? []);
          if (signal.aborted) return;

          const page = await loaded.pdf.getPage(pageNumber);
          if (signal.aborted) return;
          const initialViewport = page.getViewport({ scale: 1 });
          setAspectRatio(initialViewport.width / initialViewport.height);
          const viewport = page.getViewport({ scale: width / initialViewport.width });
          const size = getPdfCanvasSize(viewport.width, viewport.height, window.devicePixelRatio);
          const buffer = window.document.createElement("canvas");
          buffer.width = size.width;
          buffer.height = size.height;

          try {
            renderTask = page.render({ canvas: buffer, viewport, transform: [size.pixelRatio, 0, 0, size.pixelRatio, 0, 0] });
            renderTask.onContinue = (continueRendering: () => void) => {
              frame = requestAnimationFrame(() => {
                if (!signal.aborted) continueRendering();
              });
            };
            await renderTask.promise;
            if (signal.aborted) return;

            const context = canvas.getContext("2d");
            if (!context) throw new Error("Canvas rendering is unavailable");
            // Swap in a completed bitmap so width changes do not blank the page.
            canvas.width = size.width;
            canvas.height = size.height;
            context.drawImage(buffer, 0, 0);
            setHasBitmap(true);
            setStatus("ready");
          } finally {
            buffer.width = 0;
            buffer.height = 0;
            page.cleanup();
          }
        }, signal);
      } catch {
        if (!signal.aborted) setStatus("error");
      }
    };

    void render();
    return () => {
      controller.abort();
      renderTask?.cancel();
      if (frame !== undefined) cancelAnimationFrame(frame);
    };
  }, [loaded, pageNumber, width, nearViewport]);

  return (
    <div ref={pageRef} aria-busy={nearViewport && status === "loading"} className="relative w-full overflow-hidden border border-border/30 bg-background [contain:paint]" style={{ aspectRatio }}>
      <canvas ref={canvasRef} role="img" aria-label={`${title}, page ${pageNumber}`} className="absolute inset-0 block h-full w-full" />
      {status === "error" ? (
        <div role="alert" className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-background p-5 text-center text-xs text-muted-foreground">
          <AlertCircle aria-hidden="true" className="h-5 w-5" />
          Unable to display page {pageNumber}.
        </div>
      ) : !hasBitmap && (
        <div className="absolute inset-0 flex items-center justify-center gap-2 bg-background text-xs text-muted-foreground">
          {nearViewport && <LoaderCircle aria-hidden="true" className="h-4 w-4 animate-spin motion-reduce:animate-none" />}
          {nearViewport ? `Loading page ${pageNumber}…` : `Page ${pageNumber}`}
        </div>
      )}
    </div>
  );
}

export default function PdfPreview({ fileUrl, title }: { fileUrl: string; title: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadedPdf, setLoadedPdf] = useState<LoadedPdf | null>(null);
  const [failedUrl, setFailedUrl] = useState<string | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let loadingTask: PDFDocumentLoadingTask | undefined;

    const loadPdf = async () => {
      try {
        const pdfjs = await import("pdfjs-dist");
        if (cancelled) return;
        pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();
        loadingTask = pdfjs.getDocument({ url: fileUrl });
        const pdf = await loadingTask.promise;
        if (cancelled) return;
        const firstPage = await pdf.getPage(1);
        if (cancelled) return;
        const viewport = firstPage.getViewport({ scale: 1 });
        setLoadedPdf({ fileUrl, pdf, aspectRatio: viewport.width / viewport.height, queue: createPdfRenderQueue() });
        setFailedUrl(null);
      } catch {
        if (!cancelled) setFailedUrl(fileUrl);
      }
    };

    void loadPdf();
    return () => { cancelled = true; void loadingTask?.destroy().catch(() => undefined); };
  }, [fileUrl]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let timer: number | undefined;
    let measuredWidth = -1;
    const measure = () => {
      const nextWidth = Math.floor(container.clientWidth);
      if (nextWidth === measuredWidth) return;
      const isFirstMeasurement = measuredWidth === -1;
      measuredWidth = nextWidth;
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setWidth(nextWidth), isFirstMeasurement ? 0 : 160);
    };
    const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(measure);
    if (observer) observer.observe(container);
    else window.addEventListener("resize", measure);
    measure();
    return () => {
      observer?.disconnect();
      if (!observer) window.removeEventListener("resize", measure);
      window.clearTimeout(timer);
    };
  }, [fileUrl]);

  if (failedUrl === fileUrl) {
    return <div className="mx-auto flex min-h-64 max-w-md flex-col items-center justify-center px-6 py-10 text-center">
      <AlertCircle className="mb-4 h-7 w-7 text-muted-foreground" aria-hidden="true" />
      <h4 className="text-sm font-semibold text-foreground">Document Unavailable</h4>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">The requested document is currently unavailable or could not be loaded. It may have moved, be temporarily unavailable, or not yet be published.</p>
    </div>;
  }

  const currentPdf = loadedPdf?.fileUrl === fileUrl ? loadedPdf : null;
  return (
    <div ref={containerRef} className="mx-auto w-full max-w-[1080px] space-y-3">
      {!currentPdf ? (
        <div role="status" className="flex min-h-64 items-center justify-center gap-2 text-xs text-muted-foreground">
          <LoaderCircle aria-hidden="true" className="h-4 w-4 animate-spin motion-reduce:animate-none" />Loading document…
        </div>
      ) : Array.from({ length: currentPdf.pdf.numPages }, (_, index) => (
        <PdfPage key={`${fileUrl}-${index}`} document={currentPdf} pageNumber={index + 1} width={width} title={title} />
      ))}
    </div>
  );
}

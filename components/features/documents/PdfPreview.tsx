"use client";

import { useEffect, useRef, useState } from "react";
import { AlertCircle, LoaderCircle } from "lucide-react";
import type { PDFDocumentLoadingTask } from "pdfjs-dist";

export default function PdfPreview({ fileUrl, title }: { fileUrl: string; title: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRefs = useRef<Record<number, HTMLCanvasElement | null>>({});
  const [pageCount, setPageCount] = useState(0);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [renderKey, setRenderKey] = useState(0);

  useEffect(() => {
    let timer: number | undefined;
    const rerender = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setRenderKey((key) => key + 1), 160);
    };
    window.addEventListener("resize", rerender);
    return () => { window.removeEventListener("resize", rerender); window.clearTimeout(timer); };
  }, []);

  useEffect(() => {
    let cancelled = false;
    let loadingTask: PDFDocumentLoadingTask | undefined;

    const renderPdf = async () => {
      setStatus("loading");
      setPageCount(0);
      try {
        const pdfjs = await import("pdfjs-dist");
        pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();
        loadingTask = pdfjs.getDocument({ url: fileUrl });
        const pdf = await loadingTask.promise;
        if (cancelled) return;
        setPageCount(pdf.numPages);
        await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));

        const availableWidth = Math.max(1, containerRef.current?.clientWidth ?? 1);
        const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
        for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
          const page = await pdf.getPage(pageNumber);
          const initialViewport = page.getViewport({ scale: 1 });
          const viewport = page.getViewport({ scale: availableWidth / initialViewport.width });
          const canvas = canvasRefs.current[pageNumber];
          const context = canvas?.getContext("2d");
          if (!canvas || !context || cancelled) continue;
          canvas.width = Math.floor(viewport.width * pixelRatio);
          canvas.height = Math.floor(viewport.height * pixelRatio);
          canvas.style.width = `${Math.floor(viewport.width)}px`;
          canvas.style.height = `${Math.floor(viewport.height)}px`;
          await page.render({ canvas, canvasContext: context, viewport, transform: [pixelRatio, 0, 0, pixelRatio, 0, 0] }).promise;
        }
        if (!cancelled) setStatus("ready");
      } catch {
        if (!cancelled) setStatus("error");
      }
    };

    renderPdf();
    return () => { cancelled = true; loadingTask?.destroy(); };
  }, [fileUrl, renderKey]);

  if (status === "error") {
    return <div className="mx-auto flex min-h-64 max-w-md flex-col items-center justify-center px-6 py-10 text-center">
      <AlertCircle className="mb-4 h-7 w-7 text-muted-foreground" aria-hidden="true" />
      <h4 className="text-sm font-semibold text-foreground">Document Unavailable</h4>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">The requested document is currently unavailable or could not be loaded. It may have moved, be temporarily unavailable, or not yet be published.</p>
    </div>;
  }

  return <div ref={containerRef} className="mx-auto w-full max-w-[1080px] space-y-3">
    {status === "loading" && <div className="flex min-h-64 items-center justify-center gap-2 text-xs text-muted-foreground"><LoaderCircle className="h-4 w-4 animate-spin" />Loading document…</div>}
    {Array.from({ length: pageCount }, (_, index) => <div key={index} className="overflow-hidden border border-border/30 bg-background shadow-lg">
      <canvas ref={(canvas) => { canvasRefs.current[index + 1] = canvas; }} aria-label={`${title}, page ${index + 1}`} className="block max-w-full" />
    </div>)}
  </div>;
}

"use client";

import { useEffect, useRef, useState } from "react";
import { AlertCircle, Download, FileText, LoaderCircle, X, Info } from "lucide-react";
import type { DocumentMetadata, ViewerOptions } from "@/lib/types";
import type { PDFDocumentLoadingTask } from "pdfjs-dist";

export type PreviewDocument = {
  title: string;
  fileUrl: string;
  metadata?: DocumentMetadata;
  aspectRatio?: number;
  mode?: "document" | "resume";
  viewerOptions?: ViewerOptions;
};

type DocumentViewerProps = { document: PreviewDocument | null; onClose: () => void };

function PdfPreview({ fileUrl, title }: { fileUrl: string; title: string }) {
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

/** Shared, in-app PDF viewing experience with reliable empty states on every device. */
export default function DocumentViewer({ document, onClose }: DocumentViewerProps) {
  const [renderedDocument, setRenderedDocument] = useState<PreviewDocument | null>(document);
  const [isClosing, setIsClosing] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const viewerSectionRef = useRef<HTMLElement | null>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (document) { const frame = requestAnimationFrame(() => { setRenderedDocument(document); setIsClosing(false); }); return () => cancelAnimationFrame(frame); }
    if (!renderedDocument) return;
    const frame = requestAnimationFrame(() => setIsClosing(true));
    const timer = window.setTimeout(() => setRenderedDocument(null), 220);
    return () => { cancelAnimationFrame(frame); window.clearTimeout(timer); };
  }, [document, renderedDocument]);

  useEffect(() => {
    if (!renderedDocument) return;
    lastFocused.current = window.document.activeElement as HTMLElement | null;
    const previousOverflow = window.document.body.style.overflow;
    window.document.body.style.overflow = "hidden";
    const frame = requestAnimationFrame(() => dialogRef.current?.focus());
    return () => { window.document.body.style.overflow = previousOverflow; cancelAnimationFrame(frame); lastFocused.current?.focus(); };
  }, [renderedDocument]);

  // Viewer-scoped protections: disable right-click inside the viewer area
  // and intercept a small set of keyboard shortcuts while the viewer is open.
  useEffect(() => {
    if (!renderedDocument) return;

    const isEditable = (el: Element | null) => {
      if (!el) return false;
      const tag = (el as HTMLElement).tagName;
      return tag === "INPUT" || tag === "TEXTAREA" || (el as HTMLElement).isContentEditable;
    };

    const onContextMenu = (e: MouseEvent) => {
      // Only prevent context menu inside the viewer section (PDF/document area)
      const viewerEl = viewerSectionRef.current;
      if (!viewerEl) return;
      if (viewerEl.contains(e.target as Node)) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.defaultPrevented) return;
      // Do not interfere with typing in inputs or editable regions
      const activeEl = (globalThis as unknown as { document?: Document }).document?.activeElement ?? null;
      if (isEditable(activeEl)) return;

      const mod = e.ctrlKey || e.metaKey;
      const key = e.key?.toLowerCase?.();

      // Block: Ctrl/Cmd+S, Ctrl/Cmd+P, Ctrl/Cmd+U, Ctrl/Cmd+Shift+I, F12
      const shouldBlock = (
        (mod && key === "s") ||
        (mod && key === "p") ||
        (mod && key === "u") ||
        (mod && e.shiftKey && key === "i") ||
        e.key === "F12" || e.key === "f12"
      );

      if (shouldBlock) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    };

    window.addEventListener("contextmenu", onContextMenu, true);
    window.addEventListener("keydown", onKeyDown, true);
    return () => {
      window.removeEventListener("contextmenu", onContextMenu, true);
      window.removeEventListener("keydown", onKeyDown, true);
    };
  }, [renderedDocument]);

  if (!renderedDocument) return null;
  const { metadata = {}, viewerOptions } = renderedDocument;
  const isResumePreview = metadata.documentType === "Resume / Curriculum Vitae";
  const metadataEntries = [["Category", metadata.category], ["Issued by", metadata.issuer], ["Awarded", metadata.issuedDate], ["Document type", metadata.documentType], ["Status", metadata.verificationStatus], ["Last updated", metadata.lastUpdated], ["Authors", metadata.authors], ["Published", metadata.publicationDate], ["Publisher", metadata.publisher], ...(metadata.entries ?? []).map(({ label, value }) => [label, value] as [string, string])].filter((entry): entry is [string, string] => Boolean(entry[1]));

  return <div className="fixed inset-0 z-50 flex items-center justify-center p-[max(0.75rem,env(safe-area-inset-top))] sm:p-8" data-state={isClosing ? "closing" : "open"}>
    <div className="document-viewer-backdrop absolute inset-0 bg-background/90 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
    <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="document-viewer-title" tabIndex={-1} className="document-viewer-panel relative flex max-h-[calc(100dvh-1.5rem)] w-[min(1440px,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-sm border border-border/50 bg-card lg:flex-row">
      <section ref={viewerSectionRef} data-viewer-section className="order-1 min-h-0 flex-1 overflow-auto bg-secondary/20 p-3 sm:p-5 lg:order-1 lg:w-[72%] relative">
        <PdfPreview fileUrl={renderedDocument.fileUrl} title={renderedDocument.title} />
        {!isResumePreview && (
          <div role="note" aria-hidden="true" className="hidden sm:block pointer-events-none absolute left-3 bottom-3 max-w-[46%] rounded-md border border-border/30 bg-background/70 px-2 py-1 shadow-sm backdrop-blur-sm">
            <div className="flex items-start gap-2">
              <div className="mt-0.5 flex-shrink-0 text-muted-foreground/90">
                <Info className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <div className="font-mono text-[10px] uppercase tracking-wider text-foreground/90 font-semibold">PORTFOLIO PREVIEW</div>
                <div className="mt-0.5 text-[11px] leading-snug text-foreground/70">
                  <div>Displayed for credential verification and portfolio purposes only.</div>
                  <div className="mt-1">Please do not reproduce or redistribute.</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <aside className="order-2 shrink-0 border-t border-border/40 bg-card lg:order-2 lg:flex lg:w-[28%] lg:min-w-[280px] lg:flex-col lg:border-t-0 lg:border-l">
        <div className="relative p-4 pr-14 sm:p-6 sm:pr-20 lg:pr-16"><div className="flex min-w-0 gap-3"><FileText className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" /><div className="min-w-0"><h3 id="document-viewer-title" className="text-sm font-semibold leading-snug text-foreground">{metadata.title ?? renderedDocument.title}</h3>{metadata.description && <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:mt-3">{metadata.description}</p>}</div></div><button type="button" onClick={onClose} aria-label="Close document preview" className="absolute right-2 top-2 flex h-11 w-11 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:right-5 sm:top-5 lg:right-3 lg:top-3"><X className="h-4 w-4" /></button></div>
        {metadataEntries.length > 0 && <dl className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-border/40 px-4 py-4 text-xs sm:gap-x-6 sm:px-6 lg:block lg:px-6">{metadataEntries.map(([label, value]) => <div key={label} className="min-w-0 lg:mb-4 lg:last:mb-0"><dt className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">{label}</dt><dd className="mt-1 break-words leading-relaxed text-foreground/80">{value}</dd></div>)}</dl>}
        {viewerOptions?.allowDownload === true && <div className="border-t border-border/40 p-4 sm:px-6 sm:py-4 lg:mt-auto lg:p-6"><a href={renderedDocument.fileUrl} download className="flex min-h-11 w-full items-center justify-center gap-2 rounded-sm bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:scale-[1.02] hover:bg-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><Download className="h-3.5 w-3.5" />Download PDF</a></div>}
      </aside>
    </div>
  </div>;
}


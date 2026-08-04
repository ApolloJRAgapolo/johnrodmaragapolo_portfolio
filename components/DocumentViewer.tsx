"use client";

import { useEffect, useRef, useState } from "react";
import { Download, FileText, X } from "lucide-react";
import type { DocumentMetadata, ViewerOptions } from "@/lib/types";

export type PreviewDocument = {
  title: string;
  fileUrl: string;
  metadata?: DocumentMetadata;
  /** Supplied by the document data, e.g. 1.414 for landscape or 0.707 for portrait. */
  aspectRatio?: number;
  mode?: "document" | "resume";
  viewerOptions?: ViewerOptions;
};

type DocumentViewerProps = {
  document: PreviewDocument | null;
  onClose: () => void;
};

const DEFAULT_ASPECT_RATIO = 1.414;

/** The portfolio's single, data-driven, lazy-loaded PDF viewing experience. */
export default function DocumentViewer({ document, onClose }: DocumentViewerProps) {
  const [renderedDocument, setRenderedDocument] = useState<PreviewDocument | null>(document);
  const [isClosing, setIsClosing] = useState(false);
  const [previewSize, setPreviewSize] = useState({ width: 0, height: 0 });
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (document) {
      const frame = requestAnimationFrame(() => {
        setRenderedDocument(document);
        setIsClosing(false);
      });
      return () => cancelAnimationFrame(frame);
    }

    if (!renderedDocument) return;
    const frame = requestAnimationFrame(() => setIsClosing(true));
    const timer = window.setTimeout(() => setRenderedDocument(null), 220);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [document, renderedDocument]);

  useEffect(() => {
    if (!renderedDocument) return;
    lastFocused.current = window.document.activeElement as HTMLElement | null;
    const previousOverflow = window.document.body.style.overflow;
    window.document.body.style.overflow = "hidden";
    const frame = requestAnimationFrame(() => dialogRef.current?.focus());

    return () => {
      window.document.body.style.overflow = previousOverflow;
      cancelAnimationFrame(frame);
      lastFocused.current?.focus();
    };
  }, [renderedDocument]);

  useEffect(() => {
    if (!renderedDocument) return;
    const ratio = renderedDocument.aspectRatio ?? DEFAULT_ASPECT_RATIO;
    const metadataCount = Object.values(renderedDocument.metadata ?? {}).filter(Boolean).length;

    const fitPreview = () => {
      const isSideBySide = window.innerWidth >= 1024;
      const horizontalPadding = window.innerWidth >= 640 ? 96 : 32;
      const availableWidth = (window.innerWidth - horizontalPadding) * (isSideBySide ? 0.72 : 1);
      const verticalChrome = isSideBySide ? 136 : 184 + Math.min(metadataCount, 4) * 30;
      const width = Math.min(availableWidth, (window.innerHeight - verticalChrome) * ratio, 1080);
      setPreviewSize({ width: Math.max(1, Math.floor(width)), height: Math.max(1, Math.floor(width / ratio)) });
    };

    fitPreview();
    window.addEventListener("resize", fitPreview);
    return () => window.removeEventListener("resize", fitPreview);
  }, [renderedDocument]);

  useEffect(() => {
    if (!renderedDocument) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab" || !dialogRef.current) return;
      const items = dialogRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && window.document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && window.document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [renderedDocument, onClose]);

  if (!renderedDocument) return null;

  const { metadata = {}, viewerOptions } = renderedDocument;
  const allowDownload = viewerOptions?.allowDownload === true;
  const metadataEntries = [
    ["Category", metadata.category],
    ["Issued by", metadata.issuer],
    ["Awarded", metadata.issuedDate],
    ["Document type", metadata.documentType],
    ["Status", metadata.verificationStatus],
    ["Last updated", metadata.lastUpdated],
    ["Authors", metadata.authors],
    ["Published", metadata.publicationDate],
    ["Publisher", metadata.publisher],
    ...(metadata.entries ?? []).map(({ label, value }) => [label, value] as [string, string]),
  ].filter((entry): entry is [string, string] => Boolean(entry[1]));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8" data-state={isClosing ? "closing" : "open"}>
      <div className="document-viewer-backdrop absolute inset-0 bg-background/90 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="document-viewer-title" tabIndex={-1} className="document-viewer-panel relative flex max-h-[calc(100vh-2rem)] w-[min(1440px,calc(100vw-2rem))] max-w-full flex-col overflow-hidden rounded-sm border border-border/50 bg-card lg:flex-row">
        <section className="order-2 flex min-h-0 flex-1 items-center justify-center overflow-auto bg-secondary/20 p-3 sm:p-5 lg:order-1 lg:w-[72%]">
          <div className="overflow-hidden rounded-sm border border-border/30 bg-background shadow-lg" style={{ width: previewSize.width || undefined, height: previewSize.height || undefined }}>
            <iframe src={`${renderedDocument.fileUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} className="block h-full w-full bg-background" title={renderedDocument.title} />
          </div>
        </section>
        <aside className="order-1 flex shrink-0 flex-col border-b border-border/40 bg-card lg:order-2 lg:w-[28%] lg:min-w-[280px] lg:border-b-0 lg:border-l">
          <div className="relative p-5 pr-16 sm:p-6 sm:pr-20 lg:pr-16">
            <div className="flex min-w-0 gap-3">
              <FileText className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <div className="min-w-0">
                <h3 id="document-viewer-title" className="text-sm font-semibold leading-snug text-foreground">{metadata.title ?? renderedDocument.title}</h3>
                {metadata.description && <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{metadata.description}</p>}
              </div>
            </div>
            <button type="button" onClick={onClose} aria-label="Close document preview" className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:right-5 sm:top-5 lg:right-3 lg:top-3"><X className="h-4 w-4" /></button>
          </div>
          {metadataEntries.length > 0 && <dl className="grid gap-y-3 border-t border-border/40 px-5 py-5 text-xs sm:grid-cols-2 sm:gap-x-6 sm:px-6 lg:block lg:px-6">
            {metadataEntries.map(([label, value]) => <div key={label} className="lg:mb-4 lg:last:mb-0"><dt className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">{label}</dt><dd className="mt-1 leading-relaxed text-foreground/80">{value}</dd></div>)}
          </dl>}
          {allowDownload && <div className="border-t border-border/40 p-5 sm:px-6 sm:py-4 lg:mt-auto lg:p-6">
            <a href={renderedDocument.fileUrl} download className="flex min-h-11 w-full items-center justify-center gap-2 rounded-sm bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:scale-[1.02] hover:bg-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><Download className="h-3.5 w-3.5" />Download PDF</a>
          </div>}
        </aside>
      </div>
    </div>
  );
}

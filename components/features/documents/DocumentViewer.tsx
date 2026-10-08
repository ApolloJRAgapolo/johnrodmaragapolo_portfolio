"use client";

import { actionStyles } from "@/lib/action-styles";

import { useEffect, useRef, useState } from "react";
import { Download, FileText, X, Info } from "lucide-react";
import type { PreviewDocument } from "@/lib/types";
import { useModalFocus } from "@/lib/hooks/useModalFocus";
import PdfPreview from "./PdfPreview";

type DocumentViewerProps = { document: PreviewDocument | null; onClose: () => void };

/** Shared, in-app PDF viewing experience with reliable empty states on every device. */
export default function DocumentViewer({ document, onClose }: DocumentViewerProps) {
  const [renderedDocument, setRenderedDocument] = useState<PreviewDocument | null>(document);
  const [isClosing, setIsClosing] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  useModalFocus(dialogRef, Boolean(renderedDocument), onClose);

  useEffect(() => {
    if (document) { const frame = requestAnimationFrame(() => { setRenderedDocument(document); setIsClosing(false); }); return () => cancelAnimationFrame(frame); }
    if (!renderedDocument) return;
    const frame = requestAnimationFrame(() => setIsClosing(true));
    const timer = window.setTimeout(() => setRenderedDocument(null), 220);
    return () => { cancelAnimationFrame(frame); window.clearTimeout(timer); };
  }, [document, renderedDocument]);

  if (!renderedDocument) return null;
  const { metadata = {}, viewerOptions } = renderedDocument;
  const isResumePreview = metadata.documentType === "Resume / Curriculum Vitae";
  const metadataEntries = [["Category", metadata.category], ["Issued by", metadata.issuer], ["Awarded", metadata.issuedDate], ["Document type", metadata.documentType], ["Status", metadata.verificationStatus], ["Last updated", metadata.lastUpdated], ["Authors", metadata.authors], ["Published", metadata.publicationDate], ["Publisher", metadata.publisher], ...(metadata.entries ?? []).map(({ label, value }) => [label, value] as [string, string])].filter((entry): entry is [string, string] => Boolean(entry[1]));

  return <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="document-viewer-title" tabIndex={-1} className="fixed inset-0 z-[70] flex items-center justify-center p-[max(0.75rem,env(safe-area-inset-top))] sm:p-8" data-state={isClosing ? "closing" : "open"}>
    <div className="document-viewer-backdrop absolute inset-0 bg-background/95" onClick={onClose} aria-hidden="true" />
    <div className="document-viewer-panel relative flex h-[calc(100dvh-1.5rem)] max-h-[960px] w-full max-w-[1440px] min-w-0 flex-col overflow-hidden rounded-sm border border-border/50 bg-card sm:h-[calc(100dvh-4rem)]">
      <header className="flex shrink-0 items-center justify-between gap-4 border-b border-border/40 px-4 py-2">
        <h2 id="document-viewer-title" className="min-w-0 break-words text-sm font-semibold">{metadata.title ?? renderedDocument.title}</h2>
        <button type="button" onClick={onClose} aria-label="Close document preview" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm text-muted-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><X className="h-4 w-4" /></button>
      </header>
      <div className="min-h-0 min-w-0 flex-1 overflow-y-auto overscroll-contain lg:flex lg:overflow-hidden">
      <section data-viewer-section className="order-1 min-w-0 lg:min-h-0 lg:flex-1 lg:overflow-auto overscroll-contain bg-secondary/20 p-3 sm:p-5 lg:order-1 lg:w-[72%] relative">
        <PdfPreview key={renderedDocument.fileUrl} fileUrl={renderedDocument.fileUrl} title={renderedDocument.title} />
        {!isResumePreview && (
          <div role="note" aria-hidden="true" className="hidden sm:block pointer-events-none absolute left-3 bottom-3 max-w-[46%] rounded-md border border-border/30 bg-background/95 px-2 py-1 shadow-sm">
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
      <aside className="order-2 min-w-0 shrink-0 lg:overflow-y-auto border-t border-border/40 bg-card lg:order-2 lg:flex lg:w-[28%] lg:min-w-[280px] lg:flex-col lg:border-t-0 lg:border-l">
        <div className="relative p-4 sm:p-6"><div className="flex min-w-0 gap-3"><FileText className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" /><div className="min-w-0"><h3 className="text-sm font-semibold">Document details</h3>{metadata.description && <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:mt-3">{metadata.description}</p>}</div></div></div>
        {metadataEntries.length > 0 && <dl className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-border/40 px-4 py-4 text-xs sm:gap-x-6 sm:px-6 lg:block lg:px-6">{metadataEntries.map(([label, value]) => <div key={label} className="min-w-0 lg:mb-4 lg:last:mb-0"><dt className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">{label}</dt><dd className="mt-1 break-words leading-relaxed text-foreground/80">{value}</dd></div>)}</dl>}
        {viewerOptions?.allowDownload === true && <div className="border-t border-border/40 p-4 sm:px-6 sm:py-4 lg:mt-auto lg:p-6"><a href={renderedDocument.fileUrl} download className={`${actionStyles({ variant: "primary" })} w-full`}><Download className="h-4 w-4" aria-hidden="true" />Download PDF</a></div>}
      </aside>
      </div>
    </div>
  </div>;
}

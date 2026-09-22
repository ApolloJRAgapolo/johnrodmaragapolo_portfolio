"use client";

import type { DocumentItem, PreviewDocument } from "@/lib/types";

export default function DocumentRow({ item, onPreview }: { item: DocumentItem; onPreview: (document: PreviewDocument) => void }) {
    const fileUrl = item.fileUrl;
    const isPending = item.viewerMetadata?.verificationStatus === "Certificate Pending";

    return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 border-b border-border/20 hover:bg-secondary/10 transition-all duration-300 px-4 -mx-4 group">
      <div className="min-w-0 transition-transform duration-300 group-hover:translate-x-2">
        <h4 className="text-[13px] font-medium text-foreground">{item.title}</h4>
        <div className="mt-1 flex flex-col gap-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground block">
            {item.meta}
          </span>
          {isPending && (
            <span className="inline-flex items-center rounded-full border border-amber-400/40 bg-amber-400/10 px-2 py-1 text-[10px] font-medium uppercase tracking-widest text-amber-900 dark:text-amber-200">
              Credential Pending
            </span>
          )}
          {!isPending && (
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground block">
              PDF
            </span>
          )}
        </div>
      </div>
      <div className="flex shrink-0 flex-wrap items-center gap-2 mt-3 md:mt-0 opacity-100 transition-all duration-300 ease-out">
        <button
          onClick={() => {
            if (!fileUrl) return;
            onPreview({ title: item.title, fileUrl, metadata: item.viewerMetadata, aspectRatio: item.aspectRatio, viewerOptions: item.viewerOptions });
          }}
          disabled={!fileUrl}
          className={`inline-flex min-h-11 items-center text-[11px] font-medium px-3 py-1.5 transition-colors border border-border/40 ${fileUrl ? "text-foreground hover:bg-foreground hover:text-background" : "text-muted-foreground cursor-not-allowed bg-background"}`}
        >
          Preview
        </button>
        {item.viewerOptions?.allowDownload && fileUrl && <a
          href={fileUrl}
          download
          className="inline-flex min-h-11 items-center text-[11px] font-medium bg-foreground text-background hover:bg-foreground/80 px-3 py-1.5 transition-colors shadow-sm"
        >
          Download
        </a>}
      </div>
    </div>
    );
}

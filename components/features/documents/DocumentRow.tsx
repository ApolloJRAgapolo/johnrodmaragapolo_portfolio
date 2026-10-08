"use client";

import type { DocumentItem, PreviewDocument } from "@/lib/types";
import { getDocumentThumbnail } from "@/lib/data/document-previews";
import DocumentThumbnailImage from "./DocumentThumbnailImage";
import { Eye, Download } from "lucide-react";
import { actionStyles } from "@/lib/action-styles";

export default function DocumentRow({ item, onPreview, showThumbnail = true }: { item: DocumentItem; onPreview: (document: PreviewDocument) => void; showThumbnail?: boolean }) {
    const fileUrl = item.fileUrl;
    const isPending = item.viewerMetadata?.verificationStatus === "Certificate Pending";
    const thumbnail = showThumbnail ? getDocumentThumbnail(fileUrl) : undefined;
    const preview = () => {
      if (!fileUrl) return;
      onPreview({ title: item.title, fileUrl, metadata: item.viewerMetadata, aspectRatio: item.aspectRatio, viewerOptions: item.viewerOptions });
    };

    return (
    <div data-document-id={item.id} className="-mx-3 grid grid-cols-[4.5rem_minmax(0,1fr)] gap-x-4 gap-y-3 border-b border-border/20 px-3 py-4 transition-colors hover:bg-secondary/10 sm:grid-cols-[5.5rem_minmax(0,1fr)] md:grid-cols-[5.5rem_minmax(0,1fr)_auto]">
      <button
        type="button"
        onClick={preview}
        disabled={!fileUrl}
        aria-label={`Preview ${item.title}`}
        className={`relative block h-14 w-[4.5rem] self-start overflow-hidden rounded-sm border border-border/50 bg-secondary/20 sm:h-16 sm:w-[5.5rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background ${fileUrl ? "transition-colors hover:border-foreground/50" : "cursor-not-allowed"}`}
      >
        <DocumentThumbnailImage key={thumbnail?.src ?? item.id} thumbnail={thumbnail} />
      </button>
      <div className="min-w-0">
        <h3 className="text-sm font-medium leading-relaxed text-foreground">{item.title}</h3>
        <div className="mt-1 flex flex-col gap-1">
          <span className="text-xs leading-relaxed text-muted-foreground block">
            {item.meta}
          </span>
          {isPending && (
            <span className="text-xs leading-relaxed text-muted-foreground">
              Credential pending
            </span>
          )}
          {!isPending && (
            <span className="text-xs leading-relaxed text-muted-foreground block">
              {item.kind ?? item.viewerMetadata?.documentType ?? "Supporting document"}
            </span>
          )}
        </div>
      </div>
      <div className="col-span-2 flex flex-wrap items-center gap-2 sm:col-span-1 sm:col-start-2 md:col-start-3 md:row-start-1 md:max-w-[13rem] md:self-center">
        <button
          type="button"
          onClick={preview}
          disabled={!fileUrl}
          aria-label={`Preview ${item.title}`}
          className={actionStyles()}
        >
          <Eye className="h-4 w-4 shrink-0" aria-hidden="true" />Preview
        </button>
        {item.viewerOptions?.allowDownload && fileUrl && <a
          href={fileUrl}
          download
          aria-label={`Download ${item.title}`}
          className={actionStyles({ variant: "quiet" })}
        >
          <Download className="h-4 w-4 shrink-0" aria-hidden="true" />Download
        </a>}
      </div>
    </div>
    );
}

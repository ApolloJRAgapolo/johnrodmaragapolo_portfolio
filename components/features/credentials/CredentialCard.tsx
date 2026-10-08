"use client";

import Link from "next/link";
import Image from "next/image";
import { FileText, ExternalLink, Eye } from "lucide-react";
import { getCredentialDocument, getCredentialThumbnail } from "@/lib/data/credential-previews";
import DocumentThumbnailImage from "@/components/features/documents/DocumentThumbnailImage";
import type { Credential, CredentialKind, IconComponent, PreviewDocument } from "@/lib/types";
import { actionStyles } from "@/lib/action-styles";
import { getCredentialAnchor } from "@/lib/credential-anchors";
import styles from "./CredentialCard.module.css";

const folderLabels: Record<CredentialKind, string> = {
  "Professional certification": "Certification",
  "Course completion": "Course",
  "Certificate of completion": "Completion",
  "Certificate of participation": "Participation",
  "Recognition / award": "Award",
  "Internship documentation": "Internship",
  "Training documentation": "Training",
  "Supporting document": "Document",
};

export default function CredentialCard({ credential, icon: Icon = FileText, onPreview, compact = false }: { credential: Credential; icon?: IconComponent; onPreview: (document: PreviewDocument) => void; compact?: boolean }) {
  const { title, issuer, logoSrc, kind } = credential;
  const document = getCredentialDocument(credential);
  const thumbnail = getCredentialThumbnail(document);
  const displayIssuer = credential.action === "viewer" ? credential.viewerMetadata?.issuer ?? issuer : issuer;
  const actionClassName = actionStyles();
  const thumbnailContent = <DocumentThumbnailImage key={thumbnail?.src ?? title} thumbnail={thumbnail} icon={Icon} compact={compact} />;
  const thumbnailClassName = compact
    ? "relative block h-14 w-[4.5rem] self-start overflow-hidden rounded-sm border border-border/50 bg-secondary/20 p-1 sm:h-16 sm:w-[5.5rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    : `${styles.peek} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-foreground`;
  const thumbnailSurface = compact ? thumbnailContent : <div className={styles.paper}>{thumbnailContent}</div>;
  const previewSurface = document ? (
    <button type="button" className={thumbnailClassName} onClick={() => onPreview(document)} aria-label={`Preview ${title}`}>
      {thumbnailSurface}
    </button>
  ) : credential.action === "verification" ? (
    <Link href={credential.verificationUrl} target="_blank" rel="noopener noreferrer" className={thumbnailClassName} aria-label={`View issuer record for ${title} (opens in a new tab)`}>
      {thumbnailSurface}
    </Link>
  ) : null;

  const details = (
    <div className="min-w-0">
      <h3 className="text-base font-medium leading-snug text-foreground">{title}</h3>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{kind}</p>
      <div className="mt-2 flex items-start gap-2">
        {logoSrc && !compact && (
          <div className="relative mt-0.5 h-4 w-4 shrink-0 grayscale">
            <Image src={logoSrc} alt="" fill sizes="16px" className="object-contain" />
          </div>
        )}
        <p className="text-xs leading-relaxed text-muted-foreground">{displayIssuer}</p>
      </div>
      {!compact && document?.metadata?.issuedDate && <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{document.metadata.issuedDate}</p>}
    </div>
  );

  const actions = (
    <div className={`flex flex-wrap gap-2 ${compact ? "col-span-2 sm:col-span-1 sm:col-start-2 lg:col-start-3 lg:row-start-1 lg:max-w-[16rem] lg:self-center" : "mt-5 border-t border-border/40 pt-3"}`}>
      {document && (
        <button type="button" onClick={() => onPreview(document)} className={actionClassName} aria-label={`Preview ${title}`}>
          <Eye aria-hidden="true" className="h-4 w-4 stroke-[1.5]" />Preview
        </button>
      )}
      {credential.action === "verification" && (
        <Link href={credential.verificationUrl} target="_blank" rel="noopener noreferrer" className={actionStyles({ variant: "quiet" })} aria-label={`View issuer record for ${title} (opens in a new tab)`}>
          Issuer record <ExternalLink aria-hidden="true" className="h-4 w-4 stroke-[1.5]" />
        </Link>
      )}
    </div>
  );

  if (compact) {
    return <article id={getCredentialAnchor(title)} data-credential-layout="record" className="grid scroll-mt-24 grid-cols-[4.5rem_minmax(0,1fr)] gap-x-4 gap-y-3 border-b border-border/40 py-5 sm:grid-cols-[5.5rem_minmax(0,1fr)] lg:grid-cols-[5.5rem_minmax(0,1fr)_auto]">
      {previewSurface}
      {details}
      {actions}
    </article>;
  }

  return (
    <article id={getCredentialAnchor(title)} data-credential-layout="folder" className={`${styles.folder} scroll-mt-24`}>
      <div className={styles.tab}>{folderLabels[kind]}</div>
      <div className={styles.body}>
        {previewSurface}
        <div className={styles.front}>
          {details}
          {actions}
        </div>
      </div>
    </article>
  );
}

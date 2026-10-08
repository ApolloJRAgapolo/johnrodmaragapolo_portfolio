import type { Credential, PreviewDocument } from "@/lib/types";
import { allCertificates } from "@/lib/data/documents";
import { getDocumentThumbnail, type DocumentThumbnail } from "@/lib/data/document-previews";

export type CredentialThumbnail = DocumentThumbnail;

/** Reuse the original viewer payload or an exact title match from the archive. */
export function getCredentialDocument(credential: Credential): PreviewDocument | undefined {
  if (credential.action === "viewer") {
    return {
      title: credential.title,
      fileUrl: credential.pdfPath,
      metadata: credential.viewerMetadata,
      aspectRatio: credential.aspectRatio,
      viewerOptions: credential.viewerOptions,
    };
  }

  const matches = allCertificates.filter(item => item.title === credential.title && item.fileUrl);
  if (matches.length !== 1) return undefined;
  const item = matches[0];
  return {
    title: credential.title,
    fileUrl: item.fileUrl!,
    metadata: item.viewerMetadata,
    aspectRatio: item.aspectRatio,
    viewerOptions: item.viewerOptions,
  };
}

export function getCredentialThumbnail(document: PreviewDocument | undefined) {
  return getDocumentThumbnail(document?.fileUrl);
}

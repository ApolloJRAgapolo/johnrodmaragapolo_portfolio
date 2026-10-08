import thumbnails from "@/lib/data/credential-thumbnails.json";

export type DocumentThumbnail = {
  src: string;
  width: number;
  height: number;
  pdfSha256: string;
  thumbnailSha256: string;
};

const thumbnailManifest: Record<string, DocumentThumbnail> = thumbnails;

/** Use the source URL as the key so overlapping views share the same image. */
export function getDocumentThumbnail(fileUrl: string | undefined) {
  return fileUrl ? thumbnailManifest[decodeURIComponent(fileUrl)] : undefined;
}

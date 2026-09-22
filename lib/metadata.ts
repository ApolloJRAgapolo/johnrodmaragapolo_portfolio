import type { Metadata } from "next";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} | John Rodmar Agapolo`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: { url: path, title: fullTitle, description, type: "website", siteName: "John Rodmar Agapolo", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "John Rodmar Agapolo - Software, Systems & Data" }] },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: ["/opengraph-image"] },
  };
}

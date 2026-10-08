"use client";

import PageHeader from "@/components/shared/PageHeader";


import { useState } from "react";
import DocumentViewer from "@/components/features/documents/DocumentViewer";
import type { PreviewDocument } from "@/lib/types";
import DocumentRow from "@/components/features/documents/DocumentRow";
import { documentCollections, documentFilterTags, professionalDocs, allCertificates } from "@/lib/data/documents";
import { FileText, Eye, Download, Search, ChevronDown, ChevronUp } from "lucide-react";
import { actionStyles } from "@/lib/action-styles";

export default function CertificationLibrary() {
  const [previewDoc, setPreviewDoc] = useState<PreviewDocument | null>(null);
  const [expandedCol, setExpandedCol] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const resume = professionalDocs[0];
  const resumePreview: PreviewDocument = { title: resume.title, fileUrl: resume.fileUrl, metadata: resume.viewerMetadata, aspectRatio: resume.aspectRatio, mode: "resume", viewerOptions: resume.viewerOptions };

  const filteredCertificates = allCertificates.filter(cert => {
    const searchableText = [
      cert.title,
      cert.meta,
      cert.viewerMetadata?.issuer,
      cert.viewerMetadata?.category,
      cert.kind,
      ...cert.tags,
    ].filter(Boolean).join(" ").toLowerCase();
    const matchesSearch = searchableText.includes(normalizedQuery);
    const matchesFilter = activeFilter === "All" || cert.tags.includes(activeFilter);
    return matchesSearch && matchesFilter;
  });
  const isSearching = normalizedQuery.length > 0 || activeFilter !== "All";
  const resetSearch = () => {
    setSearchQuery("");
    setActiveFilter("All");
  };
  const focusClassName = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  return (
    <main id="main-content" tabIndex={-1} className="flex-1 min-h-screen bg-background selection:bg-foreground selection:text-background">
      <div className="page-shell">
        <PageHeader title={"Documents"} description={"My résumé and supporting certificates, awards, and learning records."} eyebrow={"Supporting records"} />

        <section id="resume" aria-labelledby="resume-heading" className="mb-12 scroll-mt-20">
          <h2 id="resume-heading" className="mb-4 text-xl font-semibold tracking-tight text-foreground">Professional Résumé</h2>
          <div className="flex flex-col justify-between gap-5 border-y border-border/40 py-5 xl:flex-row xl:items-center">
            <div className="flex min-w-0 items-start gap-3">
              <FileText aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" />
              <div className="min-w-0">
                <h3 className="text-base font-medium text-foreground">{resume.title}</h3>
                <p className="mt-1 max-w-lg text-sm leading-relaxed text-muted-foreground">{resume.description}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Updated: {resume.updated} · {resume.fileType}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 xl:shrink-0">
              <button
                type="button"
                onClick={() => setPreviewDoc(resumePreview)}
                className={actionStyles()}
              >
                <Eye aria-hidden="true" className="h-4 w-4" /> Preview
              </button>
              {resume.viewerOptions.allowDownload && <a
                href={resume.fileUrl}
                download
                className={actionStyles({ variant: "quiet" })}
              >
                <Download aria-hidden="true" className="h-4 w-4" /> Download
              </a>}
            </div>
          </div>
        </section>

        <section aria-labelledby="archive-heading">
          <h2 id="archive-heading" className="mb-5 text-xl font-semibold tracking-tight text-foreground">Credential Archive</h2>
          <div className="relative mb-5">
            <Search aria-hidden="true" className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              aria-label="Search certificates, skills, or providers"
              placeholder="Search certificates, skills, or providers..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className={`w-full rounded-sm border border-border/40 bg-background py-3 pl-11 pr-4 text-sm ${focusClassName}`}
            />
          </div>
          <div className="mb-7 flex flex-wrap gap-2" role="group" aria-label="Filter documents by topic">
            {documentFilterTags.map(tag => (
              <button
                type="button"
                key={tag}
                aria-pressed={activeFilter === tag}
                onClick={() => setActiveFilter(tag)}
                className={`min-h-11 border px-3 py-2 text-xs font-medium transition-colors ${focusClassName} ${activeFilter === tag ? "border-foreground bg-foreground text-background" : "border-border/40 text-muted-foreground hover:border-foreground/50 hover:text-foreground"}`}
              >
                {tag}
              </button>
            ))}
          </div>

          {isSearching ? (
            <div className="border-t border-border/40 pt-5">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <p role="status" className="text-sm font-medium text-foreground">
                  {filteredCertificates.length} {filteredCertificates.length === 1 ? "document" : "documents"} found
                </p>
                <button type="button" onClick={resetSearch} className={actionStyles({ variant: "quiet" })}>
                  Clear search and filters
                </button>
              </div>
              {filteredCertificates.length > 0 ? filteredCertificates.map(cert => (
                <DocumentRow key={cert.id} item={cert} onPreview={setPreviewDoc} />
              )) : (
                <p className="py-6 text-sm leading-relaxed text-muted-foreground">
                  No documents match this search. Try another title or provider, or clear the filters.
                </p>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {Object.values(documentCollections).map(collection => {
                const isExpanded = expandedCol === collection.id;
                return (
                  <div key={collection.id} className="overflow-hidden rounded-lg border border-border bg-card">
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={`collection-${collection.id}`}
                      onClick={() => setExpandedCol(isExpanded ? null : collection.id)}
                      className={`flex w-full items-start justify-between gap-4 p-4 text-left transition-colors hover:bg-secondary/5 sm:p-5 ${focusClassName}`}
                    >
                      <span className="min-w-0">
                          <span className="flex items-start gap-3">
                            <collection.icon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                            <span className="text-base font-semibold leading-snug text-foreground">{collection.title}</span>
                          </span>
                          <span className="mt-2 block text-xs leading-relaxed text-muted-foreground">
                            {collection.items.length} {collection.items.length === 1 ? "document" : "documents"}
                          </span>
                          <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                            {collection.skills.join(" · ")}
                          </span>
                      </span>
                      <span className="shrink-0 pt-0.5">
                        {isExpanded ? <ChevronUp aria-hidden="true" className="h-4 w-4" /> : <ChevronDown aria-hidden="true" className="h-4 w-4" />}
                      </span>
                    </button>
                    <div
                      id={`collection-${collection.id}`}
                      inert={!isExpanded}
                      aria-hidden={!isExpanded}
                      className={`grid transition-[grid-template-rows,opacity] duration-200 ease-in-out motion-reduce:transition-none ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-border/20 bg-secondary/5 px-4 pb-3 sm:px-5">
                          {collection.items.map(item => <DocumentRow key={item.id} item={item} onPreview={setPreviewDoc} showThumbnail={isExpanded} />)}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
      <DocumentViewer document={previewDoc} onClose={() => setPreviewDoc(null)} />
    </main>
  );
}

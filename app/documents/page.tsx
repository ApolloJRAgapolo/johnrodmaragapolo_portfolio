"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import DocumentViewer from "@/components/features/documents/DocumentViewer";
import type { PreviewDocument } from "@/lib/types";
import DocumentRow from "@/components/features/documents/DocumentRow";
import { documentCollections, documentFilterTags, professionalDocs, allCertificates, verifiedCredentialCount, pendingCredentialCount } from "@/lib/data/documents";
import { 
  FileText, 
  Eye, 
  Download, 
  Search,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// --- MAIN PAGE COMPONENT ---
export default function CertificationLibrary() {
  const [previewDoc, setPreviewDoc] = useState<PreviewDocument | null>(null);
  const [expandedCol, setExpandedCol] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");


  // Search and Filter Logic
  const filteredCertificates = allCertificates.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          cert.meta.toLowerCase().includes(searchQuery.toLowerCase()) || cert.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesFilter = activeFilter === "All" || cert.tags.includes(activeFilter);
    return matchesSearch && matchesFilter;
  });

  const isSearching = searchQuery.length > 0 || activeFilter !== "All";


  return (
    <main id="main-content" tabIndex={-1} className="flex-1 min-h-screen bg-background selection:bg-foreground selection:text-background pb-32">
      <div className="max-w-4xl mx-auto w-full px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24">
        
        {/* HEADER */}
        <RevealOnScroll>
        <header className="mb-16">
          <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground mb-8">
            <span className="text-foreground">Workspace</span>
            <span>/</span>
            <span>Documents</span>
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-6">
            Documents
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-2xl">
            My resume and supporting documents, with searchable certificates, awards, and learning records.
          </p>
        </header>
        </RevealOnScroll>

        {/* PROFESSIONAL DOCUMENTS (Fixed/Uncollapsible) */}
        <RevealOnScroll delay={100}>
        <section id="resume" className="mb-16 scroll-mt-20">
          <h2 className="text-sm font-semibold text-foreground mb-6 border-b border-border/40 pb-4">
            Professional resume
          </h2>
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 py-6 border-b border-border/40 hover:bg-secondary/5 transition-colors px-4 -mx-4 rounded-sm group">
            <div className="flex items-start gap-4">
              <FileText className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors mt-1" />
              <div>
                <h3 className="text-[15px] font-semibold text-foreground tracking-tight">{professionalDocs[0].title}</h3>
                <p className="text-[13px] text-muted-foreground mt-1 max-w-lg">{professionalDocs[0].description}</p>
                <span className="text-xs text-muted-foreground/60 mt-3 block">
                  Updated: {professionalDocs[0].updated} • Format: {professionalDocs[0].fileType}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-4 xl:mt-0 xl:shrink-0">
              <button 
                onClick={() => setPreviewDoc({ title: professionalDocs[0].title, fileUrl: professionalDocs[0].fileUrl, metadata: professionalDocs[0].viewerMetadata, aspectRatio: professionalDocs[0].aspectRatio, mode: "resume", viewerOptions: professionalDocs[0].viewerOptions })}
                className="flex min-h-11 items-center gap-2 px-4 py-2 border border-border/40 text-[12px] font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                <Eye className="w-3.5 h-3.5" /> Preview
              </button>
              {professionalDocs[0].viewerOptions.allowDownload && <a
                href={professionalDocs[0].fileUrl}
                download
                className="flex min-h-11 items-center gap-2 px-4 py-2 bg-foreground text-background text-[12px] font-medium hover:bg-foreground/80 transition-colors"
              >
                <Download className="w-3.5 h-3.5" /> Download
              </a>}
            </div>
          </div>
        </section>
        </RevealOnScroll>

        {/* LEARNING OVERVIEW DASHBOARD */}
        <RevealOnScroll delay={100}>
        <section className="mb-16">
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-5 border-y border-border/40 py-6">
            <div>
              <div className="text-xl font-medium text-foreground mb-1">{verifiedCredentialCount}</div>
              <div className="text-xs text-muted-foreground">Available credentials</div>
            </div>
            <div>
              <div className="text-xl font-medium text-foreground mb-1">{pendingCredentialCount}</div>
              <div className="text-xs text-muted-foreground">Pending credentials</div>
            </div>
            <div>
              <div className="text-xl font-medium text-foreground mb-1">{Object.keys(documentCollections).length}</div>
              <div className="text-xs text-muted-foreground">Document collections</div>
            </div>
            <div>
              <div className="text-xl font-medium text-foreground mb-1">{documentFilterTags.filter(tag => tag !== "All").length}</div>
              <div className="text-xs text-muted-foreground">Search categories</div>
            </div>
          </div>
        </section>
        </RevealOnScroll>

        {/* SEARCH & FILTERS */}
        <RevealOnScroll>
        <section className="mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              aria-label="Search certificates, skills, or providers"
              placeholder="Search certificates, skills, or providers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-background border border-border/40 pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors rounded-sm"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {documentFilterTags.map(tag => (
              <button
                key={tag}
                aria-pressed={activeFilter === tag}
                onClick={() => setActiveFilter(tag)}
                className={`min-h-11 px-3 py-1.5 text-xs font-medium transition-colors border ${
                  activeFilter === tag 
                  ? 'border-foreground bg-foreground text-background' 
                  : 'border-border/40 text-muted-foreground hover:border-foreground/50 hover:text-foreground'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>
        </RevealOnScroll>

        {/* COLLECTIONS / RESULTS VIEW */}
        <RevealOnScroll delay={100}>
        <section>
          
          {/* SEARCH RESULTS MODE */}
          {isSearching ? (
            <div className="border-t border-border/40 pt-8">
              <h2 className="text-sm font-semibold text-foreground mb-6">
                Search Results ({filteredCertificates.length})
              </h2>
              {filteredCertificates.length > 0 ? (
                filteredCertificates.map(cert => <DocumentRow key={cert.id} item={cert} onPreview={setPreviewDoc} />)
              ) : (
                <div className="text-sm text-muted-foreground py-8 text-center border border-dashed border-border/40">
                  No certificates found matching your criteria.
                </div>
              )}
            </div>
          ) : (
            
          /* COLLECTIONS MODE */
          <div className="flex flex-col gap-6">
            {Object.values(documentCollections).map((collection, index) => {
              const isExpanded = expandedCol === collection.id;
              
              return (
                <RevealOnScroll animate={false} key={collection.id} delay={index * 100}>
                <div className="border border-border/40 rounded-sm overflow-hidden">
                  {/* Collection Header (Clickable) */}
                  <button type="button" aria-expanded={isExpanded} aria-controls={`collection-${collection.id}`}
                    onClick={() => setExpandedCol(isExpanded ? null : collection.id)}
                    className="w-full text-left p-6 cursor-pointer hover:bg-secondary/5 transition-colors group flex flex-col xl:flex-row xl:items-center justify-between"
                  >
                    <span className="flex-1">
                      <span className="flex items-center gap-3 mb-2">
                        <collection.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                        <span className="text-lg font-semibold text-foreground tracking-tight">{collection.title}</span>
                      </span>
                      
                      <span className="flex flex-col sm:flex-row sm:items-center gap-4 text-[12px] text-muted-foreground mb-4 md:mb-0">
                        <span className="font-mono uppercase tracking-widest text-foreground">{collection.count}</span>
                        <span className="hidden sm:inline text-border/40">|</span>
                        <span className="flex flex-wrap gap-1.5">
                          {collection.skills.map((skill, i) => (
                            <span key={i} className="after:content-['•'] after:ml-1.5 last:after:content-[''] after:text-border/40">
                              {skill}
                            </span>
                          ))}
                        </span>
                      </span>
                    </span>

                    <span className="mt-6 md:mt-0 flex flex-col md:items-end justify-between xl:ml-8 w-full xl:w-auto">
                      <span className="text-[8px] tracking-[0.3em] font-mono text-muted-foreground/40 mb-3 hidden md:block">
                        {collection.progress}
                      </span>
                      <span className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-foreground border border-border/40 px-4 py-2 group-hover:bg-foreground group-hover:text-background transition-colors self-start md:self-end">
                        {isExpanded ? "Close Collection" : "View Collection"}
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </span>
                    </span>
                  </button>

                  {/* Expanded Items List */}
                  <div id={`collection-${collection.id}`} inert={!isExpanded} aria-hidden={!isExpanded} className={`grid transition-all duration-500 ease-in-out ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 bg-secondary/5 border-t border-border/20">
                      <div className="pt-2">
                        {collection.items.map(item => (
                          <DocumentRow key={item.id} item={item} onPreview={setPreviewDoc} />
                        ))}
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                </RevealOnScroll>
              );
            })}
          </div>
          )}
        </section>
        </RevealOnScroll>

        {/* FUTURE-PROOF FOOTER */}
        <RevealOnScroll delay={100}>
        <footer className="pt-16 mt-16 border-t border-border/20">
          <p className="text-[12px] leading-relaxed text-muted-foreground/60 max-w-lg font-mono">
            {"// This repository will continue to expand as I complete new certifications and finalize project documentation throughout my career architecture."}
          </p>
        </footer>
        </RevealOnScroll>

      </div>

      <DocumentViewer document={previewDoc} onClose={() => setPreviewDoc(null)} />
    </main>
  );
}

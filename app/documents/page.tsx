"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import DocumentViewer, { type PreviewDocument } from "@/components/DocumentViewer";
import type { DocumentItem as Document } from "@/lib/types";
import { documentCollections, documentFilterTags, professionalDocs } from "@/lib/data/documents";
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

  // These routes match the exact filenames and folders in public/certificates.
  // Files in public are served from the site root, so spaces must be URL encoded.
  const certificateFileUrl = (item: { title: string; fileUrl: string }) => {
    const exactFiles: Record<string, string> = {
      "Magna Cum Laude": "Awards and Recognition/Magna Cum Laude.pdf",
      "Best Capstone Project": "Awards and Recognition/Cert of Recognition Best Capstone Research Award.pdf",
      "Startup Hackathon Champion": "Awards and Recognition/2025 Iloilo Province Startup Hackathon Cert. of Recognition.pdf",
      "Outstanding Intern": "Awards and Recognition/Cert of Recognition Outstanding Intern Award.pdf",
      "Data Analytics Essentials": "Cisco/DataAnalyticsEssentialsUpdate20260803-8-qrux73.pdf",
      "Introduction to Data Science": "Cisco/IntrotoDataScienceUpdate20260803-8-5pq7dk.pdf",
      "Data Science Essentials with Python": "Cisco/DataScienceEssentialswithPythonv120260803-8-hb1gqp.pdf",
      "Python Essentials 1": "Cisco/PythonEssentials1Update20260803-8-o1mbik.pdf",
      "Python Essentials 2": "Cisco/PythonEssentials2Update20260803-8-vt25m1.pdf",
      "Data Literacy Professional": "Datacamp/DATA LITERACY.pdf",
      "Data Literacy Case Study: Remote Working Analysis": "Datacamp/Data Literacy Case Study Remote Working.pdf",
      "CHED RAISE 2026": "Artificial Intelligence/AGAPOLO_CHED RAISE Appearance.pdf",
      "AI Ready ASEAN": "Artificial Intelligence/AGAPOLO AI READY ASEAN CERTIFICATE.pdf",
    };

    const file = exactFiles[item.title] ?? (item.fileUrl.includes("/datacamp/")
      ? `Datacamp/${item.title}.pdf`
      : undefined);

    return file ? `/certificates/${encodeURIComponent(file).replace(/%2F/g, "/")}` : item.fileUrl;
  };

  const allCertificates = Object.values(documentCollections).flatMap(collection => collection.items);

  // Search and Filter Logic
  const filteredCertificates = allCertificates.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          cert.meta.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === "All" || cert.tags.includes(activeFilter);
    return matchesSearch && matchesFilter;
  });

  const isSearching = searchQuery.length > 0 || activeFilter !== "All";

  // Reusable Document Item (Inner Row)
  const DocumentItem = ({ item }: { item: Document }) => {
    const fileUrl = certificateFileUrl(item);
    return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-border/20 hover:bg-secondary/10 transition-all duration-300 px-4 -mx-4 group">
      <div className="transition-transform duration-300 group-hover:translate-x-2">
        <h4 className="text-[13px] font-medium text-foreground">{item.title}</h4>
        <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-1 block">
          {item.meta} • PDF
        </span>
      </div>
      <div className="flex items-center gap-2 mt-3 sm:mt-0 opacity-100 sm:opacity-0 sm:-translate-x-4 sm:group-hover:opacity-100 sm:group-hover:translate-x-0 transition-all duration-300 ease-out">
        <button 
          onClick={() => setPreviewDoc({ title: item.title, fileUrl, metadata: item.viewerMetadata, aspectRatio: item.aspectRatio, viewerOptions: item.viewerOptions })}
          className="inline-flex min-h-11 items-center text-[11px] font-medium text-foreground hover:bg-foreground hover:text-background border border-border/40 px-3 py-1.5 transition-colors"
        >
          Preview
        </button>
        {item.viewerOptions?.allowDownload && <a
          href={fileUrl}
          download
          className="inline-flex min-h-11 items-center text-[11px] font-medium bg-foreground text-background hover:bg-foreground/80 px-3 py-1.5 transition-colors shadow-sm"
        >
          Download
        </a>}
      </div>
    </div>
    );
  };

  return (
    <main className="flex-1 min-h-screen bg-background selection:bg-foreground selection:text-background pb-32">
      <div className="max-w-4xl mx-auto w-full px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24">
        
        {/* HEADER */}
        <RevealOnScroll>
        <header className="mb-16">
          <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground mb-8">
            <span className="text-foreground">Workspace</span>
            <span>/</span>
            <span>Knowledge Repository</span>
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-6">
            Certification Library
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-2xl">
            A curated repository of my professional documentation, verified certifications, and technical upskilling.
          </p>
        </header>
        </RevealOnScroll>

        {/* PROFESSIONAL DOCUMENTS (Fixed/Uncollapsible) */}
        <RevealOnScroll delay={100}>
        <section className="mb-16">
          <h2 className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6 border-b border-border/40 pb-4">
            Primary Document
          </h2>
          <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-border/40 hover:bg-secondary/5 transition-colors px-4 -mx-4 rounded-sm group">
            <div className="flex items-start gap-4">
              <FileText className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors mt-1" />
              <div>
                <h3 className="text-[15px] font-semibold text-foreground tracking-tight">{professionalDocs[0].title}</h3>
                <p className="text-[13px] text-muted-foreground mt-1 max-w-lg">{professionalDocs[0].description}</p>
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60 mt-3 block">
                  Updated: {professionalDocs[0].updated} • Format: {professionalDocs[0].fileType}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-4 md:mt-0 pl-9 md:pl-0">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border border-border/40 p-6 bg-secondary/5 rounded-sm">
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">57</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Certificates Earned</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">9</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Learning Providers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">400+</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Hours of Learning</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">12</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Technical Domains</div>
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
                onClick={() => setActiveFilter(tag)}
                className={`min-h-11 px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider transition-colors border ${
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
        <section>
          
          {/* SEARCH RESULTS MODE */}
          {isSearching ? (
            <div className="border-t border-border/40 pt-8">
              <h2 className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Search Results ({filteredCertificates.length})
              </h2>
              {filteredCertificates.length > 0 ? (
                filteredCertificates.map(cert => <DocumentItem key={cert.id} item={cert} />)
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
                <RevealOnScroll key={collection.id} delay={index * 100}>
                <div className="border border-border/40 rounded-sm overflow-hidden">
                  {/* Collection Header (Clickable) */}
                  <div 
                    onClick={() => setExpandedCol(isExpanded ? null : collection.id)}
                    className="p-6 cursor-pointer hover:bg-secondary/5 transition-colors group flex flex-col md:flex-row md:items-center justify-between"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <collection.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                        <h3 className="text-lg font-semibold text-foreground tracking-tight">{collection.title}</h3>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-[12px] text-muted-foreground mb-4 md:mb-0">
                        <span className="font-mono uppercase tracking-widest text-foreground">{collection.count}</span>
                        <span className="hidden sm:inline text-border/40">|</span>
                        <div className="flex flex-wrap gap-1.5">
                          {collection.skills.map((skill, i) => (
                            <span key={i} className="after:content-['•'] after:ml-1.5 last:after:content-[''] after:text-border/40">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 md:mt-0 flex flex-col md:items-end justify-between md:ml-8 w-full md:w-auto">
                      <div className="text-[8px] tracking-[0.3em] font-mono text-muted-foreground/40 mb-3 hidden md:block">
                        {collection.progress}
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-foreground border border-border/40 px-4 py-2 group-hover:bg-foreground group-hover:text-background transition-colors self-start md:self-end">
                        {isExpanded ? "Close Collection" : "View Collection"}
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Items List */}
                  <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 bg-secondary/5 border-t border-border/20">
                      <div className="pt-2">
                        {collection.items.map(item => (
                          <DocumentItem key={item.id} item={item} />
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

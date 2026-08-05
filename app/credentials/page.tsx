"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ShieldCheck, ExternalLink, FileText, Award, GraduationCap, Briefcase, Eye } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import DocumentViewer, { type PreviewDocument } from "@/components/DocumentViewer";
import type { ComponentType } from "react";
import type { Credential } from "@/lib/types";
import { aiAndMlops, cloudAndSecurity, coreCertifications, dataLiteracy, honorsAndInternships } from "@/lib/data/credentials";

// --- REUSABLE UI COMPONENT ---

function CredentialItem({ credential, icon: Icon = ShieldCheck, onPreview }: { credential: Credential; icon?: ComponentType<{ className?: string }>; onPreview: (document: PreviewDocument) => void }) {
  const { title, issuer, logoSrc } = credential;
  return (
    <div className="group flex flex-col justify-between p-6 border border-border/40 hover:border-foreground/20 transition-colors bg-secondary/5 h-full">
      <div>
        <Icon className="w-4 h-4 stroke-[1.5] text-muted-foreground mb-4" />
        <h4 className="text-[13px] font-medium text-foreground leading-snug mb-2">{title}</h4>
        
        <div className="flex items-center gap-2">
          {logoSrc && (
            <div className="relative w-4 h-4 opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
              <Image 
                src={logoSrc} 
                alt={`${issuer} logo`} 
                fill 
                className="object-contain"
              />
            </div>
          )}
          <p className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider">{issuer}</p>
        </div>
      </div>
      <div className="mt-6 pt-4 border-t border-border/40">
        {credential.action === "viewer" ? (
          <button type="button" onClick={() => onPreview({ title, fileUrl: credential.pdfPath, metadata: credential.viewerMetadata, aspectRatio: credential.aspectRatio, viewerOptions: credential.viewerOptions })} className="flex min-h-11 items-center gap-2 text-[10px] uppercase tracking-widest text-foreground transition-colors hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            View Credential <Eye className="w-3 h-3 stroke-[1.5]" />
          </button>
        ) : (
          <Link href={credential.verificationUrl} target="_blank" className="flex min-h-11 items-center gap-2 text-[10px] uppercase tracking-widest text-foreground transition-colors hover:text-muted-foreground">
            Verify Credential <ExternalLink className="w-3 h-3 stroke-[1.5]" />
          </Link>
        )}
      </div>
    </div>
  );
}

// --- MAIN PAGE ---

export default function Credentials() {
  const [previewDoc, setPreviewDoc] = useState<PreviewDocument | null>(null);
  const honorIcons: ComponentType<{ className?: string }>[] = [GraduationCap, Award, Award, Award, FileText, Briefcase, Briefcase];
  return (
    <main className="flex-1 h-screen overflow-y-auto bg-background selection:bg-foreground selection:text-background">
      <div className="max-w-5xl mx-auto w-full px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24">
        
        {/* HEADER */}
        <RevealOnScroll delay={0}>
          <header className="mb-24">
            <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground mb-8">
              <span className="text-foreground">Credentials Ledger</span>
              <span>/</span>
              <span>56 Verified Credentials</span>
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight text-foreground mb-6">
              Verified Credentials
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-2xl">
              A verified record of my certifications, academic achievements, and professional development.
            </p>
          </header>
        </RevealOnScroll>

        {/* SECTION 1: ACADEMIC & AWARDS */}
        <section className="mb-24">
          <RevealOnScroll delay={0}>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-8 border-b border-border/40 pb-3 flex items-center gap-2">
              <Award className="w-3.5 h-3.5 stroke-[1.5]" />
              Honors, Awards & Internships
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {honorsAndInternships.map((credential, i) => <RevealOnScroll key={credential.title} delay={(i + 2) * 50} className="h-full"><CredentialItem credential={credential} icon={honorIcons[i]} onPreview={setPreviewDoc} /></RevealOnScroll>)}
          </div>
        </section>

        {/* SECTION 2: CORE CERTIFICATIONS */}
        <section className="mb-24">
          <RevealOnScroll delay={0}>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-8 border-b border-border/40 pb-3 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 stroke-[1.5]" />
              Core Professional Certifications
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreCertifications.map((cert, i) => (
              <RevealOnScroll key={i} delay={(i + 1) * 100} className="h-full">
                <CredentialItem credential={cert} onPreview={setPreviewDoc} />
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* SECTION 3: DATA LITERACY */}
        <section className="mb-24">
          <RevealOnScroll delay={0}>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-8 border-b border-border/40 pb-3">
              Data Literacy & Strategy
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dataLiteracy.map((cert, i) => (
              <RevealOnScroll key={i} delay={(i + 1) * 100} className="h-full">
                <CredentialItem credential={cert} onPreview={setPreviewDoc} />
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* SECTION 4: AI & MLOPS */}
        <section className="mb-24">
          <RevealOnScroll delay={0}>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-8 border-b border-border/40 pb-3">
              Artificial Intelligence & MLOps
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiAndMlops.map((cert, i) => (
              <RevealOnScroll key={i} delay={(i + 1) * 100} className="h-full">
                <CredentialItem credential={cert} onPreview={setPreviewDoc} />
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* SECTION 5: CLOUD & SECURITY */}
        <section className="mb-12">
          <RevealOnScroll delay={0}>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-8 border-b border-border/40 pb-3">
              Cloud, Architecture & Security
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cloudAndSecurity.map((cert, i) => (
              <RevealOnScroll key={i} delay={(i + 1) * 100} className="h-full">
                <CredentialItem credential={cert} onPreview={setPreviewDoc} />
              </RevealOnScroll>
            ))}
          </div>
        </section>

      </div>
      <DocumentViewer document={previewDoc} onClose={() => setPreviewDoc(null)} />
    </main>
  );
}

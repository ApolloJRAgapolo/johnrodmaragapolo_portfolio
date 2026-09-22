"use client";

import Link from "next/link";
import { useState } from "react";
import { ShieldCheck, FileText, Award, GraduationCap, Briefcase } from "lucide-react";
import CredentialCard from "@/components/features/credentials/CredentialCard";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import DocumentViewer from "@/components/features/documents/DocumentViewer";
import type { PreviewDocument } from "@/lib/types";
import type { IconComponent } from "@/lib/types";
import { aiAndMlops, cloudAndSecurity, coreCertifications, dataLiteracy, honorsAndInternships } from "@/lib/data/credentials";
import { verifiedCredentialCount } from "@/lib/data/documents";

// --- REUSABLE UI COMPONENT ---

// --- MAIN PAGE ---

export default function Credentials() {
  const [previewDoc, setPreviewDoc] = useState<PreviewDocument | null>(null);
  const honorIcons: IconComponent[] = [GraduationCap, Award, Award, Award, FileText, Briefcase, Briefcase];
  const selectedTitles = new Set(["Best Capstone Project Award", "Outstanding Intern Award", "Data Literacy Professional", "Python Essentials 2"]);
  const selectedCredentials = [...honorsAndInternships, ...coreCertifications].filter(item => selectedTitles.has(item.title));
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 min-h-screen bg-background selection:bg-foreground selection:text-background">
      <div className="max-w-5xl mx-auto w-full px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24">
        
        {/* HEADER */}
        <RevealOnScroll delay={0}>
          <header className="mb-24">
            <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground mb-8">
              <span className="text-foreground">Professional development</span>
              <span>/</span>
              <span>{verifiedCredentialCount} Verified Credentials</span>
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight text-foreground mb-6">
              Verified Credentials
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-2xl">
              A verified record of my certifications, academic achievements, and professional development.
            </p>
          </header>
        </RevealOnScroll>

        <RevealOnScroll>
        <section aria-labelledby="selected-credentials" className="mb-16">
          <h2 id="selected-credentials" className="mb-4 text-base font-semibold">Selected Credentials</h2>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">A selection supporting my software, systems, and data work. Each card identifies whether it documents an award, certification, course completion, or participation.</p>
          <div className="grid gap-4 sm:grid-cols-2">{selectedCredentials.map(credential => <CredentialCard key={credential.title} credential={credential} onPreview={setPreviewDoc} />)}</div>
          <Link href="/documents" className="mt-6 inline-block text-sm underline underline-offset-4">Search the complete document archive</Link>
        </section>
        </RevealOnScroll>

        {/* SECTION 1: ACADEMIC & AWARDS */}
        <RevealOnScroll delay={100}>
        <section className="mb-24">
          <RevealOnScroll animate={false} delay={0}>
            <h2 className="text-base font-semibold tracking-tight text-foreground mb-8 border-b border-border/40 pb-3 flex items-center gap-2">
              <Award className="w-3.5 h-3.5 stroke-[1.5]" />
              Honors, Awards & Internships
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {honorsAndInternships.filter(item => !selectedTitles.has(item.title)).map((credential, i) => <RevealOnScroll animate={false} key={credential.title} delay={(i + 2) * 50} className="h-full"><CredentialCard credential={credential} icon={honorIcons[i]} onPreview={setPreviewDoc} /></RevealOnScroll>)}
          </div>
        </section>
        </RevealOnScroll>

        {/* SECTION 2: CORE CERTIFICATIONS */}
        <RevealOnScroll delay={100}>
        <section className="mb-24">
          <RevealOnScroll animate={false} delay={0}>
            <h2 className="text-base font-semibold tracking-tight text-foreground mb-8 border-b border-border/40 pb-3 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 stroke-[1.5]" />
              Technical Courses & Certifications
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {coreCertifications.filter(item => !selectedTitles.has(item.title)).map((cert, i) => (
              <RevealOnScroll animate={false} key={i} delay={(i + 1) * 100} className="h-full">
                <CredentialCard credential={cert} onPreview={setPreviewDoc} />
              </RevealOnScroll>
            ))}
          </div>
        </section>
        </RevealOnScroll>

        {/* SECTION 3: DATA LITERACY */}
        <RevealOnScroll delay={100}>
        <section className="mb-24">
          <RevealOnScroll animate={false} delay={0}>
            <h2 className="text-base font-semibold tracking-tight text-foreground mb-8 border-b border-border/40 pb-3">
              Data Literacy & Strategy
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {dataLiteracy.map((cert, i) => (
              <RevealOnScroll animate={false} key={i} delay={(i + 1) * 100} className="h-full">
                <CredentialCard credential={cert} onPreview={setPreviewDoc} />
              </RevealOnScroll>
            ))}
          </div>
        </section>
        </RevealOnScroll>

        {/* SECTION 4: AI & MLOPS */}
        <RevealOnScroll delay={100}>
        <section className="mb-24">
          <RevealOnScroll animate={false} delay={0}>
            <h2 className="text-base font-semibold tracking-tight text-foreground mb-8 border-b border-border/40 pb-3">
              Artificial Intelligence & MLOps
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {aiAndMlops.map((cert, i) => (
              <RevealOnScroll animate={false} key={i} delay={(i + 1) * 100} className="h-full">
                <CredentialCard credential={cert} onPreview={setPreviewDoc} />
              </RevealOnScroll>
            ))}
          </div>
        </section>
        </RevealOnScroll>

        {/* SECTION 5: CLOUD & SECURITY */}
        <RevealOnScroll delay={100}>
        <section className="mb-12">
          <RevealOnScroll animate={false} delay={0}>
            <h2 className="text-base font-semibold tracking-tight text-foreground mb-8 border-b border-border/40 pb-3">
              Cloud, Architecture & Security
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {cloudAndSecurity.map((cert, i) => (
              <RevealOnScroll animate={false} key={i} delay={(i + 1) * 100} className="h-full">
                <CredentialCard credential={cert} onPreview={setPreviewDoc} />
              </RevealOnScroll>
            ))}
          </div>
        </section>
        </RevealOnScroll>

      </div>
      <DocumentViewer document={previewDoc} onClose={() => setPreviewDoc(null)} />
    </main>
  );
}

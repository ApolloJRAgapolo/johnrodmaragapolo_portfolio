"use client";

import { actionStyles } from "@/lib/action-styles";
import PageHeader from "@/components/shared/PageHeader";


import Link from "next/link";
import { useState } from "react";
import CredentialCard from "@/components/features/credentials/CredentialCard";
import DocumentViewer from "@/components/features/documents/DocumentViewer";
import type { PreviewDocument } from "@/lib/types";
import { aiAndMlops, cloudAndSecurity, coreCertifications, dataLiteracy, honorsAndInternships } from "@/lib/data/credentials";

const selectedTitles = new Set(["Magna Cum Laude", "Best Capstone Project Award", "Outstanding Intern Award", "GCI World April 2026", "Data Literacy Professional", "Python Essentials 2"]);
const selectedCredentials = [...honorsAndInternships, ...coreCertifications].filter(item => selectedTitles.has(item.title));
const credentialGroups = [
  { id: "recognition", title: "Recognition & Professional Development", credentials: honorsAndInternships },
  { id: "technical-courses", title: "Technical Courses & Certifications", credentials: coreCertifications },
  { id: "data-literacy", title: "Data Literacy & Strategy", credentials: dataLiteracy },
  { id: "ai-mlops", title: "Artificial Intelligence & MLOps", credentials: aiAndMlops },
  { id: "cloud-security", title: "Cloud, Architecture & Security", credentials: cloudAndSecurity },
];

export default function Credentials() {
  const [previewDoc, setPreviewDoc] = useState<PreviewDocument | null>(null);

  return (
    <main id="main-content" tabIndex={-1} className="flex-1 min-h-screen bg-background selection:bg-foreground selection:text-background">
      <div className="page-shell">
        <PageHeader title={"Credentials"} description={"Selected awards, certifications, and learning records supporting my project and internship experience."} eyebrow={"Professional development"} />

        <section aria-labelledby="selected-credentials" className="page-section">
          <h2 id="selected-credentials" className="mb-5 text-xl font-semibold tracking-tight text-foreground">Selected Credentials</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {selectedCredentials.map(credential => <CredentialCard key={credential.title} credential={credential} onPreview={setPreviewDoc} />)}
          </div>
        </section>

        <section aria-labelledby="credential-record" className="mb-12">
          <h2 id="credential-record" className="mb-3 text-xl font-semibold tracking-tight text-foreground">Complete Record</h2>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            Browse the remaining records by topic, or search the document archive for certificates, awards, and participation records.
          </p>
          <Link href="/documents" className={actionStyles()}>
            Search the document archive
          </Link>
          <nav aria-label="Credential topics" className="mt-4 flex flex-wrap gap-x-5 gap-y-1 border-y border-border/40 py-3">
            {credentialGroups.map(group => (
              <a key={group.id} href={`#${group.id}`} className="inline-flex min-h-11 items-center text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground">
                {group.title}
              </a>
            ))}
          </nav>
        </section>

        {credentialGroups.map(group => (
          <section key={group.id} id={group.id} aria-labelledby={`${group.id}-heading`} className="mb-12 scroll-mt-8 last:mb-0">
            <h2 id={`${group.id}-heading`} className="mb-3 text-lg font-semibold tracking-tight text-foreground">{group.title}</h2>
            <div>
              {group.credentials.filter(credential => !selectedTitles.has(credential.title)).map(credential => (
                <CredentialCard key={credential.title} credential={credential} compact onPreview={setPreviewDoc} />
              ))}
            </div>
          </section>
        ))}
      </div>
      <DocumentViewer document={previewDoc} onClose={() => setPreviewDoc(null)} />
    </main>
  );
}

import PageHeader from "@/components/shared/PageHeader";
import Link from "next/link";
import { ArrowUpRight, Download, FileText } from "lucide-react";
import { contactMethods } from "@/lib/data/contact";
import { professionalDocs } from "@/lib/data/documents";
import { actionStyles } from "@/lib/action-styles";

const primaryContactMethods = ["Email", "LinkedIn", "GitHub"].flatMap((label) =>
  contactMethods.filter((method) => method.label === label)
);
const supportingProfiles = contactMethods.filter((method) =>
  ["JobStreet", "Facebook"].includes(method.label ?? "")
);
const resume = professionalDocs.find((document) => document.id === "resume-2026");

export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 min-h-screen overflow-y-auto bg-background pb-16 selection:bg-foreground selection:text-background">
      <div className="page-shell">
        <PageHeader title={"Let's Connect"} description={"Have an opportunity or a project in mind? I'd be happy to hear from you."} />

        <section aria-labelledby="contact-methods" className="mb-12">
          <h2 id="contact-methods" className="sr-only">Contact methods</h2>
          <div className="divide-y divide-border/40 border-y border-border/40">
            {primaryContactMethods.map(({ label, value, href, icon: Icon }) => (
              <Link key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="group flex min-h-20 items-start gap-3 py-5 transition-colors hover:bg-secondary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40">
                <Icon className="mt-1 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-foreground" aria-hidden="true" />
                <span className="min-w-0 flex-1"><span className="block text-base font-medium text-foreground">{label}</span><span className="mt-1 block break-words text-sm text-muted-foreground">{value}</span></span>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-foreground" aria-hidden="true" />
              </Link>
            ))}
            <div className="flex items-start gap-3 py-5">
              <FileText className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-medium text-foreground">Resume</h3>
                <p className="mt-1 text-sm text-muted-foreground">Education, experience, projects, and achievements.</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <Link href="/documents#resume" className={actionStyles()}>View résumé <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
                  {resume?.viewerOptions?.allowDownload && <a href={resume.fileUrl} download className={actionStyles({ variant: "quiet" })}>Download PDF <Download className="h-4 w-4" aria-hidden="true" /></a>}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="professional-direction" className="mb-10">
          <h2 id="professional-direction" className="mb-3 text-xl font-semibold tracking-tight text-foreground">Professional Direction</h2>
          <p className="max-w-prose text-base leading-relaxed text-muted-foreground">I&apos;m pursuing entry-level web development and software engineering roles, with systems analysis and project coordination as supporting experience.</p>
        </section>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <span className="text-xs">Other profiles</span>
          {supportingProfiles.map(({ label, href }) => <Link key={label} href={href} target="_blank" rel="noreferrer" className="inline-flex min-h-9 items-center gap-1.5 underline underline-offset-4 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40">{label}<ArrowUpRight className="h-3 w-3" aria-hidden="true" /></Link>)}
        </div>
      </div>
    </main>
  );
}

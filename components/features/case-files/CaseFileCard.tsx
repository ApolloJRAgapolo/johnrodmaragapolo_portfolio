import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { SiGithub } from "react-icons/si";
import TechnologyList from "@/components/shared/TechnologyList";
import { actionStyles } from "@/lib/action-styles";
import type { CaseFile } from "@/lib/types";

export default function CaseFileCard({ file }: { file: CaseFile }) {
  const { role, focus, focusLabel, status, year } = file.metadata;
  const contributionLabel = focusLabel === "TECH STACK" ? "Technology stack" : "Areas of contribution";

  return (
    <article data-case-file={file.id} className="min-w-0 rounded-lg border border-border bg-card p-5 transition-colors hover:border-muted-foreground/50 motion-reduce:transition-none sm:p-7">
      <header>
        <p className="mb-2 text-xs leading-relaxed text-muted-foreground">{file.category ?? file.type}</p>
        <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2">
          <h2 className="text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl">{file.title}</h2>
          <p className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1.5 text-xs leading-relaxed text-muted-foreground">
            <span className="max-w-full rounded-full bg-secondary/40 px-3 py-1.5 leading-snug">{status}</span>
            {year && <span>{year}</span>}
          </p>
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/80">{file.cardDescription ?? file.headline ?? file.summary}</p>
      </header>

      <dl className="mt-5 grid gap-x-8 gap-y-5 border-t border-border/60 pt-4 sm:grid-cols-2">
        <div className="min-w-0">
          <dt className="text-xs leading-relaxed text-muted-foreground">My contribution</dt>
          <dd className="mt-2">
            <p className="text-sm leading-relaxed text-foreground/90">{role}</p>
            {file.proofPoints && file.proofPoints.length > 0 && <ul aria-label={`${file.title}: project evidence`} className="mt-2.5 space-y-1.5">
              {file.proofPoints.map((point) => <li key={point} className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />{point}</li>)}
            </ul>}
          </dd>
        </div>
        <div className="min-w-0">
          <dt className="text-xs leading-relaxed text-muted-foreground">{contributionLabel}</dt>
          <dd className="mt-2">
            <TechnologyList items={focus} label={`${file.title}: ${contributionLabel.toLowerCase()}`} className="gap-x-4 gap-y-2.5 sm:grid sm:grid-cols-1 md:grid-cols-2" />
          </dd>
        </div>
      </dl>

      <div role="group" aria-label={`${file.title}: project links`} className="mt-5 flex flex-wrap items-center gap-2 border-t border-border/60 pt-4">
        {file.isAvailable && <Link href={`/case-files/${file.id}`} className={actionStyles({ variant: "primary" })}>
          View case study<ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
        </Link>}
        {file.liveUrl && <a href={file.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open ${file.title} live app in a new tab`} className={actionStyles({ variant: "secondary" })}>Live app<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" /></a>}
        {file.repositoryUrl && <a href={file.repositoryUrl} target="_blank" rel="noreferrer" aria-label={`Open ${file.title} source on GitHub in a new tab`} className={actionStyles({ variant: "quiet" })}><SiGithub className="h-4 w-4 shrink-0" aria-hidden="true" />Source<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" /></a>}
      </div>
    </article>
  );
}

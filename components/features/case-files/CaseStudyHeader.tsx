import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { actionStyles } from "@/lib/action-styles";
import { caseFiles } from "@/lib/data/case-files";

export default function CaseStudyHeader({ id, title, description }: { id: string; title?: string; description?: string }) {
  const project = caseFiles.find((file) => file.id === id)!;
  return <>
    <Link href="/case-files" className="mb-6 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm text-foreground/80 underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 motion-reduce:transition-none">
      <ArrowLeft className="h-4 w-4" aria-hidden="true" />All projects
    </Link>
    <header className="mb-8">
      <p className="mb-2 text-sm text-muted-foreground">{project.category ?? project.type}</p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <h1 className="min-w-0 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title ?? project.title}</h1>
        {(project.liveUrl || project.repositoryUrl) && (
          <div role="group" aria-label="Project links" className="flex flex-wrap items-center gap-2">
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open ${title ?? project.title} live app in a new tab`} className={actionStyles({ variant: "primary" })}>Live app<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" /></a>}
            {project.repositoryUrl && <a href={project.repositoryUrl} target="_blank" rel="noreferrer" aria-label={`Open ${title ?? project.title} source on GitHub in a new tab`} className={actionStyles()}><SiGithub className="h-4 w-4 shrink-0" aria-hidden="true" />Source on GitHub<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" /></a>}
          </div>
        )}
      </div>
      <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted-foreground">
        <span>{project.metadata.status}</span>
        {project.metadata.year && <span className="border-l border-border pl-3">{project.metadata.year}</span>}
      </p>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/80">{description ?? project.summary}</p>
    </header>
  </>;
}

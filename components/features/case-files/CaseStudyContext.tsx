import { caseFiles } from "@/lib/data/case-files";

export default function CaseStudyContext({ id, sections }: { id: string; sections: { id: string; label: string }[] }) {
  const project = caseFiles.find(file => file.id === id)!;
  return <div className="mb-16 space-y-6">
    <dl className="grid gap-6 border-y border-border/40 py-6 sm:grid-cols-2">
      <div><dt className="mb-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">My responsibility</dt><dd className="text-sm text-foreground">{project.metadata.role}</dd></div>
      <div><dt className="mb-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Project status</dt><dd className="text-sm text-foreground">{project.metadata.status}</dd></div>
      <div className="sm:col-span-2"><dt className="mb-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Project evidence</dt><dd className="text-sm text-foreground">{project.proofPoints?.join(" / ")}</dd></div>
    </dl>
    {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center border border-foreground bg-foreground px-4 text-sm text-background">Open live application</a>}
    {project.repositoryUrl && <a href={project.repositoryUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center border border-border/60 px-4 text-sm text-foreground underline underline-offset-4">View source on GitHub</a>}
    <nav aria-label="Case study sections" className="flex flex-wrap gap-x-5 gap-y-3">
      {sections.map(section => <a key={section.id} href={`#${section.id}`} className="text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground">{section.label}</a>)}
    </nav>
  </div>;
}

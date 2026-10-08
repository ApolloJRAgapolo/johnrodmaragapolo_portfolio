import { Check } from "lucide-react";
import TechnologyList from "@/components/shared/TechnologyList";
import { caseFiles } from "@/lib/data/case-files";

export default function CaseStudyContext({ id, sections, technologies }: { id: string; sections: { id: string; label: string }[]; technologies?: string[] }) {
  const project = caseFiles.find((file) => file.id === id)!;
  const { role, client, audience, focus, focusLabel } = project.metadata;
  const technologyLabel = technologies || focusLabel === "TECH STACK" ? "Technology stack" : "Areas of contribution";
  return <div className="mb-12 space-y-6">
    <dl className="grid gap-x-8 gap-y-5 border-y border-border/60 py-5 sm:grid-cols-2">
      <div><dt className="mb-1.5 text-xs text-muted-foreground">My contribution</dt><dd className="text-sm leading-relaxed text-foreground">{role}</dd></div>
      {(audience || client) && <div><dt className="mb-1.5 text-xs text-muted-foreground">{audience ? "Primary users" : "Client"}</dt><dd className="text-sm leading-relaxed text-foreground">{audience ?? client}</dd></div>}
      {project.proofPoints && <div className="sm:col-span-2"><dt className="mb-1.5 text-xs text-muted-foreground">{id === "pricepulse" ? "Dataset coverage" : "Project evidence"}</dt><dd><ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm leading-relaxed text-foreground">{project.proofPoints.map((point) => <li key={point} className="flex items-start gap-2"><Check className="mt-1 h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />{point}</li>)}</ul></dd></div>}
    </dl>
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">{technologyLabel}</p>
      <TechnologyList items={technologies ?? focus} label={technologyLabel} />
    </div>
    <nav aria-label="Case study sections" className="border-b border-border/60 pb-4">
      <p className="mb-1 text-xs text-muted-foreground">On this page</p>
      <div className="flex flex-wrap gap-x-5 gap-y-1">
        {sections.map((section) => <a key={section.id} href={`#${section.id}`} className="inline-flex min-h-11 items-center rounded-sm text-sm text-foreground/80 underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 motion-reduce:transition-none">{section.label}</a>)}
      </div>
    </nav>
  </div>;
}

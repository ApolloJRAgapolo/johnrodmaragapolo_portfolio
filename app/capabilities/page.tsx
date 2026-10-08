import TechnologyList from "@/components/shared/TechnologyList";
import PageHeader from "@/components/shared/PageHeader";
import Link from "next/link";
import { Code2 } from "lucide-react";
import type { CapabilityGroup, TechnologyStackGroup } from "@/lib/types";
import { capabilityGroups, secondaryCapabilityGroups, technologyStackGroups } from "@/lib/data/capabilities";

const evidenceLinkStyle = "inline-flex min-h-11 items-center text-[13px] text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-offset-4";

function TechnologyGroup({ id, title, technologies, summary, learning, learningNote, evidence }: TechnologyStackGroup) {
  return (
    <article id={id} aria-labelledby={`${id}-heading`} className="flex min-w-0 scroll-mt-24 flex-col rounded-lg border border-border bg-card p-5 sm:p-6">
      <h3 id={`${id}-heading`} className="text-base font-semibold leading-snug tracking-tight text-foreground">{title}</h3>
      <p className="mt-3 text-xs text-muted-foreground">Project experience</p>
      <TechnologyList items={technologies.map(({ name }) => name)} className="mt-3" label={`${title}: technologies used in projects`} />
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{summary}</p>

      {learning && learning.length > 0 && (
        <div className="mt-5 border-t border-border/40 pt-4">
          <p className="text-xs font-medium text-muted-foreground">Learning</p>
          <TechnologyList items={learning.map(({ name }) => name)} className="mt-3" label={`${title}: technologies I am learning`} />
          {learningNote && <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{learningNote}</p>}
        </div>
      )}

      <ul aria-label={`Project evidence for ${title}`} className="mt-auto flex flex-wrap gap-x-4 pt-4">
        {evidence.map((link) => (
          <li key={link.href}><Link href={link.href} className={evidenceLinkStyle}>{link.label}</Link></li>
        ))}
      </ul>
    </article>
  );
}

function CapabilityBlock({ category, icon: Icon, competencies }: CapabilityGroup) {
  return (
    <section className="mb-12" aria-label={category}>
      <div className="mb-5 flex items-center gap-3">
        <Icon aria-hidden="true" className="h-5 w-5 shrink-0 stroke-[1.5] text-muted-foreground" />
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          {category}
        </h2>
      </div>

      <dl className="divide-y divide-border/40 border-y border-border/40">
        {competencies.map((item) => (
          <div key={item.tool} className="grid gap-3 py-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] sm:gap-6">
            <dt>
              <span className="block text-sm font-medium leading-relaxed text-foreground">
                {item.tool}
              </span>
              <span className="mt-1 block text-xs text-muted-foreground">
                {item.proficiency}
              </span>
            </dt>
            <dd className="min-w-0 text-sm leading-relaxed text-muted-foreground">
              {item.application}
              {item.evidence && (
                <ul aria-label={`Project evidence for ${item.tool}`} className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                  {item.evidence.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={evidenceLinkStyle}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default function Capabilities() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen flex-1 overflow-y-auto bg-background selection:bg-foreground selection:text-background">
      <div className="page-shell">
        <PageHeader title={"Capabilities"} description={"Web development and software engineering, supported by systems analysis and data work. Project links show where I have put these skills into practice."} />

        <section aria-labelledby="technology-stack-heading" className="mb-12">
          <div className="mb-5 flex items-center gap-3">
            <Code2 aria-hidden="true" className="h-5 w-5 shrink-0 stroke-[1.5] text-muted-foreground" />
            <h2 id="technology-stack-heading" className="text-xl font-semibold tracking-tight text-foreground">Technology Stack</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {technologyStackGroups.map((group) => <TechnologyGroup key={group.id} {...group} />)}
          </div>
        </section>

        {capabilityGroups.map((group) => (
          <CapabilityBlock key={group.category} {...group} />
        ))}

        <section aria-labelledby="additional-tools">
          <h2 id="additional-tools" className="mb-3 text-xl font-semibold tracking-tight text-foreground">
            Additional tools & practice
          </h2>
          <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
            Supporting tools and areas I continue to develop.
          </p>
          <div className="divide-y divide-border/40 border-y border-border/40">
            {secondaryCapabilityGroups.map((group) => (
              <details key={group.category} className="group py-4">
                <summary className="min-h-11 cursor-pointer py-3 text-sm font-medium text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-offset-4">
                  {group.category}
                </summary>
                <dl className="mt-5 space-y-5">
                  {group.competencies.map((item) => (
                    <div key={item.tool}>
                      <dt className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm font-medium text-foreground">
                        {item.tool}
                        <span className="text-xs font-normal text-muted-foreground">{item.proficiency}</span>
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.application}
                        {item.subTools && <span className="mt-1 block text-xs leading-relaxed">{item.subTools}</span>}
                      </dd>
                    </div>
                  ))}
                </dl>
              </details>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

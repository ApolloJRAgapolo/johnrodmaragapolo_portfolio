import TechnologyList from "@/components/shared/TechnologyList";
import PageHeader from "@/components/shared/PageHeader";
import Link from "next/link";
import { ArrowRight, ChevronDown, Code2 } from "lucide-react";
import type { CapabilityGroup, TechnologyStackGroup } from "@/lib/types";
import { capabilityGroups, secondaryCapabilityGroups, technologyStackGroups, type GroupedCapabilityGroup } from "@/lib/data/capabilities";
import styles from "./SystemsCapabilities.module.css";

const evidenceLinkStyle = "inline-flex min-h-11 max-w-full items-center gap-2 text-[13px] leading-snug text-foreground underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:decoration-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none";

function ProjectEvidence({ title, links }: { title: string; links: NonNullable<CapabilityGroup["competencies"][number]["evidence"]> }) {
  return (
    <ul aria-label={`Project evidence for ${title}`} className="flex flex-wrap gap-x-4 gap-y-1">
      {links.map((link) => (
        <li key={link.href} className="min-w-0 max-w-full">
          <Link href={link.href} className={evidenceLinkStyle}>
            <span>{link.label}</span><ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

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

      <div className="mt-auto pt-4"><ProjectEvidence title={title} links={evidence} /></div>
    </article>
  );
}

function CapabilityBlock({ category, icon: Icon, description, stages }: GroupedCapabilityGroup) {
  const sectionId = category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  return (
    <section id={sectionId} className={`${styles.section} mb-12 scroll-mt-24`} aria-labelledby={`${sectionId}-heading`}>
      <div className="mb-3 flex items-center gap-3">
        <Icon aria-hidden="true" className="h-5 w-5 shrink-0 stroke-[1.5] text-muted-foreground" />
        <h2 id={`${sectionId}-heading`} className="text-xl font-semibold tracking-tight text-foreground">
          {category}
        </h2>
      </div>
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">{description}</p>

      <div className={styles.stages}>
        {stages.map((stage) => (
          <section key={stage.id} className={styles.stage} aria-labelledby={`${sectionId}-${stage.id}-heading`}>
            <header className={styles.stageHeader}>
              <h3 id={`${sectionId}-${stage.id}-heading`} className={styles.stageTitle}>{stage.title}</h3>
              <p className={styles.stageDescription}>{stage.description}</p>
            </header>
            <dl className={styles.entries}>
              {stage.competencies.map((item) => (
                <div key={item.tool} className={styles.entry}>
                  <dt>
                    <div className={styles.entryHeading}>
                      <span className={styles.entryTitle}>{item.tool}</span>
                      {item.proficiency !== "Project experience" && <span className={styles.experience}>{item.proficiency}</span>}
                    </div>
                    {item.subTools && <span className={styles.tools}>{item.subTools}</span>}
                  </dt>
                  <dd>
                    <p className={styles.application}>{item.application}</p>
                    {item.evidence && item.evidence.length > 0 && (
                      <div className={styles.evidence}>
                        <p className={styles.evidenceLabel} aria-hidden="true">Evidence</p>
                        <ProjectEvidence title={item.tool} links={item.evidence} />
                      </div>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
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
            {secondaryCapabilityGroups.map((group) => {
              const GroupIcon = group.icon;

              return (
                <details key={group.category} className="group">
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 text-sm font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background [&::-webkit-details-marker]:hidden">
                    <span className="flex min-w-0 items-center gap-3">
                      <GroupIcon className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                      <span>{group.category}</span>
                    </span>
                    <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
                  </summary>
                  <dl className="divide-y divide-border/40 border-t border-border/40 pb-2">
                    {group.competencies.map((item) => (
                      <div key={item.tool} className="grid gap-2 py-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] sm:gap-x-6">
                        <dt className="min-w-0 text-sm font-medium leading-relaxed text-foreground">
                          {item.tool}
                          <span className="mt-1 block text-xs font-normal text-muted-foreground">{item.proficiency}</span>
                        </dt>
                        <dd className="min-w-0 text-sm leading-relaxed text-muted-foreground">
                          <p>{item.application}</p>
                          {item.subTools && <p className="mt-2 text-xs leading-relaxed">{item.subTools}</p>}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </details>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

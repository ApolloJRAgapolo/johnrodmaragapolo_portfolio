import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { PageHeader } from "@/components/layout/PageHeader";
import { projectsData } from "@/lib/data/projects";
import { getSkillsByIds } from "@/lib/resolvers/getRelatedSkills";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function ProjectsPage() {
  return (
    <div>
      <RevealOnScroll>
      <PageHeader
        title="Case Studies & Projects"
        description="Detailed documentation of system architectures, digital transformations, and technical solutions."
      />
      </RevealOnScroll>

      <div className="flex flex-col gap-6">
        {projectsData.map((project, index) => {
          const relatedSkills = getSkillsByIds(project.relatedToolkitIds);

          return (
            <RevealOnScroll key={project.id} delay={(index + 1) * 100}>
            <Link
              href={`/projects/${project.slug}`}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-sm"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <h2 className="text-xl font-bold text-foreground transition-colors group-hover:text-accent">
                      {project.title}
                    </h2>
                    <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                      {project.timeline.end === "Present" ? "Active" : project.timeline.end}
                    </span>
                  </div>

                  <p className="mb-6 max-w-2xl leading-relaxed text-muted-foreground">
                    {project.overview}
                  </p>

                  {relatedSkills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {relatedSkills.map((skill) => (
                        <span
                          key={skill.id}
                          className="rounded-md border border-border/50 bg-secondary/50 px-2 py-1 text-[11px] font-medium text-secondary-foreground"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted transition-colors group-hover:bg-accent group-hover:text-white md:flex">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
            </RevealOnScroll>
          );
        })}
      </div>
    </div>
  );
}

import { notFound } from "next/navigation";

import { Calendar, ExternalLink, Users } from "lucide-react";

import { PageHeader } from "@/components/layout/PageHeader";
import {
  getProjectBySlug,
  getSkillsByIds,
  getCommunitiesByIds,
  getAchievementsByIds,
} from "@/lib/resolvers";
import RevealOnScroll from "@/components/RevealOnScroll";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return [];
}

export default function ProjectNodePage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const relatedSkills = getSkillsByIds(project.relatedToolkitIds);
  const relatedCommunities = getCommunitiesByIds(project.relatedCommunityIds);
  const relatedAchievements = getAchievementsByIds(project.relatedAchievementIds);

  return (
    <article className="pb-20">
      <RevealOnScroll>
      <PageHeader
        title={project.title}
        description={project.overview}
      />

      <header className="mb-12 border-b border-border pb-8">
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span className="font-medium text-foreground">{project.role}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>
              {project.timeline.start} — {project.timeline.end}
            </span>
          </div>
          {(project.links.github || project.links.live) && (
            <div className="ml-auto flex items-center gap-4">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 transition-colors hover:text-foreground"
                >
                  Repository
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 transition-colors hover:text-foreground"
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </header>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="flex flex-col gap-10 prose prose-slate max-w-none dark:prose-invert lg:col-span-2">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground border-none">
              The Problem
            </h2>
            <p className="leading-relaxed text-muted-foreground">{project.problem}</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground border-none">
              Architecture & Approach
            </h2>
            <p className="leading-relaxed text-muted-foreground">{project.architecture}</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground border-none">
              Core Objectives
            </h2>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              {project.objectives.map((objective) => (
                <li key={objective}>{objective}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground border-none">
              Outcomes & Lessons Learned
            </h2>
            <div className="rounded-xl border border-border bg-muted/30 p-5">
              <p className="mb-4 font-medium text-foreground">{project.outcome}</p>
              <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                {project.lessonsLearned.map((lesson) => (
                  <li key={lesson}>{lesson}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <aside className="flex flex-col gap-8">
          {relatedSkills.length > 0 && (
            <section className="rounded-xl border border-border bg-card p-5">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Toolkit Utilized
              </h3>
              <div className="flex flex-wrap gap-2">
                {relatedSkills.map((skill) => (
                  <span
                    key={skill.id}
                    className="rounded-md border border-border/50 bg-secondary/30 px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {relatedCommunities.length > 0 && (
            <section className="rounded-xl border border-border bg-card p-5">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Associated Organizations
              </h3>
              <div className="flex flex-col gap-3">
                {relatedCommunities.map((community) => (
                  <div key={community.id} className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">
                      {community.organization}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {community.role}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {relatedAchievements.length > 0 && (
            <section className="rounded-xl border border-border bg-card p-5">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Associated Achievements
              </h3>
              <div className="flex flex-col gap-3">
                {relatedAchievements.map((achievement) => (
                  <div key={achievement.id} className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">
                      {achievement.title}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {achievement.description}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.stakeholders.length > 0 && (
            <section className="rounded-xl border border-border bg-card p-5">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Stakeholders
              </h3>
              <ul className="flex flex-col gap-2 text-sm text-foreground">
                {project.stakeholders.map((stakeholder) => (
                  <li key={stakeholder} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {stakeholder}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </aside>
      </div>
      </RevealOnScroll>
    </article>
  );
}

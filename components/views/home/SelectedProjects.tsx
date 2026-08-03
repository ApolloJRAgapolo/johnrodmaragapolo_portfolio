import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { projectsData } from "@/lib/data/projects";

export function SelectedProjects() {
  const featuredProjects = projectsData.slice(0, 2);

  return (
    <section className="mb-12 flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Selected Case Studies
        </h2>
        <Link
          href="/projects"
          className="flex items-center gap-1 text-xs font-medium text-accent hover:underline"
        >
          View All <ArrowUpRight className="h-3 w-3" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className="group flex flex-col justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:bg-muted/50"
          >
            <div>
              <h3 className="font-semibold text-foreground transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {project.overview}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <span className="rounded-md bg-secondary px-2 py-1 text-[10px] font-medium text-secondary-foreground">
                {project.role}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
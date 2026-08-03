import { toolkitData } from "@/lib/data/toolkit";

export function CoreCompetencies() {
  const coreSkills = toolkitData.slice(0, 6);

  return (
    <section className="mb-12 flex flex-col gap-4">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        Core Competencies
      </h2>
      <div className="flex flex-wrap gap-2">
        {coreSkills.map((skill) => (
          <div
            key={skill.id}
            className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground"
          >
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
}
import { PageHeader } from "@/components/layout/PageHeader";
import { toolkitData } from "@/lib/data/toolkit";
import { ToolkitItem } from "@/lib/types";
import RevealOnScroll from "@/components/RevealOnScroll";

function groupByCategory(items: ToolkitItem[]) {
  return items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }

    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, ToolkitItem[]>);
}

export default function ToolkitPage() {
  const groupedToolkit = groupByCategory(toolkitData);

  return (
    <div>
      <RevealOnScroll>
      <PageHeader
        title="Professional Toolkit"
        description="A categorized overview of the technical tools, methodologies, and core competencies I utilize."
      />
      </RevealOnScroll>

      <div className="flex flex-col gap-12">
        {Object.entries(groupedToolkit).map(([category, skills], index) => (
          <RevealOnScroll key={category} delay={(index + 1) * 100}>
          <section className="flex flex-col gap-4">
            <h2 className="border-b border-border pb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              {category}
            </h2>

            <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex flex-col rounded-xl border border-border bg-card p-4 transition-colors hover:bg-muted/30"
                >
                  <h3 className="font-medium text-foreground">{skill.name}</h3>
                  {skill.description && (
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {skill.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}

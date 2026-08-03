import RevealOnScroll from "@/components/RevealOnScroll";
import type { ComponentType } from "react";
import { capabilityGroups } from "@/lib/data/capabilities";

// --- REUSABLE TAXONOMY COMPONENT ---

function CapabilityBlock({ 
  category, 
  icon: Icon, 
  competencies,
  delay = 100,
}: { 
  category: string; 
  icon: ComponentType<{ className?: string }>;
  competencies: { tool: string; proficiency: string; application: string; subTools?: string }[];
  delay?: number;
}) {
  return (
    <RevealOnScroll delay={delay} className="mb-20 last:mb-0">
    <section>
      <div className="flex items-center gap-3 mb-8 border-b border-border/40 pb-4">
        <Icon className="w-4 h-4 stroke-[1.5] text-muted-foreground" />
        <h2 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
          {category}
        </h2>
      </div>
      
      <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
        {competencies.map((item, i) => (
          <div key={i} className="flex flex-col">
            <dt className="text-sm font-medium text-foreground mb-4 flex items-baseline justify-between border-b border-border/40 pb-2">
              <span className="tracking-tight">{item.tool}</span>
              <span className="text-[9px] font-mono tracking-widest uppercase text-muted-foreground">
                {item.proficiency}
              </span>
            </dt>
            <dd className="text-[13px] leading-relaxed text-muted-foreground">
              {item.application}
              {item.subTools && (
                <div className="mt-3 text-[11px] font-mono text-foreground/70">
                  <span className="opacity-50">INCLUDES:</span> {item.subTools}
                </div>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
    </RevealOnScroll>
  );
}

// --- MAIN PAGE ---

export default function Capabilities() {
  return (
    <main className="flex-1 min-h-screen overflow-y-auto bg-background selection:bg-foreground selection:text-background">
      <div className="max-w-4xl mx-auto w-full px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24">
        
        {/* HEADER */}
        <RevealOnScroll>
        <header className="mb-24">
          <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground mb-8">
            <span className="text-foreground">Capabilities Taxonomy</span>
            <span>/</span>
            <span>Technical Competencies</span>
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-6">
            Capabilities
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-2xl">
            A collection of the tools and skills I use to analyze problems, organize information, design systems, and build practical digital solutions.
          </p>
        </header>
        </RevealOnScroll>

        {/* TAXONOMY GRID */}
        
        {capabilityGroups.map((group) => (
          <CapabilityBlock key={group.category} {...group} />
        ))}

      </div>
    </main>
  );
}

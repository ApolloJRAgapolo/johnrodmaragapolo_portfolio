import Link from "next/link";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import type { CapabilityGroup } from "@/lib/types";
import { capabilityGroups } from "@/lib/data/capabilities";

// --- REUSABLE TAXONOMY COMPONENT ---

function CapabilityBlock({ 
  category, 
  icon: Icon, 
  competencies,
  delay = 100,
}: Omit<CapabilityGroup, "delay"> & { delay?: number }) {
  return (
    <RevealOnScroll delay={delay} className="mb-14 last:mb-0">
    <section>
      <div className="mb-6 flex items-center gap-3 border-b border-border/40 pb-3">
        <Icon className="w-4 h-4 stroke-[1.5] text-muted-foreground" />
        <h2 className="text-base font-semibold tracking-tight text-foreground">
          {category}
        </h2>
      </div>
      
      <dl className="grid grid-cols-1 gap-x-12 gap-y-7 md:grid-cols-2">
        {competencies.map((item, i) => (
          <div key={i} className="flex flex-col">
            <dt className="mb-2 flex flex-wrap gap-2 items-baseline justify-between border-b border-border/40 pb-2 text-sm font-medium text-foreground">
              <span className="tracking-tight">{item.tool}</span>
              <span className="text-xs text-muted-foreground">
                {item.proficiency}
              </span>
            </dt>
            <dd className="min-h-0 text-sm leading-relaxed text-muted-foreground">
              {item.application || null}
              {item.evidence && <ul className="mt-3 flex flex-wrap gap-3">{item.evidence.map(link => <li key={link.href}><Link href={link.href} className="text-xs text-foreground underline underline-offset-4">{link.label}</Link></li>)}</ul>}
              {item.subTools && (
                <div className="mt-3 text-xs text-foreground/70">
                  <span className="opacity-50">Includes:</span> {item.subTools}
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
    <main id="main-content" tabIndex={-1} className="flex-1 min-h-screen overflow-y-auto bg-background selection:bg-foreground selection:text-background">
      <div className="max-w-4xl mx-auto w-full px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24">
        
        {/* HEADER */}
        <RevealOnScroll>
        <header className="mb-16">
          <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground mb-8">
            <span className="text-foreground">Capabilities</span>
            <span>/</span>
            <span>Skills & practice</span>
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-6">
            Capabilities
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-2xl">
            Practical software, systems, data, and collaboration skills—grouped for quick scanning.
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

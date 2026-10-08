"use client";

import Image from "next/image";
import { actionStyles } from "@/lib/action-styles";
import { Eye } from "lucide-react";
import { useState } from "react";
import { blmsDiagramGroups, blmsDiagrams } from "@/lib/data/blms-diagrams";
import DiagramViewer from "@/components/features/case-files/DiagramViewer";

export default function DiagramGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="space-y-10">
        {blmsDiagramGroups.map((group) => (
          <section key={group.id} aria-labelledby={`blms-${group.id}`}>
            <div className="mb-5 border-t border-border/40 pt-5">
              <div className="flex items-baseline justify-between gap-4">
                <h3 id={`blms-${group.id}`} className="text-base font-semibold text-foreground">{group.title}</h3>
                <span className="shrink-0 text-xs text-muted-foreground">{group.diagrams.length} diagrams</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{group.description}</p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {group.diagrams.map((diagram) => {
                const open = () => setActiveIndex(blmsDiagrams.indexOf(diagram));
                return (
                  <article key={diagram.id} data-design-artifact={diagram.id} className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-card">
                    <button type="button" onClick={open} aria-label={`Preview ${diagram.title}`} className="group relative aspect-[4/3] w-full border-b border-border/40 bg-white focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary">
                      <Image src={diagram.preview.src} alt="" fill sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" className="object-contain p-4 transition-transform duration-200 group-hover:scale-[1.02] motion-reduce:transition-none" />
                    </button>
                    <div className="flex flex-1 flex-col p-4 sm:p-5">
                      <h4 className="mb-2 text-sm font-semibold text-foreground">{diagram.title}</h4>
                      <p className="mb-4 text-xs leading-relaxed text-muted-foreground">{diagram.description}</p>
                      <button type="button" onClick={open} aria-label={`Preview ${diagram.title}`} className={`${actionStyles()} mt-auto self-start`}><Eye className="h-4 w-4" aria-hidden="true" />Preview</button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
      {activeIndex !== null && <DiagramViewer diagrams={blmsDiagrams} index={activeIndex} onChange={setActiveIndex} onClose={() => setActiveIndex(null)} />}
    </>
  );
}

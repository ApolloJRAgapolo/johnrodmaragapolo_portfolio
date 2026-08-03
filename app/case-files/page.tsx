import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { caseFiles } from "@/lib/data/case-files";
import type { CaseFile } from "@/lib/types";

// --- REUSABLE DOSSIER CARD ---
function DossierCard({ file }: { file: CaseFile }) {
  const { role, client, focus, status, year } = file.metadata;

  return (
    <div className={`border border-border/40 p-8 md:p-10 transition-all duration-300 ${
      file.isAvailable ? "hover:border-foreground/40 hover:bg-secondary/5" : "opacity-80"
    }`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT: MAIN SUMMARY & ACTION */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full">
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground border border-border/40 px-3 py-1">
                {file.type}
              </span>
            </div>
            
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {file.title}
            </h2>
            
            <p className="text-[14px] leading-relaxed text-foreground/80 mb-12 max-w-lg">
              {file.summary}
            </p>
          </div>

          <div>
            {file.isAvailable && (
              <Link 
                href={`/case-files/${file.id}`}
                className="inline-flex items-center gap-2 text-[11px] font-mono text-foreground uppercase tracking-widest hover:text-muted-foreground transition-colors group/link"
              >
                <span>VIEW FULL CASE FILE</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5] transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </Link>
            )}
          </div>
        </div>

        {/* RIGHT: METADATA LEDGER */}
        <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-border/40 pt-8 lg:pt-0 lg:pl-10">
          <dl className="grid grid-cols-2 gap-y-8 gap-x-6">
            
            <div className="col-span-2">
              <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">
                ROLE
              </dt>
              <dd className="text-[13px] font-medium text-foreground leading-snug">
                {role}
              </dd>
            </div>

            <div className="col-span-2">
              <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">
                CLIENT
              </dt>
              <dd className="text-[13px] font-medium text-foreground leading-snug">
                {client}
              </dd>
            </div>

            <div className="col-span-2">
              <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
                FOCUS
              </dt>
              <dd className="flex flex-wrap gap-2">
                {focus.map((item, i) => (
                  <span 
                    key={i} 
                    className="text-[11px] font-mono text-foreground border border-border/40 px-2.5 py-1"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>

            <div>
              <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">
                STATUS
              </dt>
              <dd className="text-[13px] font-medium text-foreground">
                {status}
              </dd>
            </div>

            <div>
              <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">
                YEAR
              </dt>
              <dd className="text-[13px] font-mono text-foreground">
                {year}
              </dd>
            </div>

          </dl>
        </div>

      </div>
    </div>
  );
}

export default function CaseFiles() {
  return (
    <main className="flex-1 min-h-screen overflow-y-auto bg-background">
      <div className="max-w-6xl mx-auto w-full px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24">
        
        {/* RESTORED HEADER */}
        <RevealOnScroll>
        <header className="mb-20">
          <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground mb-8">
            <span className="text-foreground">Case Files Index</span>
            <span>/</span>
            <span>Project Dossiers</span>
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-6">
            Case Files / Project Portfolio
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-2xl">
            A collection of real-world projects documenting
the complete journey from problem identification
to system design and proposed digital solutions.
          </p>
        </header>
        </RevealOnScroll>

        {/* DOSSIER LIST */}
        <div className="flex flex-col gap-12">
          {caseFiles.map((file, index) => (
            <RevealOnScroll key={file.id} delay={(index + 1) * 100}>
              <DossierCard file={file} />
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </main>
  );
}


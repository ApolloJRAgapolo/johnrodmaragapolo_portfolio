import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import GlowingCard from "@/components/shared/GlowingCard";
import type { CaseFile } from "@/lib/types";

export default function CaseFileCard({ file }: { file: CaseFile }) {
  const { role, client, audience, focus, focusLabel, status, year } = file.metadata;

  return (
    <GlowingCard className={`border border-border/40 p-5 sm:p-8 md:p-10 transition-all duration-300 ${
      file.isAvailable ? "hover:border-foreground/40 hover:bg-secondary/5" : "opacity-80"
    }`}>
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">
        
        {/* LEFT: MAIN SUMMARY & ACTION */}
        <div className="min-w-0 xl:col-span-7 flex flex-col justify-between h-full">
          <div>
            <div className="mb-6">
              <span className="inline-block max-w-full text-[11px] font-mono uppercase tracking-widest text-muted-foreground border border-border/40 px-3 py-1">
                {file.type}
              </span>
            </div>
            
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              {file.title}
            </h2>
            
            <p className="text-[14px] leading-relaxed text-foreground/80 mb-12 max-w-lg">
              {file.headline ?? file.summary}
            </p>
            {file.proofPoints && (
              <p className="mb-8 text-[11px] font-mono leading-relaxed text-muted-foreground">
                {file.proofPoints.join(" · ")}
              </p>
            )}
          </div>

          <div>
            {file.isAvailable && (
              <Link 
                href={`/case-files/${file.id}`}
                className="inline-flex min-h-11 items-center gap-2 text-[11px] font-mono text-foreground uppercase tracking-widest hover:text-muted-foreground transition-colors group/link"
              >
                <span>VIEW FULL CASE FILE</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5] transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </Link>
            )}
            {file.liveUrl && <a href={file.liveUrl} target="_blank" rel="noreferrer" className="mt-4 block text-xs underline underline-offset-4 text-foreground">Open live application</a>}
          </div>
        </div>

        {/* RIGHT: METADATA LEDGER */}
        <div className="min-w-0 xl:col-span-5 border-t xl:border-t-0 xl:border-l border-border/40 pt-8 xl:pt-0 xl:pl-10">
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
                {audience ? "PRIMARY USERS" : "CLIENT"}
              </dt>
              <dd className="text-[13px] font-medium text-foreground leading-snug">
                {audience ?? client}
              </dd>
            </div>

            <div className="col-span-2">
              <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
                {focusLabel ?? "FOCUS"}
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

            {year && <div>
              <dt className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">
                YEAR
              </dt>
              <dd className="text-[13px] font-mono text-foreground">
                {year}
              </dd>
            </div>}

          </dl>
        </div>

      </div>
    </GlowingCard>
  );
}

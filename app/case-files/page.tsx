import CaseFileCard from "@/components/features/case-files/CaseFileCard";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { caseFiles } from "@/lib/data/case-files";

export default function CaseFiles() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 min-h-screen overflow-y-auto bg-background">
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
            Deployed applications, capstone prototypes, and startup projects, with clear context on my contribution and the work behind each solution.
          </p>
        </header>
        </RevealOnScroll>

        {/* DOSSIER LIST */}
        <div className="flex flex-col gap-12">
          {caseFiles.map((file, index) => (
            <RevealOnScroll key={file.id} delay={(index + 1) * 100}>
              <CaseFileCard file={file} />
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </main>
  );
}


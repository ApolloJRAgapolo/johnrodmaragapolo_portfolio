import PageHeader from "@/components/shared/PageHeader";
import CaseFileCard from "@/components/features/case-files/CaseFileCard";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { caseFiles } from "@/lib/data/case-files";

export default function CaseFiles() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 min-h-screen overflow-y-auto bg-background">
      <div className="page-shell">
        
        {/* RESTORED HEADER */}
        <RevealOnScroll>
        <PageHeader title={"Case Files / Projects"} description={"Deployed applications, capstone prototypes, and startup work, with my contribution and the decisions behind each."} eyebrow={"Selected projects"} />
        </RevealOnScroll>

        {/* DOSSIER LIST */}
        <div className="flex flex-col gap-5 sm:gap-6">
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


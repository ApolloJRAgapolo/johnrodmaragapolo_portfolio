import Link from "next/link";
import CaseFileCard from "@/components/features/case-files/CaseFileCard";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { caseFiles } from "@/lib/data/case-files";

const featuredIds = ["careertrack", "pricepulse", "blms"];

export default function FeaturedCaseFiles() {
  return (
    <section aria-labelledby="featured-projects" className="page-section">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h2 id="featured-projects" className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Selected Work</h2>
        <Link href="/case-files" className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground">All projects</Link>
      </div>
      <div className="flex flex-col gap-5 sm:gap-6">
        {featuredIds.map(id => {
          const file = caseFiles.find(project => project.id === id);
          return file ? <RevealOnScroll key={id}><CaseFileCard file={file} /></RevealOnScroll> : null;
        })}
      </div>
    </section>
  );
}

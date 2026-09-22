import Link from "next/link";
import CaseFileCard from "@/components/features/case-files/CaseFileCard";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { caseFiles } from "@/lib/data/case-files";

const featuredIds = ["pricepulse", "blms", "tumanow"];

export default function FeaturedCaseFiles() {
  return (
    <section aria-labelledby="featured-projects" className="mb-16 sm:mb-24">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h2 id="featured-projects" className="text-base font-semibold text-foreground">Selected Projects</h2>
        <Link href="/case-files" className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground">Explore all case files</Link>
      </div>
      <div className="flex flex-col gap-8">
        {featuredIds.map(id => {
          const file = caseFiles.find(project => project.id === id);
          return file ? <RevealOnScroll key={id}><CaseFileCard file={file} /></RevealOnScroll> : null;
        })}
      </div>
    </section>
  );
}

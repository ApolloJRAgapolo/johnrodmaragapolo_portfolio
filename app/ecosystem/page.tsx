import PageHeader from "@/components/shared/PageHeader";
import ProfessionalEcosystem from "@/components/features/ecosystem/ProfessionalEcosystem";

export default function ProfessionalEcosystemPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 min-h-screen overflow-y-auto bg-background selection:bg-foreground selection:text-background pb-24">
      <div className="page-shell">
        <PageHeader
          title="Professional Ecosystem"
          description="The institutions, teams, projects, and communities that have shaped my experience—and what I bring to my next chapter."
          eyebrow="Professional relationships"
        />
        <ProfessionalEcosystem />
      </div>
    </main>
  );
}

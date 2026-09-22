import CaseStudyContext from "@/components/features/case-files/CaseStudyContext";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowDown, 
  ArrowRight,
  CheckCircle2, 
  Lightbulb, 
  FileText, 
  LayoutTemplate, 
  Database,
  Cpu,
  Users,
  AlertCircle,
  Target,
  Briefcase,
  Activity,
  Bot, CalendarDays, ClipboardList, HeartPulse, House, LayoutDashboard,
  Search, ShoppingCart, Stethoscope, User, Workflow
} from "lucide-react";
import GlowingCard from "@/components/shared/GlowingCard";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

export default function BLMScaseFile() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 min-h-screen overflow-y-auto bg-background selection:bg-foreground selection:text-background pb-32">
      <div className="max-w-4xl mx-auto w-full px-5 py-12 sm:px-8 sm:py-16 lg:px-16">
        
        {/* NAVIGATION */}
        <Link 
          href="/case-files"
          className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-16"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Case Files
        </Link>

        {/* HEADER */}
        <RevealOnScroll>
        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-foreground border border-border/40 px-3 py-1 bg-secondary/5">
              IS CAPSTONE PROJECT
            </span>
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              Status: Completed Capstone / Prototype (2026)
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
            Backyard Livestock Monitoring System (BLMS)
          </h1>
          
          <div className="border-l-2 border-foreground/30 pl-6 py-2">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Executive Summary
            </h2>
            <p className="text-lg text-foreground/90 leading-relaxed max-w-3xl">
              A capstone prototype designed to improve how the Municipality of San Miguel monitors backyard livestock, manages veterinary services, and keeps agricultural records. The prototype explores animal-health reporting and municipal monitoring workflows. My role focused on planning, requirements, and system design; it was not deployed for municipal operations.
            </p>
          </div>
        </header>
        </RevealOnScroll>

        <CaseStudyContext id="blms" sections={[{"id": "operational-architecture", "label": "Operational Architecture"}, {"id": "key-system-features", "label": "Prototype Features"}, {"id": "business-analysis-process", "label": "Business Analysis Process"}, {"id": "system-design-artifacts", "label": "System Design Artifacts"}, {"id": "project-outcomes", "label": "Project Outcomes"}]} />

        {/* CORE CONTEXT (3-Column Grid) */}
        <RevealOnScroll delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          
          {/* The Challenge */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <AlertCircle className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground">The Challenge</h3>
            </div>
            <p className="text-[13px] text-muted-foreground mb-4">
              The Municipal Agriculture Office relied on manual processes (paper records, phone calls, text messages) to monitor livestock health, resulting in:
            </p>
            <ul className="space-y-3">
              {["Slow disease reporting", "Scattered records", "Delayed veterinary response", "Difficult monitoring across barangays", "Limited data for planning"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[13px] text-foreground">
                  <span className="text-muted-foreground mt-0.5">•</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* The Goal */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Target className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground">The Goal</h3>
            </div>
            <p className="text-[13px] text-muted-foreground mb-4">
              Design a digital platform that would help the municipality:
            </p>
            <ul className="space-y-3">
              {["Register farmers and households", "Monitor livestock", "Report animal health concerns", "Request veterinary services", "Record livestock transactions", "Support planning via organized data"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[13px] text-foreground">
                  <span className="text-muted-foreground mt-0.5">•</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Responsibilities */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground">My Responsibilities</h3>
            </div>
            <p className="text-[13px] text-muted-foreground mb-4">
              As Project Manager & Systems Analyst, I was responsible for:
            </p>
            <ul className="space-y-3">
              {["Planning the project", "Gathering system requirements", "Interviewing stakeholders", "Designing system workflows & diagrams", "Preparing system documentation", "Designing interfaces and prototypes", "Coordinating the project team"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[13px] text-foreground">
                  <span className="text-muted-foreground mt-0.5">•</span> {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
        </RevealOnScroll>

        {/* STAKEHOLDERS (Ledger Table) */}
        <RevealOnScroll delay={100}>
        <section className="mb-20">
          <h2 className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground mb-6">System Stakeholders</h2>
          <div className="border border-border/40 divide-y divide-border/40 bg-card/50">
            <div className="grid grid-cols-1 md:grid-cols-12 p-4 bg-secondary/10">
              <div className="md:col-span-4 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">User</div>
              <div className="md:col-span-8 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">System Purpose</div>
            </div>
            {[
              { role: "Farmers", purpose: "Report livestock health concerns and manage livestock records." },
              { role: "Barangay DA Representatives", purpose: "Assist farmers and submit formal reports." },
              { role: "MAO Veterinarian", purpose: "Review reports, schedule field visits, and record treatment outcomes." },
              { role: "MAO Head", purpose: "Monitor overall operations and manage staff deployment." },
              { role: "Auction Market Staff", purpose: "Record livestock market transactions to update local inventory." },
            ].map((user, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-12 p-4 gap-4 md:gap-0 items-center hover:bg-secondary/5 transition-colors">
                <div className="md:col-span-4 text-[13px] font-medium text-foreground">{user.role}</div>
                <div className="md:col-span-8 text-[13px] text-muted-foreground">{user.purpose}</div>
              </div>
            ))}
          </div>
        </section>
        </RevealOnScroll>

        {/* HOW THE SYSTEM WORKS (Vertical Flow) */}
        <RevealOnScroll delay={100}>
        <section className="mb-20">
          <h2 id="operational-architecture" className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground mb-8 flex items-center gap-3"><Workflow className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />Operational Architecture</h2>
          <div className="flex flex-col items-center bg-secondary/5 border border-border/40 py-12 px-4 rounded-sm">
            {[
              { label: "Farmer", icon: User },
              { label: "Reports Animal Health Concern", icon: HeartPulse },
              { label: "AI-Assisted Priority Check", icon: Bot },
              { label: "Municipal Veterinarian Reviews Case", icon: Stethoscope },
              { label: "Visit Scheduled", icon: CalendarDays },
              { label: "Treatment Recorded", icon: ClipboardList },
              { label: "Municipality Dashboard Updated", icon: LayoutDashboard }
            ].map((step, i, arr) => (
              <div key={i} className="flex w-full max-w-[280px] flex-col items-center">
                <div className="w-full max-w-[280px] border border-border/60 bg-background px-4 py-3 text-[12px] font-mono uppercase tracking-wider text-foreground text-center sm:px-6">
                  <step.icon className="mx-auto mb-3 h-5 w-5 text-muted-foreground" aria-hidden="true" />
                  {step.label}
                </div>
                {i !== arr.length - 1 && (
                  <ArrowDown className="w-5 h-5 text-muted-foreground/50 my-3" />
                )}
              </div>
            ))}
          </div>
        </section>
        </RevealOnScroll>

        {/* KEY FEATURES (Grid Cards) */}
        <RevealOnScroll delay={100}>
        <section className="mb-20">
          <h2 id="key-system-features" className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground mb-6 flex items-center gap-3"><LayoutTemplate className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />Prototype Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {[
              { title: "Household Registration", icon: House, desc: "Register farmers and geographically map local households." },
              { title: "Livestock Monitoring", icon: Database, desc: "Keep strict records of livestock owned by each household." },
              { title: "Health Reporting", icon: HeartPulse, desc: "Allow farmers to immediately report sick animals through the system." },
              { title: "Veterinary Services", icon: Stethoscope, desc: "Request and log farm visits, mass vaccinations, and check-ups." },
              { title: "AI-Assisted Triage", icon: Bot, desc: "Help veterinarians identify and prioritize urgent case reports faster." },
              { title: "Market Transactions", icon: ShoppingCart, desc: "Record livestock sales and automatically update local inventory." },
              { title: "Municipal Dashboard", icon: LayoutDashboard, desc: "Monitor reports, requests, and livestock data across the entire municipality." },
            ].map((feature, i) => (
              <GlowingCard key={i} className="border border-border/40 p-6 hover:border-foreground/30 transition-colors bg-card/30 flex flex-col">
                <feature.icon className="mb-4 h-5 w-5 text-muted-foreground" aria-hidden="true" />
                <h3 className="text-[13px] font-medium text-foreground mb-3">{feature.title}</h3>
                <p className="text-[12px] leading-relaxed text-muted-foreground mt-auto">{feature.desc}</p>
              </GlowingCard>
            ))}
          </div>
        </section>
        </RevealOnScroll>

   {/* MY PROCESS (Phased Grid Layout) */}
        <RevealOnScroll delay={100}>
        <section className="mb-24">
          <h2 id="business-analysis-process" className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground mb-6 flex items-center gap-3"><Search className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />Business Analysis Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 border border-border/40 divide-y md:divide-y-0 md:divide-x divide-border/40 bg-secondary/5">
            {[
              {
                id: "01",
                title: "Discovery",
                icon: Search,
                steps: ["Requirements Gathering", "Research", "Stakeholder Interviews", "Field Observation"]
              },
              {
                id: "02",
                title: "Architecture",
                icon: Workflow,
                steps: ["Process Analysis", "System Design"]
              },
              {
                id: "03",
                title: "Prototyping",
                icon: LayoutTemplate,
                steps: ["Wireframing", "Interactive Prototype"]
              },
              {
                id: "04",
                title: "Delivery",
                icon: CheckCircle2,
                steps: ["System Evaluation", "Final System Design"]
              }
            ].map((phase, i) => (
              <GlowingCard key={i} className="p-6 md:p-8 hover:bg-secondary/10 transition-colors">
                <phase.icon className="mb-4 h-5 w-5 text-muted-foreground" aria-hidden="true" />
                <div className="flex flex-wrap items-baseline gap-2 mb-6 border-b border-border/40 pb-4">
                  <span className="text-[10px] font-mono text-muted-foreground">{phase.id}</span>
                  <h3 className="text-[11px] font-mono uppercase tracking-widest text-foreground">{phase.title}</h3>
                </div>
                <ul className="space-y-4">
                  {phase.steps.map((step, j) => (
                    <li key={j} className="text-[13px] text-muted-foreground flex items-start gap-3">
                       <span className="text-foreground/30 font-mono mt-[-2px]">↳</span>
                       {step}
                    </li>
                  ))}
                </ul>
              </GlowingCard>
            ))}
          </div>
        </section>
        </RevealOnScroll>

        {/* SYSTEM DESIGN DIAGRAMS (Gallery placeholders) */}
        <RevealOnScroll delay={100}>
        <section className="mb-24">
          <h2 id="system-design-artifacts" className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground mb-6 flex items-center gap-3"><FileText className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />System Design Artifacts</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Use Case Diagram", icon: Users },
              { name: "Activity Diagram", icon: Activity },
              { name: "Sequence Diagram", icon: ArrowRight },
              { name: "Class Diagram", icon: LayoutTemplate },
              { name: "System Architecture", icon: Cpu },
              { name: "Database Design", icon: Database },
              { name: "Wireframes", icon: FileText }
            ].map((diagram, i) => {
              const Icon = diagram.icon;
              return (
                <GlowingCard key={i} className="aspect-video border border-border/40 bg-secondary/5 flex flex-col items-center justify-center p-4 group">
                  <Icon className="w-6 h-6 text-muted-foreground/40 mb-3  transition-colors" />
                  <span className="text-[10px] font-mono text-muted-foreground uppercase text-center tracking-widest  transition-colors">
                    {diagram.name}
                  </span>
                </GlowingCard>
              );
            })}
          </div>
        </section>
        </RevealOnScroll>

        {/* BOTTOM METADATA (Results & Lessons) */}
        <RevealOnScroll delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-border/40 pt-16">
          
          <section>
            <div className="flex items-center gap-2 mb-8">
              <CheckCircle2 className="w-4 h-4 text-foreground" />
              <h2 id="project-outcomes" className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground">Project Outcomes</h2>
            </div>
            <ul className="space-y-4">
              {[
                "Complete system architecture",
                "Database design",
                "User interface prototype",
                "Process documentation",
                "Requirements specification",
                "Interactive prototype",
                "Final capstone defense completed"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[13px] text-muted-foreground">
                  <span className="text-foreground/50 font-mono text-[10px]">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-8">
              <Lightbulb className="w-4 h-4 text-foreground" />
              <h2 className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground">Lessons Learned</h2>
            </div>
            <div className="space-y-5">
              {[
                "Conducting stakeholder interviews directly improved my requirements gathering skills.",
                "Designing business processes taught me how technology must adapt to support real-world operations.",
                "Creating high-fidelity prototypes helped me validate technical ideas before committing to full implementation.",
                "Working as Project Manager significantly strengthened my cross-functional communication and coordination skills."
              ].map((item, i) => (
                <p key={i} className="text-[13px] leading-relaxed text-muted-foreground pl-4 border-l-2 border-border/40">
                  {item}
                </p>
              ))}
            </div>
          </section>

        </div>
        </RevealOnScroll>

      </div>
    </main>
  );
}

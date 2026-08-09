import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight,
  Lightbulb, 
  Target,
  Briefcase,
  Users,
  Building2,
  Trophy,
  LayoutDashboard,
  Map,
  FileText,
  ShieldCheck,
  UserCog,
  Bot,
  Activity,
  Code2
} from "lucide-react";
import GlowingCard from "@/components/GlowingCard";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function TumaNowCaseFile() {
  return (
    <main className="flex-1 min-h-screen overflow-y-auto bg-background selection:bg-foreground selection:text-background pb-32">
      <div className="max-w-4xl mx-auto w-full px-5 py-12 sm:px-8 sm:py-16 lg:px-16">
        
        {/* NAVIGATION */}
        <Link 
          href="/case-files"
          className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-16"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to System Deployments
        </Link>

        {/* HEADER */}
        <RevealOnScroll>
        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-foreground border border-border/40 px-3 py-1 bg-secondary/5">
              GOVTECH STARTUP
            </span>
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest border border-transparent px-3 py-1">
              Status: Champion & Client Validation (2025–Present)
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            TumaNow: Digital Transformation for Local Government
          </h1>
          <h2 className="text-xl font-light text-muted-foreground mb-8">
            Government Innovation Platform
          </h2>
          
          <div className="border-l-2 border-foreground/30 pl-6 py-2">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Executive Summary
            </h2>
            <p className="text-lg text-foreground/90 leading-relaxed max-w-3xl">
              A digital project monitoring platform developed to help government offices monitor community development projects in one centralized system. Instead of relying on scattered Word documents, Excel files, and manual reports, the platform provides real-time monitoring of project status, budgets, timelines, locations, and reports through a single dashboard. 
            </p>
            <p className="text-[14px] text-muted-foreground mt-4 leading-relaxed max-w-3xl">
              The solution was developed after working directly with the Provincial Planning and Development Office (PPDO) during the Iloilo Province Startup Hackathon. The project is currently being considered for adoption by the PPDO while being evaluated alongside an internal system developed by the Office of the Information Communication Technology Management Officer (ICTMO) of Iloilo Provincial Government.
            </p>
          </div>
        </header>
        </RevealOnScroll>

        <hr className="border-border/40 mb-16" />

        {/* CORE CONTEXT (3-Column Grid) */}
        <RevealOnScroll delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          
          {/* Project Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Building2 className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground">Project Information</h3>
            </div>
            <dl className="space-y-4">
              <div>
                <dt className="text-[10px] font-mono text-muted-foreground uppercase mb-1">Client</dt>
                <dd className="text-[13px] text-foreground font-medium">Provincial Planning and Development Office (PPDO)</dd>
              </div>
              <div>
                <dt className="text-[10px] font-mono text-muted-foreground uppercase mb-1">Industry</dt>
                <dd className="text-[13px] text-foreground">Government Technology (GovTech)</dd>
              </div>
              <div>
                <dt className="text-[10px] font-mono text-muted-foreground uppercase mb-1">Duration</dt>
                <dd className="text-[13px] text-foreground">2025 – Present</dd>
              </div>
            </dl>
          </div>

          {/* My Role & Team */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Users className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground">Team & Role</h3>
            </div>
            <div className="mb-4">
              <span className="block text-[13px] font-medium text-foreground mb-1">Co-Founder</span>
              <span className="block text-[13px] font-medium text-foreground mb-1">Business Analyst</span>
              <span className="block text-[13px] font-medium text-foreground">Chief Financial Officer (CFO)</span>
            </div>
            <p className="text-[12px] text-muted-foreground border-t border-border/40 pt-4 mt-4">
              Collaborated with a five-member startup team composed of business analysts, frontend and backend developers, and a data analyst to design and develop the TumaNow platform.
            </p>
          </div>

          {/* The Challenge */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Target className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground">The Challenge</h3>
            </div>
            <p className="text-[12px] text-muted-foreground mb-4">
              The PPDO manages hundreds of government projects across municipalities. During stakeholder interviews, we discovered:
            </p>
            <ul className="space-y-2">
              {["Project reports submitted late.", "Monitoring relied on manual paperwork.", "Files scattered across Word and Excel.", "No real-time project visibility.", "Slower decision-making due to fragmentation."].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[12px] text-foreground">
                  <span className="text-muted-foreground mt-0.5">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        </RevealOnScroll>

        {/* MY CONTRIBUTIONS (2x2 Grid) */}
        <RevealOnScroll delay={100}>
        <section className="mb-20">
          <h2 className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground mb-6 flex items-center gap-2">
            <Briefcase className="w-4 h-4" /> Areas of Contribution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Business Analysis",
                items: ["Conducted stakeholder interviews", "Gathered business requirements", "Documented project needs", "Analyzed existing workflows", "Identified process improvements"]
              },
              {
                title: "Product Planning",
                items: ["Helped define the product vision", "Prioritized core features", "Planned the project roadmap", "Coordinated with the development team"]
              },
              {
                title: "Financial Planning",
                items: ["Prepared financial projections", "Helped develop the business model", "Assisted in pricing and sustainability planning"]
              },
              {
                title: "Startup Development",
                items: ["Prepared pitch presentations", "Participated in startup mentoring", "Presented the solution to evaluators and stakeholders"]
              }
            ].map((area, i) => (
              <GlowingCard key={i} className="border border-border/40 p-6 bg-secondary/5 hover:bg-secondary/10 transition-colors">
                <h3 className="text-[12px] font-mono uppercase tracking-widest text-foreground mb-4 border-b border-border/40 pb-2">{area.title}</h3>
                <ul className="space-y-2">
                  {area.items.map((item, j) => (
                    <li key={j} className="text-[13px] text-muted-foreground flex items-start gap-2">
                      <span className="text-foreground/40 font-mono mt-[1px]">✔</span> {item}
                    </li>
                  ))}
                </ul>
              </GlowingCard>
            ))}
          </div>
        </section>
        </RevealOnScroll>

        {/* BUSINESS ANALYSIS PROCESS (Phased Grid Layout) */}
        <RevealOnScroll delay={100}>
        <section className="mb-24">
          <h2 className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground mb-6">Business Analysis Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-border/40 divide-y md:divide-y-0 md:divide-x divide-border/40 bg-secondary/5">
            {[
              { id: "01", title: "Discovery", steps: ["Problem Identification", "Stakeholder Interviews (PPDO)", "Requirements Gathering"] },
              { id: "02", title: "Architecture", steps: ["Workflow Analysis", "Process Mapping", "Solution Design"] },
              { id: "03", title: "Prototyping", steps: ["Wireframing", "System Development", "Prototype Testing"] },
              { id: "04", title: "Validation", steps: ["Client Validation", "Feedback Integration"] }
            ].map((phase, i) => (
               <GlowingCard key={i} className="p-6 md:p-8 hover:bg-secondary/10 transition-colors">
                 <div className="flex items-baseline gap-2 mb-6 border-b border-border/40 pb-4">
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

        {/* SOLUTION OVERVIEW (Feature Cards) */}
        <RevealOnScroll delay={100}>
        <section className="mb-24">
          <h2 className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground mb-6">Solution Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Dashboard", desc: "Provides an overview of projects, budgets, and completion status.", icon: LayoutDashboard },
              { title: "Project Monitoring", desc: "Tracks project progress from planning to completion.", icon: Activity },
              { title: "Interactive Map", desc: "Displays project locations for easier geographical monitoring.", icon: Map },
              { title: "Reports", desc: "Generates structured reports for official decision-making.", icon: FileText },
              { title: "Audit Trail", desc: "Records all system activities to ensure complete accountability.", icon: ShieldCheck },
              { title: "User Management", desc: "Controls user access and permissions based on assigned roles.", icon: UserCog },
              { title: "AI Database Assistant", desc: "Allows users to ask questions about project data using natural language.", icon: Bot },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <GlowingCard key={i} className="border border-border/40 p-6 hover:border-foreground/30 transition-colors bg-card/30 flex flex-col group">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <h3 className="text-[13px] font-medium text-foreground">{feature.title}</h3>
                  </div>
                  <p className="text-[12px] leading-relaxed text-muted-foreground mt-auto">{feature.desc}</p>
                </GlowingCard>
              );
            })}
          </div>
        </section>
        </RevealOnScroll>

        {/* TECH STACK */}
        <RevealOnScroll delay={100}>
        <section className="mb-24">
          <h2 className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground mb-6 flex items-center gap-2">
            <Code2 className="w-4 h-4" /> Technology Stack
          </h2>
          <div className="border border-border/40 p-6 bg-secondary/5 flex flex-wrap gap-8">
            {[
              { category: "Frontend", tools: "HTML, CSS, JavaScript, Tailwind CSS" },
              { category: "Backend", tools: "PHP" },
              { category: "Database", tools: "MySQL" },
              { category: "AI Integrations", tools: "AI-assisted database querying" },
              { category: "Tools", tools: "Figma, GitHub, Canva" }
            ].map((stack, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{stack.category}</span>
                <span className="text-[13px] text-foreground">{stack.tools}</span>
              </div>
            ))}
          </div>
        </section>
        </RevealOnScroll>

        {/* STARTUP JOURNEY (Horizontal Timeline) */}
        <RevealOnScroll delay={100}>
        <section className="mb-24 overflow-hidden">
          <h2 className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground mb-6">Startup Journey</h2>
          <div className="border border-border/40 p-8 bg-secondary/5 flex flex-wrap gap-y-6 gap-x-4 items-center">
            {[
              "Hackathon Challenge", "Problem Selection", "PPDO Stakeholder Interviews", 
              "Requirements Gathering", "System Design", "Prototype Development", 
              "Pitch Competition", "Champion", "KWADRA TBI Mentoring", 
              "Client Validation", "Potential Government Adoption"
            ].map((step, i, arr) => (
              <div key={i} className="flex items-center gap-4">
                <span className={`text-[11px] font-mono px-3 py-1.5 whitespace-nowrap border ${
                  step === "Champion" || step === "Potential Government Adoption" 
                  ? "bg-foreground text-background border-foreground font-semibold" 
                  : "bg-background text-foreground border-border/60"
                }`}>
                  {step}
                </span>
                {i !== arr.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/50" />
                )}
              </div>
            ))}
          </div>
        </section>
        </RevealOnScroll>

        {/* BUSINESS IMPACT (Before vs After Ledger) */}
        <RevealOnScroll delay={100}>
        <section className="mb-24">
          <h2 className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground mb-6">Business Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 border border-border/40 divide-y md:divide-y-0 md:divide-x divide-border/40 bg-card/50">
            {/* BEFORE */}
            <div className="p-8">
              <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500/50"></span> Legacy System
              </h3>
              <ul className="space-y-4">
                {["Manual paperwork", "Mixed Word and Excel files", "Delayed reports", "No real-time updates", "Limited monitoring scope"].map((item, i) => (
                   <li key={i} className="text-[13px] text-muted-foreground flex items-center gap-3">
                     <span className="text-muted-foreground/40">—</span> {item}
                   </li>
                ))}
              </ul>
            </div>
            {/* AFTER */}
            <div className="p-8 bg-secondary/5">
              <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500/50"></span> TumaNow Platform
              </h3>
              <ul className="space-y-4">
                {["Centralized project records", "Real-time dashboards", "Faster, automated reporting", "Location-based map monitoring", "Improved public transparency"].map((item, i) => (
                   <li key={i} className="text-[13px] text-foreground font-medium flex items-center gap-3">
                     <span className="text-foreground/40">+</span> {item}
                   </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        </RevealOnScroll>

        {/* BOTTOM METADATA (Outcomes & Lessons) */}
        <RevealOnScroll delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-border/40 pt-16">
          
          <section>
            <div className="flex items-center gap-2 mb-8">
              <Trophy className="w-4 h-4 text-foreground" />
              <h2 className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground">Outcomes</h2>
            </div>
            <dl className="space-y-6">
              <div>
                <dt className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Champion</dt>
                <dd className="text-[13px] text-foreground font-medium flex items-center gap-2">
                  {/* Replaced the emoji with the outline Lucide icon here */}
                  <Trophy className="w-3.5 h-3.5 text-muted-foreground" /> 
                  Iloilo Province Startup Hackathon
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Client Validation</dt>
                <dd className="text-[13px] text-foreground">Selected directly by PPDO for further evaluation.</dd>
              </div>
              <div>
                <dt className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Potential Adoption</dt>
                <dd className="text-[13px] text-foreground">Currently being considered for formal implementation by the Provincial Planning and Development Office.</dd>
              </div>
              <div>
                <dt className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Startup Incubation</dt>
                <dd className="text-[13px] text-foreground">Received intensive mentoring under the KWADRA Technology Business Incubator.</dd>
              </div>
            </dl>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-8">
              <Lightbulb className="w-4 h-4 text-foreground" />
              <h2 className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground">Lessons Learned</h2>
            </div>
            <p className="text-[13px] leading-relaxed text-muted-foreground pl-4 border-l-2 border-border/40">
              Through TumaNow, I learned that successful digital solutions begin with understanding real user problems. Working closely with government stakeholders strengthened my skills in business analysis, requirements gathering, communication, and transforming operational challenges into practical digital solutions.
            </p>
          </section>

        </div>
        </RevealOnScroll>

      </div>
    </main>
  );
}

import CaseStudyHeader from "@/components/features/case-files/CaseStudyHeader";
import CaseStudyContext from "@/components/features/case-files/CaseStudyContext";
import { 
  ArrowRight,
  Lightbulb, 
  Target,
  Briefcase,
  Users,
  Trophy,
  LayoutDashboard,
  Map,
  FileText,
  ShieldCheck,
  UserCog,
  Monitor,
  Bot,
  Activity,
  Code2,
  ChartNoAxesCombined, Coins, LayoutTemplate, Palette, Rocket, Search, Workflow
} from "lucide-react";
import { SiFigma, SiGithub, SiHtml5, SiJavascript, SiMysql, SiPhp, SiTailwindcss } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import GlowingCard from "@/components/shared/GlowingCard";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import ProjectScreenGallery from "@/components/features/case-files/ProjectScreenGallery";
import { tumanowMobileMockups, tumanowWebMockups } from "@/lib/data/tumanow-mockups";

export default function TumaNowCaseFile() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 min-h-screen overflow-y-auto bg-background selection:bg-foreground selection:text-background pb-32">
      <div className="page-shell case-study-shell">
        <CaseStudyHeader id="tumanow" description="A digital project monitoring platform developed with the Provincial Planning and Development Office (PPDO) to centralize project status, budgets, timelines, locations, and reports. My contribution covered business analysis and financial planning." />

        <CaseStudyContext id="tumanow" sections={[{"id": "areas-of-contribution", "label": "Areas of Contribution"}, {"id": "business-analysis-process", "label": "Business Analysis Process"}, {"id": "solution-overview", "label": "Solution Overview"}, {"id": "screens", "label": "Screens"}, {"id": "technology-stack", "label": "Technology Stack"}, {"id": "startup-journey", "label": "Startup Journey"}, {"id": "business-impact", "label": "Business Impact"}, {"id": "outcomes", "label": "Outcomes"}]} />

        <RevealOnScroll>
          <div className="mb-12 grid gap-8 sm:mb-14 sm:grid-cols-2">
            <section aria-labelledby="team-context">
              <h2 id="team-context" className="mb-4 flex items-center gap-3 text-lg font-semibold tracking-tight"><Users className="h-4 w-4 text-muted-foreground" aria-hidden="true" />Team context</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">Collaborated with a five-member startup team composed of business analysts, frontend and backend developers, and a data analyst to design and develop TumaNow.</p>
            </section>
            <section aria-labelledby="challenge">
              <h2 id="challenge" className="mb-4 flex items-center gap-3 text-lg font-semibold tracking-tight"><Target className="h-4 w-4 text-muted-foreground" aria-hidden="true" />The challenge</h2>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">The PPDO manages hundreds of government projects across municipalities. Stakeholder interviews identified:</p>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                {["Late project reports", "Manual paperwork", "Scattered Word and Excel files", "Limited real-time project visibility", "Slower decisions due to fragmented records"].map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
          </div>
        </RevealOnScroll>

        {/* MY CONTRIBUTIONS (2x2 Grid) */}
        <RevealOnScroll delay={100}>
        <section className="mb-12 sm:mb-14">
          <h2 id="areas-of-contribution" className="text-lg font-semibold tracking-tight text-foreground mb-6 flex items-center gap-2">
            <Briefcase className="w-4 h-4" /> Areas of Contribution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Business Analysis", icon: Search,
                items: ["Conducted stakeholder interviews", "Gathered business requirements", "Documented project needs", "Analyzed existing workflows", "Identified process improvements"]
              },
              {
                title: "Product Planning", icon: LayoutTemplate,
                items: ["Helped define the product vision", "Prioritized core features", "Planned the project roadmap", "Coordinated with the development team"]
              },
              {
                title: "Financial Planning", icon: Coins,
                items: ["Prepared financial projections", "Helped develop the business model", "Assisted in pricing and sustainability planning"]
              },
              {
                title: "Startup Development", icon: Rocket,
                items: ["Prepared pitch presentations", "Participated in startup mentoring", "Presented the solution to evaluators and stakeholders"]
              }
            ].map((area, i) => (
              <GlowingCard key={i} className="border border-border/40 p-6 bg-secondary/5 hover:bg-secondary/10 transition-colors">
                <area.icon className="mb-4 h-5 w-5 text-muted-foreground" aria-hidden="true" />
                <h3 className="text-sm font-medium text-foreground mb-4 border-b border-border/40 pb-2">{area.title}</h3>
                <ul className="space-y-2">
                  {area.items.map((item, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
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
        <section className="mb-12 sm:mb-14">
          <h2 id="business-analysis-process" className="text-lg font-semibold tracking-tight text-foreground mb-6 flex items-center gap-3"><Workflow className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />Business Analysis Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 border border-border/40 divide-y md:divide-y-0 md:divide-x divide-border/40 bg-secondary/5">
            {[
              { id: "01", title: "Discovery", icon: Search, steps: ["Problem Identification", "Stakeholder Interviews (PPDO)", "Requirements Gathering"] },
              { id: "02", title: "Architecture", icon: Workflow, steps: ["Workflow Analysis", "Process Mapping", "Solution Design"] },
              { id: "03", title: "Prototyping", icon: LayoutTemplate, steps: ["Wireframing", "System Development", "Prototype Testing"] },
              { id: "04", title: "Validation", icon: ShieldCheck, steps: ["Client Validation", "Feedback Integration"] }
            ].map((phase, i) => (
               <GlowingCard key={i} className="p-6 md:p-8 hover:bg-secondary/10 transition-colors">
                 <phase.icon className="mb-4 h-5 w-5 text-muted-foreground" aria-hidden="true" />
                 <div className="flex flex-wrap items-baseline gap-2 mb-6 border-b border-border/40 pb-4">
                   <span className="text-[10px] font-mono text-muted-foreground">{phase.id}</span>
                   <h3 className="text-sm font-medium text-foreground">{phase.title}</h3>
                 </div>
                 <ul className="space-y-4">
                   {phase.steps.map((step, j) => (
                     <li key={j} className="text-sm text-muted-foreground flex items-start gap-3">
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
        <section className="mb-12 sm:mb-14">
          <h2 id="solution-overview" className="text-lg font-semibold tracking-tight text-foreground mb-6 flex items-center gap-3"><LayoutDashboard className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />Solution Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
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
                <GlowingCard key={i} className="border border-border/40 p-6 hover:border-foreground/30 transition-colors bg-card flex flex-col group">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <h3 className="text-sm font-medium text-foreground">{feature.title}</h3>
                  </div>
                  <p className="text-[12px] leading-relaxed text-muted-foreground mt-auto">{feature.desc}</p>
                </GlowingCard>
              );
            })}
          </div>
        </section>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <section aria-labelledby="screens" className="mb-12 sm:mb-14">
            <h2 id="screens" className="mb-4 flex scroll-mt-24 items-center gap-3 text-lg font-semibold tracking-tight text-foreground">
              <Monitor className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              Application Screens
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Selected captures from the web workspace and field app. Confidential fields are permanently redacted.
            </p>
            <div className="space-y-8">
              <section aria-labelledby="web-workspace-screens">
                <h3 id="web-workspace-screens" className="mb-4 text-sm font-medium text-foreground">Web workspace</h3>
                <ProjectScreenGallery projectName="TumaNow" groupLabel="TumaNow web workspace screens" screens={tumanowWebMockups} />
              </section>
              <section aria-labelledby="field-app-screens">
                <h3 id="field-app-screens" className="mb-4 text-sm font-medium text-foreground">Field app</h3>
                <ProjectScreenGallery projectName="TumaNow" groupLabel="TumaNow field app screens" screens={tumanowMobileMockups} layout="mobile" />
              </section>
            </div>
          </section>
        </RevealOnScroll>

        {/* TECH STACK */}
        <RevealOnScroll delay={100}>
        <section className="mb-12 sm:mb-14">
          <h2 id="technology-stack" className="text-lg font-semibold tracking-tight text-foreground mb-6 flex items-center gap-2">
            <Code2 className="w-4 h-4" /> Technology Stack
          </h2>
          <div className="border border-border/40 p-6 bg-secondary/5 flex flex-wrap gap-8">
            {[
              { category: "Frontend", tools: [{ name: "HTML", icon: SiHtml5 }, { name: "CSS", icon: FaCss3Alt }, { name: "JavaScript", icon: SiJavascript }, { name: "Tailwind CSS", icon: SiTailwindcss }] },
              { category: "Backend", tools: [{ name: "PHP", icon: SiPhp }] },
              { category: "Database", tools: [{ name: "MySQL", icon: SiMysql }] },
              { category: "AI Integrations", tools: [{ name: "AI-assisted database querying", icon: Bot }] },
              { category: "Tools", tools: [{ name: "Figma", icon: SiFigma }, { name: "GitHub", icon: SiGithub }, { name: "Canva", icon: Palette }] }
            ].map((stack, i) => (
              <div key={i} className="flex min-w-0 flex-col gap-3">
                <span className="text-xs leading-relaxed text-muted-foreground">{stack.category}</span>
                <ul aria-label={stack.category} className="flex flex-wrap gap-2">
                  {stack.tools.map(({ name, icon: Icon }) => (
                    <li key={name} className="inline-flex items-center gap-2.5 border border-border/40 bg-card px-3 py-2 text-[11px] font-mono text-foreground">
                      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />{name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        </RevealOnScroll>

        {/* STARTUP JOURNEY (Horizontal Timeline) */}
        <RevealOnScroll delay={100}>
        <section className="mb-12 sm:mb-14 overflow-hidden">
          <h2 id="startup-journey" className="text-lg font-semibold tracking-tight text-foreground mb-6 flex items-center gap-3"><Rocket className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />Startup Journey</h2>
          <div className="border border-border/40 p-8 bg-secondary/5 flex flex-wrap gap-y-6 gap-x-4 items-center">
            {[
              "Hackathon Challenge", "Problem Selection", "PPDO Stakeholder Interviews", 
              "Requirements Gathering", "System Design", "Prototype Development", 
              "Pitch Competition", "Champion", "KWADRA TBI Mentoring", 
              "Client Validation", "Potential Government Adoption"
            ].map((step, i, arr) => (
              <div key={i} className="flex items-center gap-4">
                <span className={`text-[11px] font-mono px-3 py-1.5 whitespace-normal border ${
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
        <section className="mb-12 sm:mb-14">
          <h2 id="business-impact" className="text-lg font-semibold tracking-tight text-foreground mb-6 flex items-center gap-3"><ChartNoAxesCombined className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />Capabilities &amp; Expected Benefits</h2>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">The prototype demonstrates centralized monitoring workflows. The comparisons below describe intended benefits, not measured improvements from government adoption. PPDO evaluation remains separate from deployment.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 border border-border/40 divide-y md:divide-y-0 md:divide-x divide-border/40 bg-card">
            {/* BEFORE */}
            <div className="p-8">
              <h3 className="text-xs leading-relaxed text-muted-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500/50"></span> Legacy System
              </h3>
              <ul className="space-y-4">
                {["Manual paperwork", "Mixed Word and Excel files", "Delayed reports", "No real-time updates", "Limited monitoring scope"].map((item, i) => (
                   <li key={i} className="text-sm text-muted-foreground flex items-center gap-3">
                     <span className="text-muted-foreground/40">—</span> {item}
                   </li>
                ))}
              </ul>
            </div>
            {/* AFTER */}
            <div className="p-8 bg-secondary/5">
              <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500/50"></span> Prototype capabilities
              </h3>
              <ul className="space-y-4">
                {["Centralized project records", "Real-time dashboards", "Structured reporting workflows", "Location-based map monitoring", "Support for public transparency"].map((item, i) => (
                   <li key={i} className="text-sm text-foreground font-medium flex items-center gap-3">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border/40 pt-10">
          
          <section>
            <div className="flex items-center gap-2 mb-8">
              <Trophy className="w-4 h-4 text-foreground" />
              <h2 id="outcomes" className="text-lg font-semibold tracking-tight text-foreground">Outcomes</h2>
            </div>
            <dl className="space-y-6">
              <div>
                <dt className="text-xs leading-relaxed text-muted-foreground mb-1">Champion</dt>
                <dd className="text-sm text-foreground font-medium flex items-center gap-2">
                  {/* Replaced the emoji with the outline Lucide icon here */}
                  <Trophy className="w-3.5 h-3.5 text-muted-foreground" /> 
                  Iloilo Province Startup Hackathon
                </dd>
              </div>
              <div>
                <dt className="text-xs leading-relaxed text-muted-foreground mb-1">Client Validation</dt>
                <dd className="text-sm text-foreground">Selected directly by PPDO for further evaluation.</dd>
              </div>
              <div>
                <dt className="text-xs leading-relaxed text-muted-foreground mb-1">Potential Adoption</dt>
                <dd className="text-sm text-foreground">Being considered for adoption by the PPDO alongside an internal system developed by the Office of the Information Communication Technology Management Officer (ICTMO) of Iloilo Provincial Government.</dd>
              </div>
              <div>
                <dt className="text-xs leading-relaxed text-muted-foreground mb-1">Startup Incubation</dt>
                <dd className="text-sm text-foreground">Received intensive mentoring under the KWADRA Technology Business Incubator.</dd>
              </div>
            </dl>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-8">
              <Lightbulb className="w-4 h-4 text-foreground" />
              <h2 className="text-lg font-semibold tracking-tight text-foreground">Lessons Learned</h2>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground pl-4 border-l-2 border-border/40">
              Through TumaNow, I learned that successful digital solutions begin with understanding real user problems. Working closely with government stakeholders strengthened my skills in business analysis, requirements gathering, communication, and transforming operational challenges into practical digital solutions.
            </p>
          </section>

        </div>
        </RevealOnScroll>

      </div>
    </main>
  );
}

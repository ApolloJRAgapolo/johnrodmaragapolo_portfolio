import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  Terminal,
  UserCircle,
  GitCommit,
  Clock,
  MapPin,
  Target,
} from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { overviewStats } from "@/lib/data/overview";

export default function Overview() {
  const systemStats = overviewStats;

  return (
    <main className="flex-1 min-h-screen overflow-y-auto bg-background selection:bg-foreground selection:text-background">
      <div className="page-shell max-w-5xl">
      {/* HERO TYPOGRAPHY & MICRO-DETAILS */}
        <RevealOnScroll delay={0}>
          <header className="mb-12 sm:mb-20">
            <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-mono text-muted-foreground sm:mb-6 sm:gap-x-4">
              <span className="flex items-center gap-1.5 text-foreground">
                <Terminal className="w-3 h-3" /> Information Systems Graduate
              </span>
              <span aria-hidden="true">•</span>
              <span>Available for Entry-Level Opportunities</span>
              <span aria-hidden="true">•</span>
              <span className="hidden" aria-hidden="true">
                {systemStats.caseFiles} Case File • {systemStats.credentials} Credentials • {systemStats.ecosystemNodes} Ecosystem Nodes • {systemStats.capabilities} Core Capabilities
              </span>
              <span>Iloilo City, Philippines</span>
              <span aria-hidden="true">•</span>
              <span>{systemStats.credentials} Verified Credentials</span>
            </div>
            
            <h1 className="mb-5 text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[0.98] tracking-tight text-foreground sm:mb-6">
              John Rodmar Agapolo
            </h1>
            <p className="max-w-4xl text-lg font-light leading-relaxed text-muted-foreground sm:text-xl">
              Passionate about using technology to solve real-world problems.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/resume/John Rodmar Agapolo Professional Resume.pdf"
                download
                className="inline-flex min-h-11 items-center justify-center border border-foreground bg-foreground px-5 text-[11px] font-mono uppercase tracking-widest text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Download Resume
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center border border-border/60 px-5 text-[11px] font-mono uppercase tracking-widest text-foreground transition-colors hover:border-foreground/40 hover:bg-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Get in Touch
              </Link>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-mono text-muted-foreground">
              <Link href="https://www.linkedin.com/in/john-rodmar-agapolo-9492602b2/" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-1.5 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50">
                LinkedIn <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </Link>
              <Link href="https://github.com/ApolloJRAgapolo" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-1.5 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50">
                GitHub <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </Link>
              <Link href="/credentials" className="inline-flex min-h-11 items-center gap-1.5 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50">
                Verified Credentials <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </Link>
            </div>
          </header>
        </RevealOnScroll>

        {/* ROW 1: MISSION & STATUS */}
        <div className="mb-14 grid grid-cols-1 gap-10 sm:mb-20 lg:grid-cols-12 lg:gap-20">
          {/* Mission Brief */}
          <RevealOnScroll delay={100} className="col-span-1 lg:col-span-7">
            <section>
              <h2 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:mb-8">
                Mission Brief
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-[1.45rem] font-medium leading-tight tracking-tight text-foreground sm:text-2xl lg:text-[26px]">
                  I enjoy learning, collaborating, and creating practical solutions through technology.
                </p>
                <p className="max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Driven by curiosity and continuous learning, I enjoy exploring ideas and creating technology solutions that make a meaningful impact.
                </p>
              </div>
            </section>
          </RevealOnScroll>

          {/* Workspace Status */}
          <RevealOnScroll delay={200} className="col-span-1 lg:col-span-5">
            <section>
              <h2 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:mb-8">
                Workspace Status
              </h2>

              <div className="flex flex-col text-[13px]">
                <div className="flex items-center justify-between py-3 border-b border-border/40">
                  <div className="flex items-center gap-2.5 text-muted-foreground">
                    <Activity className="w-3.5 h-3.5 stroke-[1.5]" /> System
                  </div>
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                    Operational
                  </div>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-border/40">
                  <div className="flex items-center gap-2.5 text-muted-foreground">
                    <UserCircle className="w-3.5 h-3.5 stroke-[1.5]" /> Availability
                  </div>
                  <div className="text-foreground">Open for Opportunities</div>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-border/40">
                  <div className="flex items-center gap-2.5 text-muted-foreground">
                    <GitCommit className="w-3.5 h-3.5 stroke-[1.5]" /> Version
                  </div>
                  <div className="font-mono text-[11px] text-foreground">1.0.0</div>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-border/40">
                  <div className="flex items-center gap-2.5 text-muted-foreground">
                    <Clock className="w-3.5 h-3.5 stroke-[1.5]" /> Last Update
                  </div>
                  <div className="text-foreground">August 2026</div>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-border/40">
                  <div className="flex items-center gap-2.5 text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5 stroke-[1.5]" /> Location
                  </div>
                  <div className="text-foreground">Iloilo City</div>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-2.5 text-muted-foreground">
                    <Target className="w-3.5 h-3.5 stroke-[1.5]" /> Focus
                  </div>
                  <div className="text-foreground text-right">Business Process Analysis</div>
                </div>
              </div>
            </section>
          </RevealOnScroll>
        </div>

        {/* ROW 2: FEATURED CASE FILE */}
        <section className="mb-16 flex flex-col gap-5 sm:mb-24 sm:gap-8">
          <RevealOnScroll delay={100}>
            <div className="group relative overflow-hidden border border-border/40 p-5 transition-colors duration-500 hover:border-foreground/20 sm:p-8 lg:p-10">
              <div className="absolute top-0 right-0 -z-10 h-64 w-64 rounded-full bg-secondary/20 opacity-50 blur-3xl transition-opacity duration-700 group-hover:opacity-100"></div>

              <span className="mb-5 block text-[10px] font-mono tracking-widest text-muted-foreground">
                IS CAPSTONE PROJECT
              </span>

              <div className="mb-8 max-w-2xl">
                <h3 className="mb-3 text-2xl font-medium tracking-tight text-foreground">
                  Backyard Livestock Monitoring System
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  A digital system designed to improve backyard livestock monitoring and reporting. My role focused on system planning, process analysis, user requirements, and overall system design.
                </p>
              </div>

              <hr className="mb-6 border-border/40" />

              <div className="mb-8 grid grid-cols-2 gap-y-6 gap-x-8 md:grid-cols-5">
                <div className="col-span-2 md:col-span-1">
                  <span className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground">Role</span>
                  <span className="text-[13px] text-foreground">Project Manager & Systems Analyst</span>
                </div>
                <div className="col-span-2 md:col-span-2">
                  <span className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground">Client</span>
                  <span className="text-[13px] text-foreground leading-snug">Municipality of San Miguel — Department of Agriculture</span>
                </div>
                <div className="col-span-2 md:col-span-2">
                  <span className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground">Focus</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[11px] font-mono text-foreground border border-border/40 px-2 py-1">Systems Analysis</span>
                    <span className="text-[11px] font-mono text-foreground border border-border/40 px-2 py-1">Requirements Gathering</span>
                    <span className="text-[11px] font-mono text-foreground border border-border/40 px-2 py-1">System Design</span>
                  </div>
                </div>
                <div className="col-span-1">
                  <span className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground">Status</span>
                  <span className="text-[13px] text-foreground">Completed</span>
                </div>
                <div className="col-span-1">
                  <span className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground">Year</span>
                  <span className="text-[13px] text-foreground">2026</span>
                </div>
              </div>

              <hr className="mb-6 border-border/40" />

              <Link
                href="/case-files/blms"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-foreground transition-colors hover:text-muted-foreground uppercase tracking-widest"
              >
                VIEW FULL CASE FILE <ArrowRight className="h-3.5 w-3.5 stroke-[1.5]" />
              </Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="group relative overflow-hidden border border-border/40 p-5 transition-colors duration-500 hover:border-foreground/20 sm:p-8 lg:p-10">
              <div className="absolute top-0 right-0 -z-10 h-64 w-64 rounded-full bg-secondary/20 opacity-50 blur-3xl transition-opacity duration-700 group-hover:opacity-100"></div>

              <span className="mb-5 block text-[10px] font-mono tracking-widest text-muted-foreground">
                GOVTECH STARTUP
              </span>

              <div className="mb-8 max-w-2xl">
                <h3 className="mb-3 text-2xl font-medium tracking-tight text-foreground">
                  TumaNow: Digital Transformation for Local Government
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  A digital project monitoring platform developed to help government offices monitor community development projects in one centralized system, replacing scattered files and manual reports.
                </p>
              </div>

              <hr className="mb-6 border-border/40" />

              <div className="mb-8 grid grid-cols-2 gap-y-6 gap-x-8 md:grid-cols-5">
                <div className="col-span-2 md:col-span-1">
                  <span className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground">Role</span>
                  <span className="text-[13px] text-foreground">Co-Founder, Business Analyst, CFO</span>
                </div>
                <div className="col-span-2 md:col-span-2">
                  <span className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground">Client</span>
                  <span className="text-[13px] text-foreground leading-snug">Provincial Planning and Development Office (PPDO)</span>
                </div>
                <div className="col-span-2 md:col-span-2">
                  <span className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground">Focus</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[11px] font-mono text-foreground border border-border/40 px-2 py-1">Business Analysis</span>
                    <span className="text-[11px] font-mono text-foreground border border-border/40 px-2 py-1">Financial Planning</span>
                    <span className="text-[11px] font-mono text-foreground border border-border/40 px-2 py-1">GovTech</span>
                  </div>
                </div>
                <div className="col-span-1">
                  <span className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground">Status</span>
                  <span className="text-[13px] text-foreground">Champion &amp; Client Validation</span>
                </div>
                <div className="col-span-1">
                  <span className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground">Year</span>
                  <span className="text-[13px] text-foreground">2025–Present</span>
                </div>
              </div>

              <hr className="mb-6 border-border/40" />

              <Link
                href="/case-files/tumanow"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-foreground transition-colors hover:text-muted-foreground uppercase tracking-widest"
              >
                VIEW FULL CASE FILE <ArrowUpRight className="h-3.5 w-3.5 stroke-[1.5]" />
              </Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={300}>
            <div className="group relative overflow-hidden border border-border/40 p-5 transition-colors duration-500 hover:border-foreground/20 sm:p-8 lg:p-10">
              <div className="absolute top-0 right-0 -z-10 h-64 w-64 rounded-full bg-secondary/20 opacity-50 blur-3xl transition-opacity duration-700 group-hover:opacity-100"></div>

              <span className="mb-5 block text-[10px] font-mono tracking-widest text-muted-foreground">
                PERSONAL DIGITAL WORKSPACE
              </span>

              <div className="mb-8 max-w-2xl">
                <h3 className="mb-3 text-2xl font-medium tracking-tight text-foreground">
                  How I Built This Portfolio
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  A personal professional website created as an organized digital workspace where visitors can explore my projects, experience, credentials, documents, skills, and professional journey.
                </p>
              </div>

              <hr className="mb-6 border-border/40" />

              <div className="mb-8 grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-5">
                <div className="col-span-2 md:col-span-1">
                  <span className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground">Role</span>
                  <span className="text-[13px] text-foreground">Portfolio Creator</span>
                </div>
                <div className="col-span-2 md:col-span-2">
                  <span className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground">Client</span>
                  <span className="text-[13px] leading-snug text-foreground">Personal Professional Portfolio</span>
                </div>
                <div className="col-span-2 md:col-span-2">
                  <span className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground">Focus</span>
                  <div className="flex flex-wrap gap-2">
                    <span className="border border-border/40 px-2 py-1 text-[11px] font-mono text-foreground">Information Architecture</span>
                    <span className="border border-border/40 px-2 py-1 text-[11px] font-mono text-foreground">Responsive Design</span>
                    <span className="border border-border/40 px-2 py-1 text-[11px] font-mono text-foreground">Frontend Development</span>
                  </div>
                </div>
                <div className="col-span-1">
                  <span className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground">Status</span>
                  <span className="text-[13px] text-foreground">Continuously Refined</span>
                </div>
                <div className="col-span-1">
                  <span className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground">Year</span>
                  <span className="text-[13px] text-foreground">2026</span>
                </div>
              </div>

              <hr className="mb-6 border-border/40" />

              <Link
                href="/case-files/portfolio-workspace"
                className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-widest text-foreground transition-colors hover:text-muted-foreground"
              >
                VIEW FULL CASE FILE <ArrowUpRight className="h-3.5 w-3.5 stroke-[1.5]" />
              </Link>
            </div>
          </RevealOnScroll>
        </section>

        {/* ROW 3: SNAPSHOT & MILESTONES */}
        {/* Fixed Grid Layout: Explicitly set to 2 columns on large screens to keep items side-by-side */}
        <div className="grid grid-cols-1 gap-12 border-t border-border/40 pt-12 sm:gap-16 sm:pt-16 lg:grid-cols-2 lg:gap-24">
          
          {/* LEFT COLUMN: PROFESSIONAL SNAPSHOT */}
          <RevealOnScroll delay={100}>
            <section>
              <h2 className="mb-8 text-[11px] font-mono uppercase tracking-[0.2em] text-foreground">
                Professional Snapshot
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                
                <div>
                  <h4 className="mb-2 text-[9px] font-mono uppercase tracking-widest text-muted-foreground">Education</h4>
                  <p className="text-[13px] text-foreground leading-relaxed">BS Information Systems</p>
                  <p className="text-[13px] text-foreground leading-relaxed">Magna Cum Laude</p>
                </div>
                
                <div>
                  <h4 className="mb-2 text-[9px] font-mono uppercase tracking-widest text-muted-foreground">Current Direction</h4>
                  <p className="text-[13px] text-foreground leading-relaxed">
                    Building expertise in Systems Analysis,<br />
                    Business Process Analysis,<br />
                    and Data Analytics.
                  </p>
                </div>
                
                <div>
                  <h4 className="mb-2 text-[9px] font-mono uppercase tracking-widest text-muted-foreground">Interests</h4>
                  <p className="text-[13px] text-foreground leading-relaxed">Digital Transformation</p>
                  <p className="text-[13px] text-foreground leading-relaxed">Business Processes</p>
                  <p className="text-[13px] text-foreground leading-relaxed">Data Analytics</p>
                </div>
                
                <div>
                  <h4 className="mb-2 text-[9px] font-mono uppercase tracking-widest text-muted-foreground">Current Status</h4>
                  <p className="text-[13px] text-foreground leading-relaxed">Open to Entry-Level Opportunities</p>
                </div>

                <div>
                  <h4 className="mb-2 text-[9px] font-mono uppercase tracking-widest text-muted-foreground">Location</h4>
                  <p className="text-[13px] text-foreground leading-relaxed">Iloilo City, Philippines</p>
                </div>

                <div>
                  <h4 className="mb-2 text-[9px] font-mono uppercase tracking-widest text-muted-foreground">Experience</h4>
                  <p className="text-[13px] text-foreground leading-relaxed">600-Hour Internship</p>
                  <p className="text-[13px] text-foreground leading-relaxed">ISAT U – Kwadra Technology Business Incubator</p>
                  <p className="text-[13px] text-foreground leading-relaxed">Wadhwani Foundation Philippines</p>
                  <p className="text-[13px] text-foreground leading-relaxed">Startup Incubation</p>
                </div>

              </div>
            </section>
          </RevealOnScroll>

          {/* RIGHT COLUMN: RECENT MILESTONES */}
          <RevealOnScroll delay={200}>
            <section>
              <h2 className="mb-8 text-[11px] font-mono uppercase tracking-[0.2em] text-foreground">
                Recent Milestones
              </h2>
              <div className="flex flex-col gap-6">

                <div className="relative pl-6 border-l border-border/40">
                  <div className="absolute w-1.5 h-1.5 bg-foreground rounded-full -left-[3.5px] top-1.5"></div>
                  <h4 className="text-[10px] font-mono text-muted-foreground mb-2">2026</h4>
                  <p className="text-[13px] text-foreground">Magna Cum Laude</p>
                </div>

                <div className="relative pl-6 border-l border-border/40">
                  <div className="absolute w-1.5 h-1.5 bg-foreground rounded-full -left-[3.5px] top-1.5"></div>
                  <h4 className="text-[10px] font-mono text-muted-foreground mb-2">2026</h4>
                  <p className="text-[13px] text-foreground">Outstanding Intern Awardee</p>
                </div>

                <div className="relative pl-6 border-l border-border/40">
                  <div className="absolute w-1.5 h-1.5 bg-foreground rounded-full -left-[3.5px] top-1.5"></div>
                  <h4 className="text-[10px] font-mono text-muted-foreground mb-2">2026</h4>
                  <p className="text-[13px] text-foreground">Best Capstone Project Awardee</p>
                </div>

                <div className="relative border-l border-border/40 pl-6">
                  <div className="absolute w-1.5 h-1.5 bg-foreground rounded-full -left-[3.5px] top-1.5"></div>
                  <h4 className="mb-2 text-[10px] font-mono text-muted-foreground">2026</h4>
                  <p className="text-[13px] text-muted-foreground">Top 10 of 23 Entries — AI Fest AI Hackathon (Open Category)</p>
                </div>

                <div className="relative pl-6 border-l border-border/40">
                  <div className="absolute w-1.5 h-1.5 bg-foreground rounded-full -left-[3.5px] top-1.5"></div>
                  <h4 className="text-[10px] font-mono text-muted-foreground mb-2">2025</h4>
                  <p className="text-[13px] text-foreground">Iloilo Province Startup Hackathon Champion</p>
                </div>

              </div>
            </section>
          </RevealOnScroll>

        </div>
      </div>
    </main>
  );
}

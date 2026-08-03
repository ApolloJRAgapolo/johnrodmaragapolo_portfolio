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
  const lastUpdateDate = new Date(overviewStats.lastUpdated);
  const currentDate = new Date();

  const timeDifference = currentDate.getTime() - lastUpdateDate.getTime();
  const daysAgo = Math.floor(timeDifference / (1000 * 3600 * 24));
  const daysText =
    daysAgo === 0 ? "Today" : daysAgo === 1 ? "1 day ago" : `${daysAgo} days ago`;

  const systemStats = overviewStats;

  return (
    <main className="flex-1 min-h-screen overflow-y-auto bg-background selection:bg-foreground selection:text-background">
      <div className="max-w-5xl mx-auto w-full px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24">
      {/* HERO TYPOGRAPHY & MICRO-DETAILS */}
        <RevealOnScroll delay={0}>
          <header className="mb-24">
            <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground mb-8">
              <span className="flex items-center gap-1.5 text-foreground">
                <Terminal className="w-3 h-3" /> Workspace {systemStats.version}
              </span>
              <span>/</span>
              <span>Updated {daysText}</span>
              <span>/</span>
              <span className="hidden sm:inline-block">
                {systemStats.caseFiles} Case File • {systemStats.credentials} Credentials • {systemStats.ecosystemNodes} Ecosystem Nodes • {systemStats.capabilities} Core Capabilities
              </span>
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight text-foreground mb-6">
              John Rodmar Agapolo
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-2xl">
              Passionate about using technology <br />
              to solve real-world problems.<br />
            </p>
          </header>
        </RevealOnScroll>

        {/* ROW 1: MISSION & STATUS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          {/* Mission Brief */}
          <RevealOnScroll delay={100} className="col-span-1 lg:col-span-7">
            <section>
              <h2 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-8">
                Mission Brief
              </h2>
              <div className="space-y-6">
                <p className="text-2xl lg:text-[26px] leading-tight font-medium tracking-tight text-foreground">
                  I enjoy understanding how organizations work, identifying inefficiencies, and translating complex requirements into structured digital solutions.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My work combines Information Systems, systems thinking, and continuous learning to build practical technology that solves real-world problems.
                </p>
              </div>
            </section>
          </RevealOnScroll>

          {/* Workspace Status */}
          <RevealOnScroll delay={200} className="col-span-1 lg:col-span-5">
            <section>
              <h2 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-8">
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
        <section className="mb-24 flex flex-col gap-8">
          <RevealOnScroll delay={100}>
            <div className="group relative overflow-hidden border border-border/40 p-8 transition-colors duration-500 hover:border-foreground/20 lg:p-10">
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
            <div className="group relative overflow-hidden border border-border/40 p-8 transition-colors duration-500 hover:border-foreground/20 lg:p-10">
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
        </section>

        {/* ROW 3: SNAPSHOT & MILESTONES */}
        {/* Fixed Grid Layout: Explicitly set to 2 columns on large screens to keep items side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 border-t border-border/40 pt-16">
          
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

import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Terminal,
  UserCircle,
  Clock,
  Target,
} from "lucide-react";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import FeaturedCaseFiles from "@/components/features/overview/FeaturedCaseFiles";
import { verifiedCredentialCount } from "@/lib/data/documents";

export default function Overview() {

  return (
    <main id="main-content" tabIndex={-1} className="flex-1 min-h-screen overflow-y-auto bg-background selection:bg-foreground selection:text-background">
      <div className="page-shell max-w-5xl">
      {/* HERO TYPOGRAPHY & MICRO-DETAILS */}
        <RevealOnScroll delay={0}>
          <header className="mb-8 border-b border-border/40 pb-8 sm:mb-20 sm:pb-16 lg:flex lg:min-h-[clamp(480px,58vh,620px)] lg:flex-col">
            <div className="mb-4 font-mono text-[9px] leading-[1.55] text-muted-foreground sm:mb-6 sm:hidden">
              <span className="flex items-center gap-1.5 text-foreground"><Terminal className="h-3 w-3 shrink-0" aria-hidden="true" /> Information Systems Graduate</span>
              <span className="block pl-[18px]">Open to Entry-Level Opportunities · {verifiedCredentialCount} Verified Credentials</span>
            </div>
            <div className="mb-6 hidden flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono text-muted-foreground sm:flex">
              <span className="flex items-center gap-1.5 text-foreground"><Terminal className="h-3 w-3" aria-hidden="true" /> Information Systems Graduate</span>
              <span aria-hidden="true">•</span>
              <span>Open to Entry-Level Opportunities</span>
              <span aria-hidden="true">•</span>
              <span>{verifiedCredentialCount} Verified Credentials</span>
            </div>
            <div className="grid flex-1 items-center gap-4 sm:grid-cols-[clamp(220px,20vw,250px)_minmax(0,1fr)] sm:gap-10 lg:gap-14">
            <div className="relative mx-auto hidden h-[clamp(300px,30vw,350px)] w-full overflow-hidden rounded-md border border-border/60 bg-secondary/20 sm:block">
              <Image src="/badges/my portfolio profile pic.png" alt="John Rodmar Agapolo" fill priority className="object-cover grayscale transition-all duration-300 [@media(hover:hover)]:hover:scale-[1.01] [@media(hover:hover)]:hover:grayscale-0" sizes="(min-width: 1024px) 250px, 220px" />
            </div>
            <div className="lg:py-2">
            <div className="mb-3 grid grid-cols-[minmax(0,1fr)_clamp(5.5rem,24vw,6rem)] items-center gap-3 sm:mb-0 sm:block">
              <h1 className="text-[clamp(2.25rem,10vw,3rem)] font-bold leading-[0.98] tracking-tight text-foreground sm:mb-6 sm:text-[clamp(2.4rem,4vw,3.75rem)] ">John Rodmar Agapolo</h1>
              <div className="relative aspect-[4/5] w-[clamp(5.5rem,24vw,6rem)] overflow-hidden rounded-md border border-border/60 bg-secondary/20 sm:hidden">
                <Image src="/badges/my portfolio profile pic.png" alt="John Rodmar Agapolo" fill priority className="object-cover grayscale transition-all duration-300 [@media(hover:hover)]:hover:scale-[1.01] [@media(hover:hover)]:hover:grayscale-0" sizes="(max-width: 639px) 24vw, 96px" />
              </div>
            </div>
            <p className="max-w-xl text-base font-light leading-relaxed text-muted-foreground sm:text-xl">
              Building practical digital solutions through software, systems, data, and technology.
            </p>

            <div className="mt-4 grid grid-cols-1 gap-2 min-[390px]:grid-cols-2 sm:mt-8 sm:flex sm:flex-wrap sm:items-center sm:gap-3">
              <Link href="/case-files" className="inline-flex min-h-11 items-center justify-center border border-foreground bg-foreground px-4 text-[11px] font-mono uppercase tracking-widest text-background hover:bg-foreground/90">View Projects</Link>
              <a
                href="/documents#resume"
                className="inline-flex min-h-10 items-center justify-center border border-border/60 px-3 text-[10px] font-mono uppercase tracking-widest text-foreground transition-colors hover:bg-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:min-h-11 sm:px-5 sm:text-[11px]"
              >
                View Resume
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-10 items-center justify-center border border-border/60 px-3 text-[10px] font-mono uppercase tracking-widest text-foreground transition-colors hover:border-foreground/40 hover:bg-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:min-h-11 sm:px-5 sm:text-[11px]"
              >
                Get in Touch
              </Link>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10px] font-mono text-muted-foreground sm:mt-5 sm:gap-x-5 sm:gap-y-2 sm:text-[11px]">
              <Link href="https://www.linkedin.com/in/john-rodmar-agapolo-9492602b2/" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1.5 transition-colors duration-200 ease-out hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                LinkedIn <ArrowUpRight className="h-3 w-3 transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link href="https://github.com/ApolloJRAgapolo" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1.5 transition-colors duration-200 ease-out hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                GitHub <ArrowUpRight className="h-3 w-3 transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link href="/credentials" className="group inline-flex items-center gap-1.5 transition-colors duration-200 ease-out hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                <span className="sm:hidden">Credentials</span><span className="hidden sm:inline">Verified Credentials</span> <ArrowUpRight className="h-3 w-3 transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
            </div>
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
                <p className="text-[1.45rem] font-medium leading-tight tracking-tight text-foreground sm:text-2xl lg:text-[26px]">I build web applications and turn user needs into clear system designs.</p>
                <p className="max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">My work includes PricePulse PH, a deployed commodity-price dashboard built with Next.js, Prisma, and PostgreSQL, and BLMS, an award-winning capstone focused on livestock monitoring.</p>
              </div>
            </section>
          </RevealOnScroll>

          {/* At a glance */}
          <RevealOnScroll delay={200} className="col-span-1 lg:col-span-5">
            <section>
              <h2 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:mb-8">
                Workspace Status
              </h2>

              <div className="flex flex-col text-[13px]">
                <div className="flex items-center justify-between py-3 border-b border-border/40">
                  <div className="flex items-center gap-2.5 text-muted-foreground">
                    <UserCircle className="w-3.5 h-3.5 stroke-[1.5]" /> Availability
                  </div>
                  <div className="text-foreground">Open for Opportunities</div>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-border/40">
                  <div className="flex items-center gap-2.5 text-muted-foreground">
                    <Clock className="w-3.5 h-3.5 stroke-[1.5]" /> Last Update
                  </div>
                  <div className="text-foreground">September 2026</div>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-2.5 text-muted-foreground">
                    <Target className="w-3.5 h-3.5 stroke-[1.5]" /> Focus
                  </div>
                  <div className="text-foreground text-right">Software Engineering</div>
                </div>
              </div>
            </section>
          </RevealOnScroll>
        </div>

        <FeaturedCaseFiles />
        <div className="grid gap-10 xl:grid-cols-2">
          <RevealOnScroll delay={100}>
            <section>
              <h2 className="mb-8 text-base font-semibold tracking-tight text-foreground">
                Professional Snapshot
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                
                <div>
                  <h4 className="mb-2 text-xs font-medium text-muted-foreground">Education</h4>
                  <p className="text-[13px] text-foreground leading-relaxed">BS Information Systems</p>
                  <p className="text-[13px] text-foreground leading-relaxed">Magna Cum Laude</p>
                </div>
                
                <div>
                  <h4 className="mb-2 text-xs font-medium text-muted-foreground">Current Direction</h4>
                  <p className="text-[13px] text-foreground leading-relaxed">
                    Building expertise in Software Engineering,<br />
                    Web Development,<br />
                    and Systems Design.
                  </p>
                </div>
                
                <div>
                  <h4 className="mb-2 text-xs font-medium text-muted-foreground">Interests</h4>
                  <p className="text-[13px] text-foreground leading-relaxed">Software Engineering</p>
                  <p className="text-[13px] text-foreground leading-relaxed">Web Development</p>
                  <p className="text-[13px] text-foreground leading-relaxed">Systems Analysis &amp; Design</p>
                  <p className="text-[13px] text-foreground leading-relaxed">API &amp; Database Integration</p>
                </div>
                
                <div>
                  <h4 className="mb-2 text-xs font-medium text-muted-foreground">Current Status</h4>
                  <p className="text-[13px] text-foreground leading-relaxed">Open to Entry-Level Opportunities</p>
                </div>

                <div>
                  <h4 className="mb-2 text-xs font-medium text-muted-foreground">Experience</h4>
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
              <h2 className="mb-8 text-base font-semibold tracking-tight text-foreground">
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

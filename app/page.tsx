import TechnologyList from "@/components/shared/TechnologyList";
import { actionStyles } from "@/lib/action-styles";
import { getCredentialAnchor } from "@/lib/credential-anchors";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Terminal } from "lucide-react";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import FeaturedCaseFiles from "@/components/features/overview/FeaturedCaseFiles";

const technicalStrengths = [
  { title: "Frontend development", technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS"], detail: "Responsive interfaces, dashboard filters, and document viewing." },
  { title: "APIs & databases", technologies: ["Node.js", "Express", "PostgreSQL", "Prisma"], detail: "Server-side sessions, private file access, and relational data; continuing to learn SQL." },
  { title: "Delivery & debugging", technologies: ["Git", "GitHub", "Vercel", "Railway"], detail: "Production builds, environment configuration, and deployment across services." },
  { title: "Systems analysis", technologies: ["Systems Analysis", "Requirements Gathering", "System Design"], detail: "Process analysis, database design, and technical documentation." },
];

const recognition = [
  { title: "Best Capstone Project", context: "BLMS · ISAT U", year: "2026", credentialTitle: "Best Capstone Project Award" },
  { title: "Outstanding Intern", context: "KWADRA Technology Business Incubator", year: "2026", credentialTitle: "Outstanding Intern Award" },
  { title: "Startup Hackathon Champion", context: "TumaNow · Iloilo Province", year: "2025", credentialTitle: "Iloilo Province Startup Hackathon Champion" },
];

const sectionLinkStyle = "inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none";

export default function Overview() {

  return (
    <main id="main-content" tabIndex={-1} className="flex-1 min-h-screen overflow-y-auto bg-background selection:bg-foreground selection:text-background">
      <div className="page-shell">
        <RevealOnScroll delay={0}>
          <header className="mb-10 border-b border-border/40 pb-8 sm:mb-12 sm:pb-10 lg:flex lg:flex-col">
            <div className="mb-4 pr-20 text-xs leading-relaxed text-muted-foreground sm:mb-6 lg:pr-0">
              <span className="flex items-center gap-1.5 text-foreground"><Terminal className="h-3 w-3 shrink-0" aria-hidden="true" /> Professional Portfolio</span>
              <span className="mt-1 block pl-[18px] lg:hidden">Open to Opportunities</span>
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
              Information Systems graduate with an interest in web development and software engineering.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              I enjoy turning ideas into practical web applications and learning along the way.
            </p>

            <div className="mt-4 grid grid-cols-1 gap-2 min-[390px]:grid-cols-2 sm:mt-8 sm:flex sm:flex-wrap sm:items-center sm:gap-3">
              <Link href="/case-files" className={actionStyles({ variant: "primary" })}>View Projects</Link>
              <a
                href="/documents#resume"
                className={actionStyles()}
              >
                View Resume
              </a>
              <Link
                href="/contact"
                className={actionStyles()}
              >
                Get in Touch
              </Link>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[13px] text-muted-foreground sm:mt-5 sm:gap-x-5 sm:gap-y-2">
              <Link href="https://www.linkedin.com/in/john-rodmar-agapolo-9492602b2/" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1.5 transition-colors duration-200 ease-out hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                LinkedIn <ArrowUpRight className="h-3 w-3 transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link href="https://github.com/ApolloJRAgapolo" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1.5 transition-colors duration-200 ease-out hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                GitHub <ArrowUpRight className="h-3 w-3 transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link href="/credentials" className="group inline-flex items-center gap-1.5 transition-colors duration-200 ease-out hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                Credentials <ArrowUpRight className="h-3 w-3 transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
            </div>
            </div>
          </header>
        </RevealOnScroll>

        <FeaturedCaseFiles />

        <section aria-labelledby="experience-education" className="page-section">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <h2 id="experience-education" className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Experience &amp; Education</h2>
            <Link href="/journey" className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground">Professional Journey</Link>
          </div>
          <dl className="divide-y divide-border/40">
            <div className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:gap-8">
              <dt className="text-base font-medium text-foreground">KWADRA Technology Business Incubator</dt>
              <dd className="text-sm leading-relaxed text-muted-foreground">600-hour internship supporting project documentation, innovation programs, and startup activities.</dd>
            </div>
            <div className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:gap-8">
              <dt className="text-base font-medium text-foreground">Wadhwani Foundation Philippines</dt>
              <dd className="text-sm leading-relaxed text-muted-foreground">Internship supporting faculty participation, platform progress monitoring, and communication across partner universities.</dd>
            </div>
            <div className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:gap-8">
              <dt className="text-base font-medium text-foreground">BS Information Systems</dt>
              <dd className="text-sm leading-relaxed text-muted-foreground">Iloilo Science and Technology University · 2026<br />Magna Cum Laude</dd>
            </div>
          </dl>
        </section>

        <section aria-labelledby="technical-strengths" className="page-section">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
            <h2 id="technical-strengths" className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Technical Strengths</h2>
            <Link href="/capabilities" className={sectionLinkStyle}>Capabilities &amp; evidence<ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" /></Link>
          </div>
          <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {technicalStrengths.map((strength) => (
              <div key={strength.title} className="min-w-0 border-t border-border/40 pt-4">
                <h3 className="mb-3 text-base font-medium leading-relaxed text-foreground">{strength.title}</h3>
                <TechnologyList items={strength.technologies} label={strength.title} className="mb-3 grid grid-cols-2 content-start gap-x-4 gap-y-2.5 sm:min-h-16" />
                <p className="text-sm leading-relaxed text-muted-foreground">{strength.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="selected-recognition" className="page-section">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
            <h2 id="selected-recognition" className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Selected Recognition</h2>
            <Link href="/credentials" className={sectionLinkStyle}>Credential archive<ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" /></Link>
          </div>
          <ul className="divide-y divide-border/40 border-y border-border/40">
            {recognition.map((item) => (
              <li key={item.title} className="py-3">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="min-w-0 text-base font-medium text-foreground">
                    <Link href={`/credentials#${getCredentialAnchor(item.credentialTitle)}`} className="inline-flex min-h-11 items-center gap-2 underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:decoration-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none">
                      <span>{item.title}</span><ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
                    </Link>
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">{item.year}</span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.context}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="connect" className="border-t border-border/40 pt-8">
          <h2 id="connect" className="mb-3 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Let&apos;s Connect</h2>
          <p className="max-w-prose text-base leading-relaxed text-muted-foreground">I enjoy learning, collaborating, and creating practical solutions through technology.</p>
          <Link href="/contact" className={`${actionStyles()} mt-5`}>Get in Touch <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
        </section>
      </div>
    </main>
  );
}

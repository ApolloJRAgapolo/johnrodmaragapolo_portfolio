import TechnologyList from "@/components/shared/TechnologyList";
import { actionStyles } from "@/lib/action-styles";
import { getCredentialAnchor } from "@/lib/credential-anchors";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Terminal } from "lucide-react";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import FeaturedCaseFiles from "@/components/features/overview/FeaturedCaseFiles";
import styles from "./OverviewSections.module.css";

const technicalStrengths = [
  { title: "Software development", technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS"], detail: "Building responsive interfaces, dashboards, and practical application workflows." },
  { title: "Data analytics", technologies: ["Python", "pandas", "PostgreSQL", "scikit-learn"], detail: "Preparing data, exploring patterns, validating information, and communicating insights." },
  { title: "Business & systems analysis", technologies: ["Requirements Gathering", "System Design"], detail: "Researching problems, analyzing processes, and translating stakeholder needs into documented solutions." },
  { title: "Digital analytics & SEO", technologies: ["Google Analytics 4", "Google Search Console", "Semrush"], detail: "Currently exploring measurement, reporting, and SEO workflows." },
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
              <Image src="/hero-profile.svg" alt="John Rodmar Agapolo" fill priority className="object-cover grayscale transition-[filter] duration-300 ease-out [@media(hover:hover)]:hover:grayscale-0 motion-reduce:transition-none" sizes="(min-width: 1024px) 250px, 220px" />
            </div>
            <div className="lg:py-2">
            <div className="mb-3 flex items-center justify-between gap-2 sm:mb-0 sm:block">
              <div className="relative mt-1 aspect-[4/5] w-[clamp(5rem,22vw,6rem)] shrink-0 overflow-hidden rounded-md border border-border/60 bg-secondary/20 sm:hidden">
                <Image src="/hero-profile.svg" alt="John Rodmar Agapolo" fill priority className="object-cover grayscale transition-[filter] duration-300 ease-out [@media(hover:hover)]:hover:grayscale-0 motion-reduce:transition-none" sizes="(max-width: 639px) 22vw, 96px" />
              </div>
              <h1 className="min-w-0 flex-1 text-[clamp(1.65rem,8vw,2.75rem)] font-extrabold leading-[0.98] tracking-tight text-foreground sm:mb-3 sm:whitespace-nowrap sm:text-[clamp(2.4rem,4vw,3.75rem)]"><span className="block sm:inline">John Rodmar</span>{" "}<span className="block sm:inline">Agapolo</span></h1>
            </div>
            <p className="max-w-xl text-base font-light leading-relaxed text-muted-foreground sm:text-xl">
              IT Business Analysis | Data Analytics | Software Development
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              I enjoy understanding business needs, improving processes, and using technology and data to create practical solutions.
            </p>

            <div className="mt-5 flex max-w-xl items-center gap-3 border-t border-border/40 pt-4 text-sm">
              <Image src="/gci-ambassador-badge.png" alt="GCI Ambassador badge" width={68} height={68} unoptimized draggable={false} className="h-[68px] w-[68px] shrink-0 object-contain" />
              <div className="min-w-0">
                <p className="font-medium leading-snug text-foreground">Gold Global Ambassador — GCI World by Matsuo-Iwasawa Lab, U-Tokyo</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">Recognized for 20+ successful referrals</p>
              </div>
            </div>

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

        <div className={styles.sections}>
          <section aria-labelledby="experience-education" className="page-section">
            <div className={styles.sectionHeader}>
              <h2 id="experience-education" className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Experience &amp; Education</h2>
              <Link href="/journey" className={sectionLinkStyle}>Professional Journey<ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" /></Link>
            </div>
            <div className={styles.backgroundGrid}>
              <section aria-labelledby="overview-experience" className={styles.backgroundGroup}>
                <h3 id="overview-experience" className={styles.groupHeading}>Experience</h3>
                <ul className={styles.experienceList}>
                  <li>
                    <h4 className={styles.recordTitle}>Gold Global Ambassador — GCI World</h4>
                    <p className={styles.recordMeta}>20+ successful referrals <span aria-hidden="true">·</span> <time dateTime="2026">2026</time></p>
                    <p className={styles.recordDescription}>Helped expand the GCI World learning community and connect more learners with global learning opportunities.</p>
                  </li>
                  <li>
                    <h4 className={styles.recordTitle}>Co-Founder &amp; Business Analyst — TumaNow</h4>
                    <p className={styles.recordMeta}>Business analysis <span aria-hidden="true">·</span> <time dateTime="2025">2025</time></p>
                    <p className={styles.recordDescription}>Stakeholder interviews, requirements analysis, workflow design, and financial planning for a GovTech startup.</p>
                  </li>
                  <li>
                    <h4 className={styles.recordTitle}>Project Manager &amp; Systems Analyst — BLMS</h4>
                    <p className={styles.recordMeta}>Academic capstone <span aria-hidden="true">·</span> <time dateTime="2026">2026</time></p>
                    <p className={styles.recordDescription}>Requirements gathering, process analysis, system design, and technical documentation for a livestock-monitoring prototype.</p>
                  </li>
                </ul>
              </section>
              <section aria-labelledby="overview-education" className={styles.backgroundGroup}>
                <h3 id="overview-education" className={styles.groupHeading}>Education</h3>
                <div className={styles.educationRecord}>
                  <h4 className={styles.recordTitle}>BS Information Systems</h4>
                  <p className={styles.recordMeta}>Graduated <time dateTime="2026">2026</time></p>
                  <p className={styles.recordDescription}>Iloilo Science and Technology University</p>
                  <p className={styles.educationHonor}>Magna Cum Laude</p>
                </div>
              </section>
            </div>
          </section>

          <section aria-labelledby="technical-strengths" className="page-section">
            <div className={styles.sectionHeader}>
              <h2 id="technical-strengths" className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Technical Strengths</h2>
              <Link href="/capabilities" className={sectionLinkStyle}>Capabilities &amp; evidence<ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" /></Link>
            </div>
            <div className={styles.strengthGrid}>
              {technicalStrengths.map((strength) => (
                <div key={strength.title} className={styles.strength}>
                  <h3 className={styles.recordTitle}>{strength.title}</h3>
                  <p className={styles.strengthDescription}>{strength.detail}</p>
                  <TechnologyList items={strength.technologies} label={strength.title} className={`${styles.technologies} grid grid-cols-2 content-start gap-x-4 gap-y-2.5`} />
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="selected-recognition" className="page-section">
            <div className={styles.sectionHeader}>
              <h2 id="selected-recognition" className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Selected Recognition</h2>
              <Link href="/credentials" className={sectionLinkStyle}>Credential archive<ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" /></Link>
            </div>
            <ul className="divide-y divide-border/40 border-y border-border/40">
              {recognition.map((item) => (
                <li key={item.title} className={styles.recognitionRow}>
                  <h3 className={styles.recognitionTitle}>
                    <Link href={`/credentials#${getCredentialAnchor(item.credentialTitle)}`} className="inline-flex min-h-11 max-w-full items-center gap-2 underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:decoration-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none">
                      <span className="min-w-0 break-words">{item.title}</span><ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
                    </Link>
                  </h3>
                  <time dateTime={item.year} className={`${styles.recognitionYear} font-mono`}>{item.year}</time>
                  <p className={styles.recognitionContext}>{item.context}</p>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="connect" className="border-t border-border/40 pt-8">
            <div className={styles.connectLayout}>
              <div className="min-w-0">
                <h2 id="connect" className="mb-3 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Professional Direction</h2>
                <p className="max-w-prose text-base leading-relaxed text-muted-foreground">I&apos;m exploring opportunities in software development, data analytics, and business analysis, where I can apply my Information Systems background to solve practical problems and continue learning.</p>
              </div>
              <Link href="/contact" className={`${actionStyles()} ${styles.contactAction}`}>Get in Touch <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

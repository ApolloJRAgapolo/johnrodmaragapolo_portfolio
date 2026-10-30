import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight, Award, BookOpen, ChevronDown, Layers3, Users } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import { getCredentialAnchor } from "@/lib/credential-anchors";
import {
  blmsResponsibilities,
  foundationSkills,
  kwadraResponsibilities,
  learningExperiences,
  tumanowResponsibilities,
  wadhwaniResponsibilities,
} from "@/lib/data/journey";
import styles from "./ProfessionalJourney.module.css";

type JourneyLogo = { src: string; darkSrc?: string; whiteInDark?: boolean };
type JourneyAction = { href: string; label: string };

function Logo({ logo, leadership = false }: { logo?: JourneyLogo; leadership?: boolean }) {
  if (!logo) {
    const Icon = leadership ? Users : Layers3;
    return <span className={styles.logo} aria-hidden="true"><Icon size={25} strokeWidth={1.4} /></span>;
  }
  return (
    <span className={styles.logo} aria-hidden="true">
      <Image src={logo.src} alt="" width={112} height={56} unoptimized className={logo.darkSrc ? styles.lightLogo : undefined} />
      {logo.darkSrc &&       <Image src={logo.darkSrc} alt="" width={112} height={56} unoptimized className={`${styles.darkLogo} ${logo.whiteInDark ? styles.whiteInDark : ""}`} />}
    </span>
  );
}

function Recognition({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <Link href={`/credentials#${getCredentialAnchor(title)}`} className={styles.recognition}>
      <Award size={14} aria-hidden="true" />
      <span>{children ?? title}</span>
      <ArrowUpRight size={12} aria-hidden="true" />
    </Link>
  );
}

function MoreDetails({ context, children, label = "More details" }: { context: string; children: ReactNode; label?: string }) {
  return (
    <details className={styles.details}>
      <summary><span>{label}<span className={styles.srOnly}> about {context}</span></span><ChevronDown size={15} aria-hidden="true" /></summary>
      <div className={styles.detailsBody}>{children}</div>
    </details>
  );
}

function Contributions({ items }: { items: readonly string[] }) {
  return <ul className={styles.contributions}>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function JourneyEntry({
  id, headingId = `${id}-heading`, title, organization, date, kind, meta,
  logo, leadership, summary, contributions, recognition, action, children, headingLevel = 3,
}: {
  id: string;
  headingId?: string;
  title: string;
  organization: string;
  date?: ReactNode;
  kind: string;
  meta?: string;
  logo?: JourneyLogo;
  leadership?: boolean;
  summary: string;
  contributions?: readonly string[];
  recognition?: ReactNode;
  action?: JourneyAction;
  children?: ReactNode;
  headingLevel?: 3 | 4;
}) {
  const Heading = headingLevel === 4 ? "h4" : "h3";
  return (
    <li className={`${styles.timelineItem}${date ? "" : ` ${styles.undated}`}`}>
      {date && <p className={styles.date}>{date}</p>}
      <span className={styles.rail} aria-hidden="true" />
      <article id={id} aria-labelledby={headingId} className={styles.entry}>
        <header className={styles.entryHeader}>
          <Logo logo={logo} leadership={leadership} />
          <div className={styles.entryIdentity}>
            <Heading id={headingId}>{title}</Heading>
            <p className={styles.organization}>{organization}</p>
          </div>
        </header>
        <div className={styles.entryMeta}><span className={styles.kind}>{kind}</span>{meta && <span>{meta}</span>}</div>
        <p className={styles.summary}>{summary}</p>
        {contributions && <Contributions items={contributions} />}
        {recognition && <div className={styles.recognitionRow}>{recognition}</div>}
        {children}
        {action && <div className={styles.entryActions}><Link href={action.href}>{action.label}<ArrowUpRight size={14} aria-hidden="true" /></Link></div>}
      </article>
    </li>
  );
}

function SectionHeading({ number, title, description, headingId }: { number: string; title: string; description: string; headingId: string }) {
  return (
    <header className={styles.sectionHeading}>
      <span className={styles.sectionNumber} aria-hidden="true">{number}</span>
      <div><h2 id={headingId}>{title}</h2><p>{description}</p></div>
    </header>
  );
}

export default function ProfessionalJourney() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 min-h-screen overflow-y-auto bg-background selection:bg-foreground selection:text-background pb-24">
      <div className="page-shell">
        <PageHeader title="Professional Journey" description="My roles, contributions, and progression across internships, independent development, education, and leadership." eyebrow="Experience & education" />

        <div className={styles.journey}>
          <nav className={styles.sectionNav} aria-label="Professional Journey sections">
            {[
              { href: "#experience", label: "Experience" },
              { href: "#projects", label: "Projects" },
              { href: "#education-leadership", label: "Education" },
              { href: "#continuous-learning", label: "Learning" },
            ].map((link, index) => <a key={link.href} href={link.href}><span aria-hidden="true">0{index + 1}</span>{link.label}<ArrowUpRight size={13} aria-hidden="true" /></a>)}
          </nav>

          <div id="journey-timeline" className={styles.sections}>
            <section id="experience" aria-labelledby="internships-heading" className={styles.section}>
              <SectionHeading number="01" title="Experience" headingId="internships-heading" description="Student internships and startup involvement." />
              <ol className={styles.timeline} aria-label="Internships and startup roles">
                <JourneyEntry
                  id="kwadra-internship" title="Student Intern" organization="KWADRA Technology Business Incubator"
                  date={<><time dateTime="2026-01">Jan</time>–<time dateTime="2026-05">May 2026</time></>}
                  kind="Internship" meta="ISAT U · 600 hours" logo={{ src: "/ecosystem/logos/kwadra.webp", darkSrc: "/ecosystem/logos/kwadra-dark.svg" }}
                  summary="Supported innovation programs, project documentation, and startup activities at ISAT U’s incubator."
                  contributions={[kwadraResponsibilities[0]]}
                  recognition={<Recognition title="Outstanding Intern Award" />}
                >
                  <MoreDetails context="the KWADRA internship"><Contributions items={[kwadraResponsibilities[1]]} /></MoreDetails>
                </JourneyEntry>
                <JourneyEntry
                  id="wadhwani-internship" title="Student Intern" organization="Wadhwani Foundation Philippines"
                  date={<time dateTime="2026">2026</time>} kind="Internship" meta="Program support" logo={{ src: "/ecosystem/logos/wadhwani.webp", darkSrc: "/ecosystem/logos/wadhwani.webp", whiteInDark: true }}
                  summary="Supported faculty participation and participant engagement across partner universities."
                  contributions={[wadhwaniResponsibilities[0]]}
                  action={{ href: `/credentials#${getCredentialAnchor("Wadhwani Foundation Philippines")}`, label: "Internship record" }}
                >
                  <MoreDetails context="the Wadhwani internship"><Contributions items={[wadhwaniResponsibilities[1]]} /></MoreDetails>
                </JourneyEntry>
                <JourneyEntry
                  id="tumanow-startup" headingId="tumanow-heading" title="Co-Founder & Business Analyst" organization="TumaNow"
                  date={<time dateTime="2025">2025</time>} kind="Startup" meta="Chief Financial Officer" logo={{ src: "/ecosystem/logos/tumanow.svg", darkSrc: "/ecosystem/logos/tumanow-dark.svg" }}
                  summary="Contributed business analysis and financial planning to a startup focused on infrastructure project monitoring."
                  contributions={tumanowResponsibilities}
                  recognition={<Recognition title="Iloilo Province Startup Hackathon Champion">Champion · 2025 Iloilo Province Startup Hackathon</Recognition>}
                  action={{ href: "/case-files/tumanow", label: "View case study" }}
                >
                  <MoreDetails context="TumaNow">
                    <p>Incubated under ISAT U–KWADRA Technology Business Incubator. Potential system adoption remains under evaluation by the PPDO, Iloilo Province.</p>
                  </MoreDetails>
                </JourneyEntry>
              </ol>
            </section>

            <section id="projects" aria-labelledby="projects-heading" className={styles.section}>
              <SectionHeading number="02" title="Projects & applied work" headingId="projects-heading" description="Independent development and an academic capstone." />
              <ol className={styles.timeline} aria-label="Independent projects and capstone work">
                <JourneyEntry
                  id="careertrack-development" headingId="careertrack-heading" title="Solo Developer / Software Engineer" organization="CareerTrack"
                  date={<time dateTime="2026">2026</time>} kind="Independent project" meta="Deployed release candidate" logo={{ src: "/ecosystem/logos/careertrack.webp" }}
                  summary="Built a personal career workspace connecting applications, hiring-stage history, private documents, offers, and employment records."
                  contributions={["Designed and implemented the frontend, API, data model, and authentication.", "Connected private document storage with application and employment records."]}
                  action={{ href: "/case-files/careertrack", label: "View case study" }}
                >
                  <MoreDetails context="CareerTrack development"><p>Implemented the Next.js frontend, Express API, PostgreSQL data model, server-side sessions, and private document storage. Deployed the frontend on Vercel and the API on Railway; v1.0 remains pending.</p></MoreDetails>
                </JourneyEntry>
                <JourneyEntry
                  id="project-experience" headingId="project-experience-heading" title="Solo Developer" organization="PricePulse PH"
                  kind="Independent project" logo={{ src: "/ecosystem/logos/pricepulse.svg", darkSrc: "/ecosystem/logos/pricepulse-dark.svg" }}
                  summary="Built a full-stack dashboard for exploring historical Philippine commodity prices and comparing locations."
                  contributions={["Cleaned and imported historical price records and implemented analytics.", "Built the responsive interface and household basket cost comparisons."]}
                  action={{ href: "/case-files/pricepulse", label: "View case study" }}
                >
                  <MoreDetails context="PricePulse development"><p>Connected historical data preparation with a Next.js application, PostgreSQL, and Prisma. Implemented analytics and a responsive interface, and deployed the application on Vercel.</p></MoreDetails>
                </JourneyEntry>
                <JourneyEntry
                  id="blms-capstone" headingId="blms-heading" title="Project Manager & Systems Analyst" organization="Backyard Livestock Monitoring System"
                  date={<time dateTime="2026">2026</time>} kind="Academic capstone" meta="Prototype · Final defense April 2026"
                  summary="Led the design of a capstone prototype for the Municipality of San Miguel – Department of Agriculture, focused on livestock monitoring, health reporting, and agricultural data management."
                  contributions={blmsResponsibilities}
                  recognition={<Recognition title="Best Capstone Project Award" />}
                  action={{ href: "/case-files/blms", label: "View case study" }}
                />
              </ol>
            </section>

            <section id="education-leadership" aria-labelledby="education-section-heading" className={styles.section}>
              <SectionHeading number="03" title="Education & leadership" headingId="education-section-heading" description="Academic foundations and responsibility within my student community." />
              <ol className={styles.timeline} aria-label="Education">
                <JourneyEntry
                  id="education" headingId="education-heading" title="Bachelor of Science in Information Systems" organization="Iloilo Science and Technology University"
                  date={<><time dateTime="2022">2022</time>–<time dateTime="2026">2026</time></>} kind="Education" meta="Iloilo City Campus" logo={{ src: "/ecosystem/logos/isatu.webp" }}
                  summary="Built a foundation in software development, systems analysis, and the organizational processes that technology supports."
                  recognition={<Recognition title="Magna Cum Laude" />}
                >
                  <MoreDetails context="my Information Systems education">
                    <p>Started the Information Systems program in 2022. By 2023, coursework connected software development with organizational processes and the needs a system should address.</p>
                    <ul className={styles.skillList} aria-label="Academic foundations">{foundationSkills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                  </MoreDetails>
                </JourneyEntry>
              </ol>
              <section id="student-leadership" aria-labelledby="leadership-heading" className={styles.leadershipSection}>
                <h3 id="leadership-heading" className={styles.subheading}>Student leadership</h3>
                <ol className={styles.timeline} aria-label="Class representation and student organization roles">
                  <JourneyEntry
                    id="class-representation" title="Class Mayor & Vice Mayor" organization="BS Information Systems" headingLevel={4}
                    date={<>AY <time dateTime="2024">2024</time>–<time dateTime="2026">2026</time></>} kind="Class representation" leadership
                    summary="Represented student concerns, coordinated faculty communication and announcements, and supported class activities."
                  >
                    <MoreDetails context="class representation"><dl className={styles.roleDates}><div><dt>Class Mayor (elected)</dt><dd>AY 2024–2025</dd></div><div><dt>Class Vice Mayor</dt><dd>AY 2025–2026</dd></div></dl></MoreDetails>
                  </JourneyEntry>
                  <JourneyEntry
                    id="analytica-leadership" title="Auditor" organization="ISAT U ANALYTICA" headingLevel={4}
                    date={<>AY <time dateTime="2025">2025</time>–<time dateTime="2026">2026</time></>} kind="Student organization" logo={{ src: "/ecosystem/logos/analytica.webp" }}
                    summary="Maintained organizational records and documentation, assisted activity planning, and supported accountable operations for the Information Systems student organization."
                  />
                </ol>
                <Link href="/documents" className={styles.sectionLink}>View leadership records<ArrowUpRight size={14} aria-hidden="true" /></Link>
              </section>
            </section>

            <section id="continuous-learning" aria-labelledby="learning-heading" className={styles.section}>
              <SectionHeading number="04" title="Learning & milestones" headingId="learning-heading" description="Selected competitions, programs, and continued technical learning." />
              <div className={styles.learningGrid}>
                <article className={styles.learningCard} aria-labelledby="ai-fest-heading">
                  <p className={styles.learningEyebrow}><Award size={15} aria-hidden="true" /><time dateTime="2026">2026</time> · Competition</p>
                  <h3 id="ai-fest-heading">AI Fest · AI Hackathon</h3>
                  <p className={styles.learningResult}>Top 10 <span>of 23 entries</span></p>
                  <p>Ranked in the Top 10 in the Open Category.</p>
                </article>
                <article className={styles.learningCard} aria-labelledby="programs-heading">
                  <p className={styles.learningEyebrow}><BookOpen size={15} aria-hidden="true" />Selected programs</p>
                  <h3 id="programs-heading">Learning beyond the classroom</h3>
                  <ul className={styles.selectedPrograms}>
                    {learningExperiences.filter((item) => typeof item !== "string").map((item) => typeof item !== "string" && <li key={item.title}><h4>{item.title}</h4><p>{item.desc}</p></li>)}
                  </ul>
                </article>
              </div>
              <MoreDetails context="continuing professional development" label="Other programs & technical training">
                <ul className={styles.contributions}>{learningExperiences.filter((item) => typeof item === "string").map((item) => <li key={item}>{item}</li>)}</ul>
              </MoreDetails>
              <Link href="/credentials" className={styles.sectionLink}>Explore supporting credentials & records<ArrowUpRight size={14} aria-hidden="true" /></Link>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

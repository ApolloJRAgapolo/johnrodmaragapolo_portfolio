import { actionStyles } from "@/lib/action-styles";
import { getCredentialAnchor } from "@/lib/credential-anchors";
import PageHeader from "@/components/shared/PageHeader";
import Link from "next/link";
import type { ReactNode } from "react";
import { Award } from "lucide-react";
import {
  blmsResponsibilities,
  foundationSkills,
  kwadraResponsibilities,
  learningExperiences,
  tumanowResponsibilities,
  wadhwaniResponsibilities,
} from "@/lib/data/journey";

const focusStyle = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-offset-4";
const linkStyle = actionStyles();

function Milestone({ id, headingId, date, title, children }: {
  id?: string;
  headingId: string;
  date: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <li className="group/milestone grid grid-cols-[1rem_minmax(0,1fr)] gap-x-4 sm:grid-cols-[6.5rem_1rem_minmax(0,1fr)] sm:gap-x-5">
      <p className="col-start-2 row-start-1 mb-2 text-xs font-mono leading-relaxed text-muted-foreground sm:col-start-1 sm:mb-0 sm:pt-1">{date}</p>
      <div aria-hidden="true" className="relative col-start-1 row-span-2 row-start-1 flex justify-center sm:col-start-2 sm:row-span-1">
        <span className="absolute -bottom-[11px] left-1/2 top-[11px] w-px -translate-x-1/2 bg-border group-last/milestone:hidden" />
        <span className="relative mt-1.5 h-2.5 w-2.5 rounded-full border border-muted-foreground bg-background group-first/milestone:border-foreground group-first/milestone:bg-foreground" />
      </div>
      <section id={id} aria-labelledby={headingId} className="col-start-2 row-start-2 min-w-0 scroll-mt-24 pb-10 group-last/milestone:pb-0 sm:col-start-3 sm:row-start-1 sm:pb-12">
        <h2 id={headingId} className="text-xl font-semibold tracking-tight text-foreground">{title}</h2>
        {children}
      </section>
    </li>
  );
}

function Recognition({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 flex items-start gap-2 text-sm font-medium leading-relaxed text-foreground">
      <Award aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
      <span>{children}</span>
    </p>
  );
}

function MilestoneDetails({ label, children }: { label: string; children: ReactNode }) {
  return (
    <details className="mt-3 text-sm">
      <summary className={`min-h-11 cursor-pointer py-3 font-medium text-muted-foreground transition-colors hover:text-foreground ${focusStyle}`}>{label}</summary>
      <div className="pb-2 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </details>
  );
}

function Contributions({ items }: { items: readonly string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-muted-foreground">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

export default function ProfessionalJourney() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 min-h-screen overflow-y-auto bg-background selection:bg-foreground selection:text-background pb-24">
      <div className="page-shell">
        <PageHeader title={"Professional Journey"} description={"My experience in web development, systems analysis, and program support, alongside the education and leadership roles that shaped my work."} eyebrow={"Experience & education"} />

        <ol id="journey-timeline" aria-label="Experience and milestones, recent experience first" className="scroll-mt-24">
          <Milestone id="careertrack-development" date="2026" title="CareerTrack" headingId="careertrack-heading">
            <p className="mt-2 text-xs text-muted-foreground">Solo Developer / Software Engineer · Deployed Release Candidate</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Built a personal career workspace connecting applications, hiring-stage history, private documents, offers, and employment records.</p>
            <MilestoneDetails label="View development details">
              <p>Implemented the Next.js frontend, Express API, PostgreSQL data model, server-side sessions, and private document storage. Deployed the frontend on Vercel and the API on Railway; v1.0 remains pending.</p>
            </MilestoneDetails>
            <Link href="/case-files/careertrack" className={`mt-2 ${linkStyle}`}>View case study</Link>
          </Milestone>

          <Milestone date="Jan–May 2026" title="Internship experience" headingId="internships-heading">
            <div className="mt-5 space-y-6">
              <article id="kwadra-internship" className="scroll-mt-24">
                <h3 className="text-sm font-medium">ISAT U – KWADRA Technology Business Incubator</h3>
                <p className="mt-1 text-xs text-muted-foreground">Student Intern · 600 hours</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Supported innovation programs, project documentation, and startup activities.</p>
                <Recognition>Outstanding Intern Award</Recognition>
                <MilestoneDetails label="View KWADRA responsibilities"><Contributions items={kwadraResponsibilities} /></MilestoneDetails>
              </article>
              <article id="wadhwani-internship" className="scroll-mt-24">
                <h3 className="text-sm font-medium">Wadhwani Foundation Philippines</h3>
                <p className="mt-1 text-xs text-muted-foreground">Student Intern</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Coordinated faculty participation across partner universities, monitored progress, and supported participant engagement.</p>
                <MilestoneDetails label="View Wadhwani responsibilities"><Contributions items={wadhwaniResponsibilities} /></MilestoneDetails>
              </article>
            </div>
            <Link href={`/credentials#${getCredentialAnchor("Outstanding Intern Award")}`} className={`mt-2 ${linkStyle}`}>View internship recognition</Link>
          </Milestone>

          <Milestone id="project-experience" date="Independent development" title="PricePulse PH" headingId="project-experience-heading">
            <p className="mt-2 text-xs text-muted-foreground">Solo Developer</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Built a full-stack dashboard for exploring Philippine commodity prices, from historical data imports to analytics and a responsive interface.</p>
            <MilestoneDetails label="View development details">
              <p>Cleaned and imported historical records, implemented analytics and the responsive interface, and deployed the Next.js application on Vercel with PostgreSQL and Prisma.</p>
            </MilestoneDetails>
            <Link href="/case-files/pricepulse" className={`mt-2 ${linkStyle}`}>View case study</Link>
          </Milestone>

          <Milestone id="blms-capstone" date="2026" title="BLMS capstone" headingId="blms-heading">
            <p className="mt-2 text-xs text-muted-foreground">Project Manager &amp; System Analyst</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Led the design of the Backyard Livestock Monitoring System, a capstone prototype for the Municipality of San Miguel – Department of Agriculture.</p>
            <Recognition>Best Capstone Project Award</Recognition>
            <p className="mt-2 text-xs text-muted-foreground">Successful final defense · April 2026</p>
            <MilestoneDetails label="View capstone contributions">
              <p className="mb-3">Focused on livestock monitoring, health reporting, and agricultural data management.</p>
              <Contributions items={blmsResponsibilities} />
            </MilestoneDetails>
            <div className="mt-2 flex flex-wrap gap-2"><Link href="/case-files/blms" className={linkStyle}>View case study</Link><Link href={`/credentials#${getCredentialAnchor("Best Capstone Project Award")}`} className={actionStyles({ variant: "quiet" })}>Award record</Link></div>
          </Milestone>

          <Milestone id="tumanow-startup" date="2025" title="TumaNow startup experience" headingId="tumanow-heading">
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">Co-Founder · Business Analyst · Chief Financial Officer</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Contributed stakeholder interviews, business requirements, system workflows, and financial planning to the startup.</p>
            <Recognition>Champion — 2025 Iloilo Province Startup Hackathon</Recognition>
            <MilestoneDetails label="View startup contributions and context">
              <Contributions items={tumanowResponsibilities} />
              <p className="mt-4">Incubated under ISAT U–KWADRA Technology Business Incubator (KWADRA TBI). Potential system adoption remains under evaluation by the PPDO, Iloilo Province.</p>
            </MilestoneDetails>
            <Link href="/case-files/tumanow" className={`mt-2 ${linkStyle}`}>View case study</Link>
          </Milestone>

          <Milestone id="student-leadership" date="AY 2024–2026" title="Student leadership" headingId="leadership-heading">
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Represented student concerns, coordinated faculty communication, and supported organizational records and accountability.</p>
            <MilestoneDetails label="View leadership roles">
              <dl className="space-y-5">
                <div>
                  <dt className="font-medium text-foreground">Class representation · BS Information Systems</dt>
                  <dd className="mt-2">Class Mayor (elected) · AY 2024–2025</dd>
                  <dd className="mt-1">Class Vice Mayor · AY 2025–2026</dd>
                  <dd className="mt-3">Represented student concerns, coordinated faculty communication and announcements, and supported class activities.</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Auditor · ISAT U ANALYTICA</dt>
                  <dd className="mt-1">AY 2025–2026</dd>
                  <dd className="mt-3">Maintained organizational records and documentation, assisted activity planning, and supported accountable operations for the Information Systems student organization.</dd>
                </div>
              </dl>
            </MilestoneDetails>
            <Link href="/documents" className={`mt-2 ${linkStyle}`}>View leadership records</Link>
          </Milestone>

          <Milestone id="education" date="2022–2026" title="Information Systems foundations" headingId="education-heading">
            <p className="mt-3 text-sm font-medium">Bachelor of Science in Information Systems</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Iloilo Science and Technology University – Iloilo City Campus</p>
            <Recognition>Magna Cum Laude</Recognition>
            <MilestoneDetails label="Early academic foundations · 2022–2023">
              <div className="space-y-3">
                <p>Started the Information Systems program in 2022. By 2023, coursework connected software development with organizational processes and the needs a system should address.</p>
                <p>{foundationSkills.join(", ")}.</p>
              </div>
            </MilestoneDetails>
            <Link href={`/credentials#${getCredentialAnchor("Magna Cum Laude")}`} className={`mt-2 ${linkStyle}`}>View academic recognition</Link>
          </Milestone>
        </ol>

        <section id="continuous-learning" aria-labelledby="learning-heading" className="mt-12 scroll-mt-24 border-t border-border/60 pt-8 sm:mt-16">
          <h2 id="learning-heading" className="text-xl font-semibold tracking-tight">Additional milestones &amp; learning</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground"><span className="font-medium text-foreground">2026 AI Fest — AI Hackathon, Open Category:</span> Ranked among the Top 10 of 23 entries.</p>
          <MilestoneDetails label="Conferences, programs & technical training">
            <ul className="list-disc space-y-3 pl-5">
              {learningExperiences.map((item) => (
                <li key={typeof item === "string" ? item : item.title}>
                  {typeof item === "string" ? item : <><span className="font-medium text-foreground">{item.title}</span><p className="mt-1">{item.desc}</p></>}
                </li>
              ))}
            </ul>
          </MilestoneDetails>
          <Link href="/credentials" className={`mt-2 ${linkStyle}`}>View supporting credentials and records</Link>
        </section>
      </div>
    </main>
  );
}

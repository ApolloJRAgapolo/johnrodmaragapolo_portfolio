import CaseStudyHeader from "@/components/features/case-files/CaseStudyHeader";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Database,
  FileText,
  Layers,
  Monitor,
  Server,
  Workflow,
} from "lucide-react";
import CaseStudyContext from "@/components/features/case-files/CaseStudyContext";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import ProjectScreenGallery from "@/components/features/case-files/ProjectScreenGallery";
import { careertrackMockups } from "@/lib/data/careertrack-mockups";

const workflow = [
  "Opportunity",
  "Application",
  "Hiring journey",
  "Offer",
  "Employment",
  "Career history",
];

const decisions = [
  {
    title: "One browser origin across separate hosts",
    summary: "Vercel forwards /api requests to the Railway API.",
    detail:
      "The frontend and API remain separate applications in a pnpm monorepo. A same-origin rewrite handles the generated hosting domains while preserving host-only, Secure, HttpOnly, SameSite=Lax session cookies and exact-origin CSRF checks. Browser traffic stays on the CareerTrack domain.",
  },
  {
    title: "Revocable sessions and explicit identity linking",
    summary: "The server controls sessions; users choose when to connect Google.",
    detail:
      "The browser receives an opaque session token in an HttpOnly cookie; PostgreSQL stores its SHA-256 hash. Logout revokes the session. Google sign-in uses OIDC with state, nonce, and PKCE. A matching email does not silently merge accounts: an authenticated user explicitly connects Google. The initial API deployment uses one replica because OAuth replay state and some rate limits are process-local.",
  },
  {
    title: "Private files with an API authorization boundary",
    summary: "Document metadata lives in PostgreSQL; file bytes stay in private R2 storage.",
    detail:
      "The API verifies authentication and ownership before returning a document. A storage interface supports local development and S3-compatible production storage. Users can upload, replace, and link documents; PDFs support preview, while DOC/DOCX use authorized download. Database updates and object cleanup are separate operations, so orphan-file reconciliation remains an operational follow-up.",
  },
  {
    title: "Recorded workflow history and honest insights",
    summary: "Stage changes preserve history, and insights use events that actually exist.",
    detail:
      "A transaction updates the current application status and adds a history entry, with conflict checks for stale changes. Career Intelligence counts explicitly recorded milestones without inferring skipped stages. Response timing describes recorded status movement, and small source groups show limited-data labels. Offers and accepted applications can be managed alongside linked employment records without inventing future career events.",
  },
];

const sectionHeading =
  "mb-6 flex items-center gap-3 text-lg font-semibold tracking-tight text-foreground";

export default function CareerTrackCaseFile() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-h-screen flex-1 overflow-y-auto bg-background pb-32 selection:bg-foreground selection:text-background"
    >
      <div className="page-shell case-study-shell">
        <CaseStudyHeader id="careertrack" />

        <CaseStudyContext
          id="careertrack"
          technologies={["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Prisma", "Zod"]}
          sections={[
            { id: "problem", label: "Problem & solution" },
            { id: "screens", label: "Screens" },
            { id: "workflow", label: "Career workflow" },
            { id: "architecture", label: "Architecture" },
            { id: "decisions", label: "Engineering decisions" },
            { id: "release", label: "Testing & release" },
          ]}
        />

        <div className="space-y-12 sm:space-y-14">
          <RevealOnScroll>
            <section aria-labelledby="problem">
              <h2 id="problem" className={`scroll-mt-24 ${sectionHeading}`}>
                <Layers className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                Problem &amp; Solution
              </h2>
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-sm font-medium text-foreground">Scattered career information</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Opportunities, recruiter conversations, interview notes, and documents often end up across job boards, emails, spreadsheets, and bookmarks. Keeping an application status alone leaves much of that context disconnected.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-sm font-medium text-foreground">One structured workspace</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    I built the frontend, API, relational model, authentication, and private document handling. An application dossier connects hiring history, people, interviews, offers, notes, and documents; a career brief carries the journey into employment history.
                  </p>
                </div>
              </div>
            </section>
          </RevealOnScroll>

          <RevealOnScroll>
            <section aria-labelledby="screens">
              <h2 id="screens" className={`scroll-mt-24 ${sectionHeading}`}>
                <Monitor className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                Application Screens
              </h2>
              <ProjectScreenGallery projectName="CareerTrack" screens={careertrackMockups} />
            </section>
          </RevealOnScroll>

          <RevealOnScroll>
            <section aria-labelledby="workflow">
              <h2 id="workflow" className={`scroll-mt-24 ${sectionHeading}`}>
                <Workflow className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                The Career Workflow
              </h2>
              <ol className="grid gap-x-6 gap-y-4 sm:grid-cols-2 xl:grid-cols-3" aria-label="Conceptual career lifecycle">
                {workflow.map((step, index) => (
                  <li key={step} className="flex min-w-0 items-center gap-3 border-b border-border/40 pb-4 text-sm text-foreground">
                    <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                    <span>{step}</span>
                    {index < workflow.length - 1 && <ArrowRight className="ml-auto h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />}
                  </li>
                ))}
              </ol>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                This is the lifecycle the workspace supports. Users record actual stage changes, offers, and employment; applications can skip stages, be rejected, or be withdrawn.
              </p>
            </section>
          </RevealOnScroll>

          <RevealOnScroll>
            <section aria-labelledby="architecture">
              <h2 id="architecture" className={`scroll-mt-24 ${sectionHeading}`}>
                <Server className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                Production Architecture
              </h2>
              <figure className="border border-border/40 bg-card p-5 sm:p-8">
                <ol aria-label="Browser to API request flow" className="mx-auto max-w-sm">
                  <li className="text-center">
                    <p className="border border-border/40 bg-background px-4 py-3 text-sm text-foreground">User&apos;s browser</p>
                    <div className="flex flex-col items-center py-2 text-[10px] font-mono text-muted-foreground" aria-hidden="true">
                      HTTPS <ArrowDown className="mt-1 h-4 w-4" />
                    </div>
                  </li>
                  <li className="text-center">
                    <div className="border border-border/40 bg-background px-4 py-3">
                      <p className="text-sm font-medium text-foreground">Vercel</p>
                      <p className="mt-1 text-xs text-muted-foreground">Next.js frontend</p>
                    </div>
                    <div className="flex flex-col items-center py-2 text-[10px] font-mono text-muted-foreground">
                      Same-origin /api/* rewrite
                      <ArrowDown className="mt-1 h-4 w-4" aria-hidden="true" />
                    </div>
                  </li>
                  <li className="border border-border/40 bg-background px-4 py-3 text-center">
                    <p className="text-sm font-medium text-foreground">Railway</p>
                    <p className="mt-1 text-xs text-muted-foreground">Express API / Node.js</p>
                  </li>
                </ol>

                <div className="mx-auto mb-3 flex max-w-sm flex-col items-center pt-3" aria-hidden="true">
                  <ArrowDown className="h-4 w-4 text-muted-foreground" />
                  <span className="mt-1 text-[10px] font-mono text-muted-foreground">API accesses database &amp; files</span>
                </div>
                <ul aria-label="Services accessed by the Express API" className="grid gap-3 sm:grid-cols-2">
                  <li className="flex min-w-0 items-center gap-3 border border-border/40 bg-background p-4">
                    <Database className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Neon PostgreSQL</p>
                      <p className="mt-1 text-xs text-muted-foreground">Relational data / Prisma ORM</p>
                    </div>
                  </li>
                  <li className="flex min-w-0 items-center gap-3 border border-border/40 bg-background p-4">
                    <FileText className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Cloudflare R2</p>
                      <p className="mt-1 text-xs text-muted-foreground">Private document storage</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-5 flex flex-wrap items-center justify-center gap-3 border-t border-border/40 pt-5 text-xs text-foreground">
                  <span>Google OAuth / OIDC</span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                  <span>Identity verification by the Express API</span>
                </div>
                <figcaption className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  The browser calls CareerTrack&apos;s own origin. The API checks sessions and resource ownership before accessing PostgreSQL or private files, and verifies Google identity during sign-in and account linking.
                </figcaption>
              </figure>
              <dl className="mt-6 grid gap-x-8 gap-y-4 text-sm leading-relaxed sm:grid-cols-2">
                <div>
                  <dt className="font-medium text-foreground">Frontend</dt>
                  <dd className="mt-1 text-muted-foreground">Next.js App Router, React, TypeScript, Tailwind CSS</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Backend &amp; data</dt>
                  <dd className="mt-1 text-muted-foreground">Node.js, Express, TypeScript, Zod, PostgreSQL, Prisma</dd>
                </div>
              </dl>
            </section>
          </RevealOnScroll>

          <section aria-labelledby="decisions">
            <h2 id="decisions" className={`scroll-mt-24 ${sectionHeading}`}>
              <Layers className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              Engineering Decisions
            </h2>
            <div className="divide-y divide-border/40 border-y border-border/40">
              {decisions.map((decision) => (
                <details key={decision.title} className="group">
                  <summary className="flex min-h-11 cursor-pointer list-none items-start justify-between gap-5 py-5 [&::-webkit-details-marker]:hidden">
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-foreground">{decision.title}</span>
                      <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">{decision.summary}</span>
                    </span>
                    <ChevronDown className="mt-1 h-4 w-4 shrink-0 text-muted-foreground group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <p className="pb-6 pr-6 text-sm leading-relaxed text-muted-foreground">
                    {decision.detail}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <RevealOnScroll>
            <section aria-labelledby="release">
              <h2 id="release" className={`scroll-mt-24 ${sectionHeading}`}>
                <CheckCircle2 className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                Testing &amp; Release Readiness
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The accepted release-candidate verification passed 60 focused API tests and 26 frontend tests, alongside type checking, linting, production builds, and verification of six Prisma migrations. Production acceptance covered sessions, Google sign-in and linking, persistent records, and private document handling.
              </p>
              <div className="mt-6 border-l-2 border-foreground/30 pl-5">
                <h3 className="mb-3 text-sm font-medium text-foreground">Deployed Release Candidate / beta</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  v1.0 remains pending. Email ownership verification and explicit new-account career defaults are pre-v1 improvements before broader release. A new account currently defaults to &ldquo;Actively Job Hunting&rdquo;; the planned correction lets users set their own career direction.
                </p>
              </div>
            </section>
          </RevealOnScroll>

          <RevealOnScroll>
            <section aria-labelledby="learning" className="border-t border-border/40 pt-10">
              <h2 id="learning" className={sectionHeading}>
                <BookOpen className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                What I Learned
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Shipping CareerTrack connected interface design with the responsibilities behind it: authentication boundaries, record ownership, workflow integrity, migrations, private storage, and deployment across providers. Testing real production behavior and preparing an honest release taught me as much as building the screens.
              </p>
            </section>
          </RevealOnScroll>
        </div>
      </div>
    </main>
  );
}

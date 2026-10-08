import CaseStudyContext from "@/components/features/case-files/CaseStudyContext";
import CaseStudyHeader from "@/components/features/case-files/CaseStudyHeader";
import { pageMetadata } from "@/lib/metadata";
import {
  ArrowDown, ArrowRight, BookOpen, ChartNoAxesCombined,
  Database, FileSpreadsheet, Layers, LayoutDashboard, Lightbulb,
  ListFilter, MapPin, Search, Server, ShieldCheck,
  Sparkles, TableProperties, User, Workflow, Wrench,
} from "lucide-react";
import GlowingCard from "@/components/shared/GlowingCard";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { caseFiles } from "@/lib/data/case-files";

const project = caseFiles.find((file) => file.id === "pricepulse")!;
const technologies = ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "Prisma", "Vercel", "Git", "GitHub"];

export const metadata = pageMetadata("PricePulse PH", project.summary, "/case-files/pricepulse");

const flows = [
  {
    title: "Application architecture",
    steps: [
      { label: "User", detail: "Explore prices", icon: User },
      { label: "Next.js", detail: "Application on Vercel", icon: LayoutDashboard },
      { label: "Route Handlers", detail: "Next.js / Node.js", icon: Server },
      { label: "Prisma ORM", detail: "Structured queries", icon: Layers },
      { label: "PostgreSQL", detail: "Prisma Postgres", icon: Database },
    ],
  },
  {
    title: "Data preparation pipeline",
    steps: [
      { label: "Raw PSA Data", detail: "Source records", icon: FileSpreadsheet },
      { label: "Cleaning", detail: "Prepare records", icon: Sparkles },
      { label: "Normalization", detail: "Consistent structure", icon: Layers },
      { label: "Validation", detail: "Check prepared data", icon: ShieldCheck },
      { label: "PostgreSQL Import", detail: "Store prepared data", icon: Database },
      { label: "Application Queries", detail: "Read for analytics", icon: Search },
    ],
  },
];

const decisions = [
  { title: "Searchable commodity selection", icon: Search, text: "With more than 160 commodities, a long dropdown made selection cumbersome. A searchable selector lets users find a commodity directly and reduces navigation friction." },
  { title: "Structured database storage", icon: Database, text: "Cleaned records live in PostgreSQL instead of being parsed from the source dataset on every dashboard load. This separates data preparation from application usage and supports structured queries through Prisma. Available dates and coverage counts now come from database records, keeping displayed metadata aligned with stored data without manually updating coverage text." },
  { title: "Contextual analytics", icon: ChartNoAxesCombined, text: "Server-side calculations connect the latest available price to the previous observation, peso and percentage changes, the average across available locations, location ranking, and its position within the historical minimum–maximum range." },
  { title: "Evidence behind visualizations", icon: TableProperties, text: "The experience moves from summary to visualization to exact observations. Charts make patterns easier to see, while a detailed table exposes the records behind them for closer inspection. CSV export uses the observations supporting the main chart so users can continue their analysis outside PricePulse." },
];

const challenges = [
  { title: "Preparing raw commodity data", text: "Raw records needed cleaning, normalization, validation, and structured import before they could reliably support analytics." },
  { title: "Navigating a large commodity list", text: "More than 160 options made a basic dropdown inconvenient. The searchable selector addressed that friction without complicating the filtering workflow." },
  { title: "Creating meaningful analytics", text: "Displaying prices was straightforward; choosing calculations that help users interpret them required additional backend logic for price movement, location comparisons, and historical context." },
  { title: "Generating Prisma Client in production", text: "The application worked locally but initially failed during the Vercel build because Prisma Client had not been generated. The build sequence was corrected to generate the client before the Next.js production build.", command: "prisma generate && next build" },
  { title: "Configuring the production database", text: "Database environment variables were configured in Vercel so the deployed server-side application could connect securely to PostgreSQL. Production application traffic uses the pooled Prisma Postgres connection." },
];

export default function PricePulseCaseFile() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen flex-1 overflow-y-auto bg-background pb-32 selection:bg-foreground selection:text-background">
      <div className="page-shell case-study-shell">
        <CaseStudyHeader id="pricepulse" />


        <CaseStudyContext id="pricepulse" technologies={technologies} sections={[{ id: "problem", label: "Problem" }, { id: "solution", label: "Solution" }, { id: "architecture", label: "Architecture" }, { id: "decisions", label: "Engineering decisions" }, { id: "experience", label: "Dashboard" }, { id: "challenges", label: "Challenges" }, { id: "learning", label: "Learning" }]} />

        <div className="space-y-12 sm:space-y-14">
          <RevealOnScroll>
            <section aria-labelledby="problem">
              <h2 id="problem" className="mb-6 flex items-center gap-3 text-lg font-semibold tracking-tight text-foreground"><Search className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />01 / The Problem</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">Raw commodity datasets hold useful information, but ordinary users must work through records to answer simple questions: What is the latest available price? Did it increase or decrease? How has it changed over time, how does one city compare with others, and is the current value high or low relative to past observations?</p>
            </section>
          </RevealOnScroll>

          <RevealOnScroll>
            <section aria-labelledby="solution">
              <h2 id="solution" className="mb-6 flex items-center gap-3 text-lg font-semibold tracking-tight text-foreground"><Lightbulb className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />02 / The Solution</h2>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">PricePulse turns the dataset into an interactive dashboard built around context. Searchable commodity and location selection connect users to a focused view of price movement and market comparisons.</p>
              <ul className="grid grid-cols-1 gap-4 border border-border/40 bg-card p-6 text-sm leading-relaxed text-foreground sm:grid-cols-2 sm:p-8">
                <li>Latest available and previous prices, with peso and percentage movement.</li>
                <li>Historical price trends, minimum and maximum values, and position within that range.</li>
                <li>Location comparisons within a price/reporting context, market-average comparison, and location ranking.</li>
                <li>Detailed price observations that let users inspect the underlying records.</li>
              </ul>
              <div className="mt-8 space-y-6">
                <h3 className="text-sm font-medium text-foreground">Latest Improvements</h3>
                <dl className="space-y-6">
                  <div className="border-l-2 border-foreground/30 pl-5">
                    <dt className="mb-2 text-sm font-medium text-foreground">Multi-Location Trend Comparison</dt>
                    <dd className="text-sm leading-relaxed text-muted-foreground">Users can compare the historical movement of the same commodity across up to three locations on one chart, with a supporting data table. This extends the existing location comparison from a reporting context to changes over time.</dd>
                  </div>
                  <div className="border-l-2 border-foreground/30 pl-5">
                    <dt className="mb-2 text-sm font-medium text-foreground">Household Basket Calculator</dt>
                    <dd className="text-sm leading-relaxed text-muted-foreground">Users can build a custom basket of up to eight commodities, adjust each quantity, and compare estimated costs across locations or reporting periods. This expands single-commodity exploration into an estimated commodity basket cost comparison, with completeness checks before a total is shown.</dd>
                  </div>
                  <div>
                    <dt className="mb-2 text-sm font-medium text-foreground">Shareable Views &amp; CSV Export</dt>
                    <dd className="text-sm leading-relaxed text-muted-foreground">A configured dashboard view can be shared and reopened. CSV downloads let users take chart data into tools such as Excel, Google Sheets, Python, or R for further analysis.</dd>
                  </div>
                  <div>
                    <dt className="mb-2 text-sm font-medium text-foreground">Dynamic Data Coverage &amp; Source and Methodology</dt>
                    <dd className="text-sm leading-relaxed text-muted-foreground">Coverage reflects the records currently available. A Source and Methodology page explains where the data comes from, what the dashboard represents, how records are handled, and how missing observations are treated.</dd>
                  </div>
                </dl>
              </div>
            </section>
          </RevealOnScroll>

          <RevealOnScroll>
            <section aria-labelledby="architecture">
              <h2 id="architecture" className="mb-6 flex items-center gap-3 text-lg font-semibold tracking-tight text-foreground"><Workflow className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />03 / System &amp; Data Flow</h2>
              <div className="space-y-6 border border-border/40 bg-card p-6 sm:p-8">
                {flows.map((flow) => (
                  <div key={flow.title}>
                    <h3 className="mb-3 text-sm font-medium text-foreground">{flow.title}</h3>
                    <ol className="flex flex-col md:flex-row lg:flex-col xl:flex-row">
                      {flow.steps.map(({ label, detail, icon: Icon }, index) => (
                        <li key={label} className="relative flex min-w-0 flex-1 flex-col pb-7 last:pb-0 md:pb-0 md:pr-5 md:last:pr-0 lg:pb-7 lg:pr-0 xl:pb-0 xl:pr-5 xl:last:pr-0">
                          <div className="flex h-full items-center gap-3 border border-border/40 bg-background p-3 md:flex-col md:items-start lg:flex-row lg:items-center xl:flex-col xl:items-start">
                            <Icon className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                            <div className="min-w-0">
                              <p className="text-[11px] font-medium leading-relaxed text-foreground [overflow-wrap:anywhere]">{label}</p>
                              <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground">{detail}</p>
                            </div>
                          </div>
                          {index < flow.steps.length - 1 && <>
                            <ArrowDown className="absolute bottom-1.5 left-1/2 h-4 w-4 -translate-x-1/2 text-muted-foreground md:hidden lg:block xl:hidden" aria-hidden="true" />
                            <ArrowRight className="absolute right-0.5 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-muted-foreground md:block lg:hidden xl:block" aria-hidden="true" />
                          </>}
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
                <p className="border-t border-border/40 pt-6 text-sm leading-relaxed text-muted-foreground">Next.js handles both the frontend and backend. Route Handlers and server-side logic run on Node.js, with Prisma ORM querying PostgreSQL. Vercel hosts the application, and Prisma Postgres provides the production database.</p>
              </div>
            </section>
          </RevealOnScroll>

          <section aria-labelledby="decisions">
            <h2 id="decisions" className="mb-6 flex items-center gap-3 text-lg font-semibold tracking-tight text-foreground"><Layers className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />04 / Key Engineering Decisions</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {decisions.map((decision) => (
                <RevealOnScroll key={decision.title}>
                  <GlowingCard as="article" className="h-full border border-border/40 bg-card p-6">
                    <decision.icon className="mb-4 h-5 w-5 text-muted-foreground" aria-hidden="true" />
                    <h3 className="mb-3 text-sm font-medium text-foreground">{decision.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{decision.text}</p>
                  </GlowingCard>
                </RevealOnScroll>
              ))}
            </div>
            <div className="mt-6 space-y-4 border-t border-border/40 pt-6 text-sm leading-relaxed text-muted-foreground">
              <h3 className="font-medium text-foreground">Data Completeness &amp; Shareable State</h3>
              <p>Multi-location charts preserve gaps where observations are unavailable; missing values are never interpolated or fabricated. For a basket, each item cost is its recorded commodity price multiplied by the selected quantity. These costs are summed only when every required price is available. Otherwise, the total is withheld and the interface identifies the missing data, preventing a partial estimate from appearing complete.</p>
              <p>Main dashboard filters are encoded in the URL so a selected analysis can be shared and reopened with the same selections. This makes the view reproducible without requiring saved dashboards or user accounts.</p>
            </div>
          </section>

          <RevealOnScroll>
            <section aria-labelledby="experience">
              <h2 id="experience" className="mb-6 flex items-center gap-3 text-lg font-semibold tracking-tight text-foreground"><LayoutDashboard className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />05 / Dashboard Experience</h2>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">The interface went through several refinements to prioritize useful information. It starts with the user&apos;s question, establishes the current price context, and then opens up comparisons and supporting detail.</p>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">A new &ldquo;Try an Example&rdquo; action selects a commodity and location with existing observations, reducing friction for first-time visitors and helping them start with a useful view.</p>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">Empty and invalid states now explain unavailable observations, the absence of a common reporting period, invalid date ranges, and missing required basket prices. Missing data is treated as a valid condition in the dataset, rather than automatically as an application error.</p>
              <ol className="grid grid-cols-1 gap-4 border-y border-border/40 py-6 sm:grid-cols-2">
                {[
                  { label: "Filters", icon: ListFilter },
                  { label: "Current Price Summary", icon: FileSpreadsheet },
                  { label: "Historical Trend", icon: ChartNoAxesCombined },
                  { label: "Market Context", icon: Layers },
                  { label: "Location Comparison", icon: MapPin },
                  { label: "Detailed Observations", icon: TableProperties },
                ].map(({ label, icon: Icon }, index) => (
                  <li key={label} className="flex items-center gap-3 text-[12px] text-foreground">
                    <span className="font-mono text-muted-foreground">0{index + 1}</span>
                    <Icon className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />{label}
                  </li>
                ))}
              </ol>
            </section>
          </RevealOnScroll>

          <section aria-labelledby="challenges">
            <h2 id="challenges" className="mb-6 flex items-center gap-3 text-lg font-semibold tracking-tight text-foreground"><Wrench className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />06 / Technical Challenges</h2>
            <div className="divide-y divide-border/40 border-y border-border/40">
              {challenges.map((challenge) => (
                <RevealOnScroll key={challenge.title}>
                  <article className="py-6">
                    <h3 className="mb-3 text-sm font-medium text-foreground">{challenge.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{challenge.text}</p>
                    {challenge.command && <pre className="mt-4 overflow-x-auto border border-border/40 bg-secondary/5 p-4 text-[12px] text-foreground"><code>{challenge.command}</code></pre>}
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </section>

          <RevealOnScroll>
            <section aria-labelledby="learning">
              <h2 id="learning" className="mb-6 flex items-center gap-3 text-lg font-semibold tracking-tight text-foreground"><BookOpen className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />07 / What I Learned</h2>
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>Building PricePulse connected the full application lifecycle: preparing and validating data, modeling it in PostgreSQL, querying it through Prisma, and writing Next.js Route Handlers and analytics logic on Node.js. Reliable data preparation and clear calculations became the foundation for the interface.</p>
                <p>On the frontend, React, Next.js, TypeScript, and Tailwind CSS supported a responsive dashboard where visualization and UX refinement worked together. Git and GitHub supported incremental development, code organization, and debugging throughout the project.</p>
                <p>Deploying to Vercel extended the work beyond local development. Production builds, Prisma Client generation, environment variables, database connectivity, and connection management all needed attention to bring the application online.</p>
                <p>The latest work added experience in multi-series visualization, multi-item calculation logic, and data-completeness validation. Deriving metadata from database records, managing filter state through URLs, generating CSV exports, and explaining edge cases strengthened the connection between reliable calculations and understandable results.</p>
              </div>
            </section>
          </RevealOnScroll>
        </div>
      </div>
    </main>
  );
}

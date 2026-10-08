import TechnologyList from "@/components/shared/TechnologyList";
import CaseStudyHeader from "@/components/features/case-files/CaseStudyHeader";
import CaseStudyContext from "@/components/features/case-files/CaseStudyContext";
import {
  Accessibility,
  Blocks,
  Code2,
  FileText,
  FolderGit2,
  LayoutTemplate,
  Lightbulb,
  Menu,
  MonitorSmartphone,
  Palette,
  Rocket,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { SiGithub, SiVercel } from "react-icons/si";
import GlowingCard from "@/components/shared/GlowingCard";
import RevealOnScroll from "@/components/shared/RevealOnScroll";

const technologies = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide React", "PDF.js", "npm", "ESLint", "Git", "GitHub"];

const sections = [
  {
    id: "01",
    title: "The Idea",
    icon: Lightbulb,
    content: "I created this portfolio as a complement to a traditional resume. It gives recruiters, employers, and other visitors one organized place to explore my projects, professional experience, credentials, certifications, skills, documents, contact information, and professional journey.",
    details: [
      "Present professional information in one digital workspace",
      "Make projects and credentials easier to explore",
      "Provide more context than a resume alone can hold",
    ],
  },
  {
    id: "02",
    title: "Planning",
    icon: Workflow,
    content: "The workspace was planned around clear areas for different types of professional information. Instead of placing everything in one long page, the structure separates the Overview, Case Files, Professional Journey, Verified Credentials, Professional Ecosystem, Capabilities, Documents, and Contact sections.",
    details: [
      "Organize information by the visitor's likely goal",
      "Use navigation that supports quick exploration",
      "Use Case Files to document projects and experiences in more detail",
    ],
  },
  {
    id: "03",
    title: "Design",
    icon: Palette,
    content: "The visual direction is a clean, workspace-inspired interface with a professional tone. Typography, spacing, and layout are used to create a readable hierarchy while light, dark, and system themes let the experience remain comfortable in different viewing environments.",
    details: [
      "Keep the interface professional rather than overly decorative",
      "Maintain readable contrast and clear visual hierarchy",
      "Design responsive layouts and touch-friendly mobile interactions",
    ],
  },
  {
    id: "04",
    title: "Development",
    icon: Code2,
    content: "The portfolio is built with Next.js, React, TypeScript, and Tailwind CSS. Lucide React provides interface icons, while PDF.js supports in-portfolio document viewing. The project also uses npm and ESLint during development, with Git and GitHub used for source control.",
    details: [
      "Next.js, React, and TypeScript",
      "Tailwind CSS and Lucide React",
      "PDF.js, npm, ESLint, Git, and GitHub",
    ],
  },
];

const features = [
  { title: "Workspace Navigation", description: "A sidebar on larger screens and a responsive mobile menu help visitors move between portfolio areas.", icon: Menu },
  { title: "Case Files", description: "Project pages provide structured documentation for important work and experiences.", icon: FolderGit2 },
  { title: "Verified Credentials", description: "Credentials and certificates can be explored in a dedicated section.", icon: ShieldCheck },
  { title: "Document Viewer", description: "Documents and certificates can be viewed within the portfolio instead of requiring visitors to leave it.", icon: FileText },
  { title: "Theme Options", description: "Light, dark, and system modes support different viewing preferences.", icon: MonitorSmartphone },
  { title: "Responsive Layouts", description: "Cards, grids, typography, and controls adapt across mobile, tablet, laptop, and desktop screens.", icon: LayoutTemplate },
];

export default function PortfolioWorkspaceCaseFile() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen flex-1 overflow-y-auto bg-background pb-32 selection:bg-foreground selection:text-background">
      <div className="page-shell case-study-shell">
        <CaseStudyHeader id="portfolio-workspace" />

        <CaseStudyContext id="portfolio-workspace" sections={[{"id": "section-01", "label": "Idea"}, {"id": "section-04", "label": "Development"}, {"id": "section-05", "label": "Features"}, {"id": "section-06", "label": "Challenges"}, {"id": "section-08", "label": "Deployment"}]} />

        <div className="space-y-12 sm:space-y-14">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <RevealOnScroll key={section.id} delay={(index % 2) * 100}>
                <section aria-labelledby={`section-${section.id}`}>
                  <div className="mb-6 flex items-center gap-3">
                    <span className="text-[10px] font-mono text-muted-foreground">{section.id}</span>
                    <Icon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                    <h2 id={`section-${section.id}`} className="text-lg font-semibold tracking-tight text-foreground">{section.title}</h2>
                  </div>
                  <div className="border border-border/40 bg-card p-6 sm:p-8">
                    <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">{section.content}</p>
                    {section.id === "04" ? (
                      <TechnologyList items={technologies} label="Portfolio technology stack" className="mt-6 border-t border-border/40 pt-6" />
                    ) : (
                    <ul className="mt-6 grid grid-cols-1 gap-3 border-t border-border/40 pt-6 sm:grid-cols-3">
                      {section.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3 text-[12px] leading-relaxed text-foreground">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" aria-hidden="true" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    )}
                  </div>
                </section>
              </RevealOnScroll>
            );
          })}

          <RevealOnScroll>
            <section aria-labelledby="section-05">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-[10px] font-mono text-muted-foreground">05</span>
                <Blocks className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <h2 id="section-05" className="text-lg font-semibold tracking-tight text-foreground">Key Features</h2>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <GlowingCard key={feature.title} as="article" className="flex flex-col border border-border/40 bg-card p-6 transition-colors hover:border-foreground/30">
                      <div className="mb-3 flex items-center gap-3">
                        <Icon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                        <h3 className="text-sm font-medium text-foreground">{feature.title}</h3>
                      </div>
                      <p className="text-[12px] leading-relaxed text-muted-foreground">{feature.description}</p>
                    </GlowingCard>
                  );
                })}
              </div>
            </section>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <section aria-labelledby="section-06">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-[10px] font-mono text-muted-foreground">06</span>
                <Accessibility className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <h2 id="section-06" className="text-lg font-semibold tracking-tight text-foreground">Challenges</h2>
              </div>
              <div className="grid grid-cols-1 divide-y divide-border/40 border border-border/40 bg-secondary/5 md:grid-cols-2 md:divide-x md:divide-y-0">
                {["Making the workspace readable and responsive on smaller screens.", "Making the mobile menu easier to notice while keeping the visual identity minimal.", "Creating document and certificate viewing that works across desktop, tablet, and mobile.", "Balancing a detailed professional profile with clear, comfortable reading.", "Handling unavailable documents gracefully instead of sending visitors to a generic missing page.", "Maintaining consistent accessibility, touch interaction, spacing, and visual language across the workspace."].map((challenge) => (
                  <p key={challenge} className="p-6 text-sm leading-relaxed text-muted-foreground">{challenge}</p>
                ))}
              </div>
            </section>
          </RevealOnScroll>

          <RevealOnScroll>
            <section aria-labelledby="section-07">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-[10px] font-mono text-muted-foreground">07</span>
                <Workflow className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <h2 id="section-07" className="text-lg font-semibold tracking-tight text-foreground">Iteration &amp; Improvements</h2>
              </div>
              <div className="border border-border/40 bg-card p-6 sm:p-8">
                <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  This workspace continues to evolve through refinements to mobile responsiveness, navigation, typography, spacing, document viewing, certificate presentation, accessibility, user experience, and overall visual polish. Each improvement responds to real usability and presentation needs while keeping the portfolio organized and professional.
                </p>
              </div>
            </section>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <section aria-labelledby="section-08">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-[10px] font-mono text-muted-foreground">08</span>
                <Rocket className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <h2 id="section-08" className="text-lg font-semibold tracking-tight text-foreground">Deployment</h2>
              </div>
              <div className="grid grid-cols-1 border border-border/40 bg-card sm:grid-cols-2 sm:divide-x sm:divide-border/40">
                <div className="p-6 sm:p-8"><p className="mb-2 text-xs leading-relaxed text-muted-foreground">Source Control</p><p className="flex items-center gap-3 text-sm font-medium text-foreground"><SiGithub className="h-5 w-5 shrink-0" aria-hidden="true" />GitHub</p><p className="mt-3 text-sm leading-relaxed text-muted-foreground">The portfolio source code is maintained through GitHub.</p></div>
                <div className="border-t border-border/40 p-6 sm:border-t-0 sm:p-8"><p className="mb-2 text-xs leading-relaxed text-muted-foreground">Hosting &amp; Deployment</p><p className="flex items-center gap-3 text-sm font-medium text-foreground"><SiVercel className="h-5 w-5 shrink-0" aria-hidden="true" />Vercel</p><p className="mt-3 text-sm leading-relaxed text-muted-foreground">The portfolio is deployed through Vercel.</p></div>
              </div>
            </section>
          </RevealOnScroll>

          <RevealOnScroll>
            <section aria-labelledby="section-09" className="border-t border-border/40 pt-10">
              <div className="mb-6 flex items-center gap-3"><span className="text-[10px] font-mono text-muted-foreground">09</span><Lightbulb className="h-4 w-4 text-muted-foreground" aria-hidden="true" /><h2 id="section-09" className="text-lg font-semibold tracking-tight text-foreground">Final Result</h2></div>
              <p className="max-w-3xl border-l-2 border-foreground/30 py-2 pl-6 text-[16px] leading-relaxed text-foreground/90">
                This portfolio is designed as more than an online resume. It is a digital workspace where my projects, experience, credentials, skills, and professional journey can be explored in one organized place. It also reflects how I approach planning, designing, developing, testing, deploying, and continuously improving digital solutions.
              </p>
            </section>
          </RevealOnScroll>
        </div>
      </div>
    </main>
  );
}

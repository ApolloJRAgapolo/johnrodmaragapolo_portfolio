import { 
  Briefcase, 
  Cpu, 
  Database, 
  LayoutGrid, 
  Bot, 
  Code2, 
  Users 
} from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";

// --- REUSABLE TAXONOMY COMPONENT ---

function CapabilityBlock({ 
  category, 
  icon: Icon, 
  competencies,
  delay = 100,
}: { 
  category: string; 
  icon: any; 
  competencies: { tool: string; proficiency: string; application: string; subTools?: string }[];
  delay?: number;
}) {
  return (
    <RevealOnScroll delay={delay}>
    <section className="mb-20 last:mb-0">
      <div className="flex items-center gap-3 mb-8 border-b border-border/40 pb-4">
        <Icon className="w-4 h-4 stroke-[1.5] text-muted-foreground" />
        <h2 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
          {category}
        </h2>
      </div>
      
      <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
        {competencies.map((item, i) => (
          <div key={i} className="flex flex-col">
            <dt className="text-sm font-medium text-foreground mb-4 flex items-baseline justify-between border-b border-border/40 pb-2">
              <span className="tracking-tight">{item.tool}</span>
              <span className="text-[9px] font-mono tracking-widest uppercase text-muted-foreground">
                {item.proficiency}
              </span>
            </dt>
            <dd className="text-[13px] leading-relaxed text-muted-foreground">
              {item.application}
              {item.subTools && (
                <div className="mt-3 text-[11px] font-mono text-foreground/70">
                  <span className="opacity-50">INCLUDES:</span> {item.subTools}
                </div>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
    </RevealOnScroll>
  );
}

// --- MAIN PAGE ---

export default function Capabilities() {
  return (
    <main className="flex-1 min-h-screen overflow-y-auto bg-background selection:bg-foreground selection:text-background">
      <div className="max-w-4xl mx-auto px-8 py-16 lg:px-16 lg:py-24 w-full">
        
        {/* HEADER */}
        <RevealOnScroll>
        <header className="mb-24">
          <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground mb-8">
            <span className="text-foreground">Capabilities Taxonomy</span>
            <span>/</span>
            <span>Technical Competencies</span>
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-6">
            Capabilities
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-2xl">
            A collection of the tools and skills I use to analyze problems, organize information, design systems, and build practical digital solutions.
          </p>
        </header>
        </RevealOnScroll>

        {/* TAXONOMY GRID */}
        
        <CapabilityBlock 
          category="Business Analysis" 
          icon={Briefcase}
          delay={100}
          competencies={[
            {
              tool: "Requirements Gathering",
              proficiency: "Experienced",
              application: "Understanding user needs and turning them into clear system requirements."
            },
            {
              tool: "Business Process Analysis",
              proficiency: "Learning",
              application: "Studying how organizations work and identifying opportunities for improvement through technology."
            },
            {
              tool: "Process Mapping",
              proficiency: "Experienced",
              application: "Creating flowcharts and diagrams to document workflows and business processes."
            },
            {
              tool: "Documentation",
              proficiency: "Advanced",
              application: "Preparing system documents, reports, user requirements, and project documentation."
            },
            {
              tool: "Stakeholder Communication",
              proficiency: "Experienced",
              application: "Working effectively with faculty, startup founders, mentors, clients, and cross-functional project teams."
            }
          ]}
        />

        <CapabilityBlock 
          category="Systems Design" 
          icon={Cpu}
          delay={200}
          competencies={[
            {
              tool: "System Analysis & Design",
              proficiency: "Experienced",
              application: "Planning system features, user roles, workflows, and overall system structure before development."
            },
            {
              tool: "UI/UX Design & Figma",
              proficiency: "Experienced",
              application: "Designing user interfaces and interactive prototypes for web and mobile applications using component properties and auto layout."
            },
            {
              tool: "Wireframing",
              proficiency: "Experienced",
              application: "Creating simple, effective layouts to visualize how a system will look and operate."
            },
            {
              tool: "Database Design",
              proficiency: "Learning",
              application: "Organizing data into structured databases using precise entity-relationship diagrams (ERDs)."
            }
          ]}
        />

        <CapabilityBlock 
          category="Data & Analytics" 
          icon={Database}
          delay={300}
          competencies={[
            {
              tool: "Google Sheets",
              proficiency: "Experienced",
              application: "Using advanced formulas, pivot tables, dashboards, and charts to organize and analyze operational data."
            },
            {
              tool: "Microsoft Excel",
              proficiency: "Experienced",
              application: "Working heavily with structured spreadsheets, comprehensive reports, data validation, and formulas."
            },
            {
              tool: "SQL",
              proficiency: "Learning",
              application: "Writing structured queries to retrieve, manipulate, and analyze information from relational databases."
            },
            {
              tool: "Python",
              proficiency: "Learning",
              application: "Applying Python for foundational data analysis, automation scripts, and beginner data science logic."
            },
            {
              tool: "Data Visualization",
              proficiency: "Learning",
              application: "Presenting complex information through charts, dashboards, and reports that are easily digestible for stakeholders."
            },
            {
              tool: "Power BI",
              proficiency: "Learning",
              application: "Exploring business intelligence reporting and interactive dashboard creation for organizational data."
            }
          ]}
        />

        <CapabilityBlock 
          category="Productivity Tools" 
          icon={LayoutGrid}
          delay={400}
          competencies={[
            {
              tool: "Microsoft Office",
              proficiency: "Experienced",
              application: "Creating reports, presentations, spreadsheets, and official documents.",
              subTools: "Word, Excel, PowerPoint, Outlook"
            },
            {
              tool: "Google Workspace",
              proficiency: "Experienced",
              application: "Collaborating with teams and managing shared documentation in real-time online environments.",
              subTools: "Docs, Sheets, Slides, Drive, Forms"
            },
            {
              tool: "monday.com",
              proficiency: "Learning",
              application: "Managing projects, defining tasks, tracking timelines, and facilitating team collaboration."
            },
            {
              tool: "Jira",
              proficiency: "Learning",
              application: "Tracking project progress, managing task tickets, and supporting Agile workflows."
            },
            {
              tool: "Notion & Trello",
              proficiency: "Learning",
              application: "Organizing kanban boards, building collaborative workspaces, and managing knowledge bases."
            }
          ]}
        />

        <CapabilityBlock 
          category="AI & Digital Tools" 
          icon={Bot}
          delay={500}
          competencies={[
            {
              tool: "AI Productivity Suites",
              proficiency: "Experienced",
              application: "Leveraging large language models and AI tools to accelerate research, drafting, documentation, brainstorming, and software development.",
              subTools: "ChatGPT, Gemini, Claude, GitHub Copilot, NotebookLM, Perplexity"
            }
          ]}
        />

        <CapabilityBlock 
          category="Development Tools" 
          icon={Code2}
          delay={600}
          competencies={[
            {
              tool: "HTML, CSS & JavaScript",
              proficiency: "Learning",
              application: "Building foundational web structures and interactive browser-based elements."
            },
            {
              tool: "Next.js & React",
              proficiency: "Learning",
              application: "Building modern, component-driven web applications using React architecture."
            },
            {
              tool: "TypeScript",
              proficiency: "Learning",
              application: "Developing scalable web applications with strictly typed JavaScript to prevent runtime errors."
            },
            {
              tool: "Tailwind CSS",
              proficiency: "Learning",
              application: "Creating responsive and modern user interfaces efficiently using utility-class frameworks."
            },
            {
              tool: "Git & GitHub",
              proficiency: "Learning",
              application: "Managing project versions, tracking codebase changes, and collaborating on software repositories."
            },
            {
              tool: "Visual Studio Code",
              proficiency: "Experienced",
              application: "Writing, editing, and managing code environments for web and software engineering projects."
            }
          ]}
        />

        <CapabilityBlock 
          category="Project & Collaboration" 
          icon={Users}
          delay={700}
          competencies={[
            {
              tool: "Event Coordination",
              proficiency: "Experienced",
              application: "Planning, organizing, and executing logistical support for university events, technical workshops, and startup incubator activities."
            },
            {
              tool: "Agile Fundamentals",
              proficiency: "Learning",
              application: "Understanding iterative project management cycles, sprint planning, and cross-functional teamwork dynamics."
            }
          ]}
        />

      </div>
    </main>
  );
}

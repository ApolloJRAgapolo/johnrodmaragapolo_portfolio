import { Briefcase, Cpu, Database, LayoutGrid, Bot, Code2, Users } from "lucide-react";
import type { CapabilityGroup } from "@/lib/types";

const groups: CapabilityGroup[] = [
  {
    category: "Business & Systems Analysis",
    icon: Briefcase,
    delay: 100,
    competencies: [
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
              proficiency: "Experienced",
              application: "Preparing system documents, reports, user requirements, and project documentation."
            },
            {
              tool: "Stakeholder Communication",
              proficiency: "Experienced",
              application: "Working effectively with faculty, startup founders, mentors, clients, and cross-functional project teams."
            }
          ],
  },
  {
    category: "Systems Design",
    icon: Cpu,
    delay: 200,
    competencies: [
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
          ],
  },
  {
    category: "Data & Integration",
    icon: Database,
    delay: 300,
    competencies: [
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
          ],
  },
  {
    category: "Productivity Tools",
    icon: LayoutGrid,
    delay: 400,
    competencies: [
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
          ],
  },
  {
    category: "AI & Digital Tools",
    icon: Bot,
    delay: 500,
    competencies: [
            {
              tool: "AI Productivity Suites",
              proficiency: "Experienced",
              application: "Leveraging large language models and AI tools to accelerate research, drafting, documentation, brainstorming, and software development.",
              subTools: "ChatGPT, Gemini, Claude, GitHub Copilot, NotebookLM, Perplexity"
            }
          ],
  },
  {
    category: "Software Development",
    icon: Code2,
    delay: 600,
    competencies: [
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
              application: "Using commits, branches, and repositories to organize incremental development of PricePulse and this portfolio."
            },
            {
              tool: "REST API Integration",
              proficiency: "Learning",
              application: "Connecting web interfaces to services and structured data."
            },
            {
              tool: "Visual Studio Code",
              proficiency: "Experienced",
              application: "Writing, editing, and managing code environments for web and software engineering projects."
            }
          ],
  },
  {
    category: "Project & Collaboration",
    icon: Users,
    delay: 700,
    competencies: [
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
          ],
  }
];

const projectEvidence: Record<string, { label: string; href: string }[]> = {
  "Next.js & React": [{ label: "PricePulse PH", href: "/case-files/pricepulse" }, { label: "Portfolio Workspace", href: "/case-files/portfolio-workspace" }],
  "TypeScript": [{ label: "PricePulse PH", href: "/case-files/pricepulse" }],
  "Tailwind CSS": [{ label: "Portfolio Workspace", href: "/case-files/portfolio-workspace" }],
  "Git & GitHub": [{ label: "PricePulse PH", href: "/case-files/pricepulse" }],
  "REST API Integration": [{ label: "PricePulse Route Handlers", href: "/case-files/pricepulse#architecture" }],
  "Requirements Gathering": [{ label: "BLMS", href: "/case-files/blms" }, { label: "TumaNow", href: "/case-files/tumanow" }],
  "System Analysis & Design": [{ label: "BLMS", href: "/case-files/blms" }],
  "Database Design": [{ label: "PricePulse PH", href: "/case-files/pricepulse#architecture" }],
  "Data Visualization": [{ label: "PricePulse PH", href: "/case-files/pricepulse#experience" }],
};
const categoryOrder = ["Software Development", "Systems Design", "Data & Integration", "Business & Systems Analysis", "Project & Collaboration", "Productivity Tools", "AI & Digital Tools"];
export const capabilityGroups: CapabilityGroup[] = categoryOrder.map(category => {
  const group = groups.find(item => item.category === category)!;
  const competencies = group.competencies.map(item => ({ ...item, proficiency: projectEvidence[item.tool] ? "Project experience" : item.proficiency, evidence: projectEvidence[item.tool] }));
  if (category === "Software Development") competencies.push({ tool: "PostgreSQL & Prisma", proficiency: "Project experience", application: "Storing prepared commodity data and querying PostgreSQL through Prisma ORM in PricePulse.", evidence: [{ label: "PricePulse PH", href: "/case-files/pricepulse#architecture" }] });
  return { ...group, competencies };
});

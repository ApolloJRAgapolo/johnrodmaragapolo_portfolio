import { Cpu, Database, LayoutGrid, Users } from "lucide-react";
import { FaCss3Alt } from "react-icons/fa";
import {
  SiGit,
  SiCloudflare,
  SiExpress,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiRailway,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import type { CapabilityGroup, TechnologyStackGroup } from "@/lib/types";

const pricePulse = { label: "PricePulse PH", href: "/case-files/pricepulse" };
const careerTrack = { label: "CareerTrack", href: "/case-files/careertrack" };
const careerTrackArchitecture = { label: "CareerTrack architecture", href: "/case-files/careertrack#architecture" };
const pricePulseArchitecture = { label: "PricePulse architecture", href: "/case-files/pricepulse#architecture" };
const portfolio = { label: "Portfolio Workspace", href: "/case-files/portfolio-workspace" };
const blms = { label: "BLMS", href: "/case-files/blms" };
const tumaNow = { label: "TumaNow", href: "/case-files/tumanow" };

export const technologyStackGroups: TechnologyStackGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    technologies: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    summary: "Building responsive dashboards, application workflows, and document previews with typed components.",
    learning: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: SiJavascript },
    ],
    evidence: [careerTrack, pricePulse, portfolio],
  },
  {
    id: "backend",
    title: "Backend",
    technologies: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Next.js", icon: SiNextdotjs },
    ],
    summary: "Building Express APIs with server-side sessions, record ownership checks, and private file access, alongside Next.js Route Handlers for dashboard analytics.",
    evidence: [careerTrackArchitecture, { label: "PricePulse Route Handlers", href: "/case-files/pricepulse#architecture" }],
  },
  {
    id: "databases",
    title: "Databases",
    technologies: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma ORM", icon: SiPrisma },
    ],
    summary: "Modeling career records and commodity data in PostgreSQL, querying through Prisma, and using transactions to preserve application history.",
    learning: [{ name: "SQL", icon: Database }],
    learningNote: "Practicing relational queries; current application queries use Prisma ORM.",
    evidence: [careerTrackArchitecture, pricePulseArchitecture],
  },
  {
    id: "development-deployment",
    title: "Development & Deployment",
    technologies: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "Railway", icon: SiRailway },
      { name: "Cloudflare R2", icon: SiCloudflare },
    ],
    summary: "Deploying frontends on Vercel and the CareerTrack API on Railway, with Neon PostgreSQL and private R2 storage. Using Git and GitHub for incremental development.",
    evidence: [careerTrackArchitecture, { label: "PricePulse deployment", href: "/case-files/pricepulse#challenges" }, portfolio],
  },
];

export const capabilityGroups: CapabilityGroup[] = [
  {
    category: "Systems Analysis & Design",
    icon: Cpu,
    delay: 0,
    competencies: [
      {
        tool: "Requirements gathering",
        proficiency: "Project experience",
        application: "Interviewing stakeholders and translating user needs into project and system requirements.",
        evidence: [blms, tumaNow],
      },
      {
        tool: "Process analysis & mapping",
        proficiency: "Project experience",
        application: "Analyzing existing workflows and documenting processes with flowcharts and diagrams.",
        evidence: [blms, tumaNow],
      },
      {
        tool: "System analysis & design",
        proficiency: "Project experience",
        application: "Planning user roles, features, workflows, and system structure before development.",
        evidence: [blms],
      },
      {
        tool: "UI/UX design, Figma & wireframing",
        proficiency: "Experienced",
        application: "Designing interfaces, wireframes, and interactive prototypes, including Figma component properties and auto layout.",
        evidence: [blms],
      },
      {
        tool: "Database design",
        proficiency: "Project experience",
        application: "Designing relational models for career records and commodity data, with Prisma migrations and documented relationships.",
        evidence: [careerTrackArchitecture, pricePulseArchitecture],
      },
      {
        tool: "Technical documentation & stakeholder communication",
        proficiency: "Experienced",
        application: "Preparing system documents, requirements, and reports while coordinating with clients, mentors, and project teams.",
        evidence: [blms, tumaNow],
      },
    ],
  },
];

export const secondaryCapabilityGroups: CapabilityGroup[] = [
  {
    category: "Data tools",
    icon: Database,
    delay: 0,
    competencies: [
      {
        tool: "Google Sheets & Microsoft Excel",
        proficiency: "Experienced",
        application: "Working with formulas, pivot tables, charts, reports, and data validation to organize operational data.",
      },
      {
        tool: "Python",
        proficiency: "Learning",
        application: "Practicing foundational data analysis and automation scripts.",
      },
      {
        tool: "Power BI",
        proficiency: "Learning",
        application: "Exploring business-intelligence reporting and interactive dashboards.",
      },
    ],
  },
  {
    category: "Project & collaboration practice",
    icon: Users,
    delay: 0,
    competencies: [
      {
        tool: "Event coordination",
        proficiency: "Experienced",
        application: "Organizing logistical support for university events, technical workshops, and startup-incubator activities.",
      },
      {
        tool: "Agile fundamentals",
        proficiency: "Learning",
        application: "Learning iterative planning, task tracking, and team workflows.",
      },
      {
        tool: "Project organization tools",
        proficiency: "Learning",
        application: "Practicing task boards, timelines, and shared knowledge organization.",
        subTools: "monday.com, Jira, Notion, Trello",
      },
    ],
  },
  {
    category: "Everyday tools",
    icon: LayoutGrid,
    delay: 0,
    competencies: [
      {
        tool: "Microsoft Office & Google Workspace",
        proficiency: "Experienced",
        application: "Preparing reports, presentations, spreadsheets, and shared documents.",
        subTools: "Word, Excel, PowerPoint, Outlook; Docs, Sheets, Slides, Drive, Forms",
      },
      {
        tool: "Visual Studio Code",
        proficiency: "Experienced",
        application: "Writing and managing code for web projects.",
      },
      {
        tool: "AI productivity tools",
        proficiency: "Experienced",
        application: "Supporting research, drafting, brainstorming, documentation, and software development.",
        subTools: "ChatGPT, Gemini, Claude, GitHub Copilot, NotebookLM, Perplexity",
      },
    ],
  },
];

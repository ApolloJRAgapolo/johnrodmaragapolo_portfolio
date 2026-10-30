import { BarChart3, Cpu, Database, LayoutGrid, Users } from "lucide-react";
import { FaCss3Alt } from "react-icons/fa";
import {
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiGooglesearchconsole,
  SiGooglesheets,
  SiLooker,
  SiSemrush,
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
    id: "software-development",
    title: "Software Development",
    technologies: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    summary: "Building responsive interfaces, dashboards, application workflows, and document previews with typed components.",
    evidence: [careerTrack, pricePulse, portfolio],
  },
  {
    id: "data-analytics",
    title: "Data Analytics & Data Science",
    technologies: [
      { name: "Python", icon: SiPython },
      { name: "pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "Matplotlib", icon: BarChart3 },
      { name: "Seaborn", icon: BarChart3 },
      { name: "scikit-learn", icon: SiScikitlearn },
      { name: "SQL", icon: Database },
    ],
    technologyStatus: "Project experience",
    summary: "Foundational practice in data preparation, exploratory analysis, visualization, data validation, and introductory machine learning using Python.",
    learningNote: "Exploring data cleaning, exploratory data analysis, and classification through PricePulse PH and the GCI World final assignment.",
    evidence: [pricePulse, { label: "Customer Churn Prediction", href: "/case-files/customer-churn-prediction" }],
  },
  {
    id: "analytics-seo",
    title: "Analytics & SEO Tools",
    technologies: [
      { name: "Google Analytics 4", icon: SiGoogleanalytics },
      { name: "Google Tag Manager", icon: SiGoogletagmanager },
      { name: "Google Search Console", icon: SiGooglesearchconsole },
      { name: "Google Sheets", icon: SiGooglesheets },
      { name: "Looker Studio", icon: SiLooker },
      { name: "Semrush", icon: SiSemrush },
    ],
    technologyStatus: "Currently exploring",
    summary: "Currently exploring digital analytics, measurement, reporting, and SEO workflows.",
    evidence: [portfolio],
  },
  {
    id: "backend-delivery",
    title: "Backend & Delivery",
    technologies: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma ORM", icon: SiPrisma },
      { name: "Git & GitHub", icon: SiGit },
      { name: "Vercel", icon: SiVercel },
    ],
    summary: "Supporting application development with APIs, relational data, version control, and deployment workflows.",
    evidence: [careerTrackArchitecture, { label: "PricePulse deployment", href: "/case-files/pricepulse#challenges" }, portfolio],
  },
];

type CapabilityStage = {
  id: string;
  title: string;
  description: string;
  competencies: CapabilityGroup["competencies"];
};

export type GroupedCapabilityGroup = Pick<CapabilityGroup, "category" | "icon"> & {
  description: string;
  stages: CapabilityStage[];
};

export const capabilityGroups: GroupedCapabilityGroup[] = [
  {
    category: "Business & Systems Analysis",
    icon: Cpu,
    description: "Connecting business questions, stakeholder needs, workflows, and system decisions through research, analysis, requirements, design, and documentation.",
    stages: [
      {
        id: "discovery-requirements",
        title: "Discovery & requirements",
        description: "Understand stakeholder needs, investigate the business problem, and define what the system needs to do.",
        competencies: [
          {
            tool: "Requirements gathering",
            proficiency: "Project experience",
            application: "Interviewing stakeholders and translating user needs into project and system requirements.",
            evidence: [blms, tumaNow],
          },
          {
            tool: "Business research & market validation",
            proficiency: "Project experience",
            application: "Researching problems, validating opportunities, and shaping proposals around stakeholder and market needs.",
            evidence: [tumaNow],
          },
          {
            tool: "Process analysis & mapping",
            proficiency: "Project experience",
            application: "Analyzing existing workflows and documenting processes with flowcharts and diagrams.",
            evidence: [blms, tumaNow],
          },
        ],
      },
      {
        id: "design-modeling",
        title: "Design & modeling",
        description: "Translate requirements into proposed structures, workflows, models, diagrams, and interface concepts.",
        competencies: [
          {
            tool: "System design",
            proficiency: "Project experience",
            application: "Planning user roles, features, workflows, and system structure before development.",
            evidence: [blms],
          },
          {
            tool: "Database design",
            proficiency: "Project experience",
            application: "Designing relational models for career records and commodity data, with Prisma migrations and documented relationships.",
            evidence: [careerTrackArchitecture, pricePulseArchitecture],
          },
          {
            tool: "Interface design",
            subTools: "UI/UX · Figma · Wireframing · Prototyping",
            proficiency: "Experienced",
            application: "Designing interfaces, wireframes, and interactive prototypes, including Figma component properties and auto layout.",
            evidence: [blms],
          },
        ],
      },
      {
        id: "documentation-collaboration",
        title: "Documentation & collaboration",
        description: "Record requirements and decisions, organize project information, and communicate with stakeholders and teammates.",
        competencies: [
          {
            tool: "Technical documentation",
            subTools: "Stakeholder communication",
            proficiency: "Experienced",
            application: "Preparing system documents, requirements, and reports while coordinating with clients, mentors, and project teams.",
            evidence: [blms, tumaNow],
          },
        ],
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

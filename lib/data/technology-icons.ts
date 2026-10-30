import { BriefcaseBusiness, ChartNoAxesCombined, ClipboardList, Database, FileText, Landmark, LayoutTemplate, MonitorSmartphone, PencilRuler, Workflow } from "lucide-react";
import { FaCss3Alt } from "react-icons/fa";
import { SiCloudflare, SiEslint, SiExpress, SiGit, SiGithub, SiGoogleanalytics, SiGooglesearchconsole, SiGoogletagmanager, SiGooglesheets, SiHtml5, SiJavascript, SiLucide, SiNextdotjs, SiNodedotjs, SiNpm, SiPandas, SiPostgresql, SiPrisma, SiPython, SiRailway, SiReact, SiScikitlearn, SiSemrush, SiTailwindcss, SiTypescript, SiVercel, SiZod } from "react-icons/si";
import type { IconComponent } from "@/lib/types";

export const technologyIcons: Record<string, IconComponent> = {
  "Next.js": SiNextdotjs,
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  PostgreSQL: SiPostgresql,
  Prisma: SiPrisma,
  "Prisma ORM": SiPrisma,
  "Tailwind CSS": SiTailwindcss,
  HTML: SiHtml5,
  CSS: FaCss3Alt,
  SQL: Database,
  Zod: SiZod,
  Git: SiGit,
  GitHub: SiGithub,
  Vercel: SiVercel,
  Railway: SiRailway,
  "Neon PostgreSQL": SiPostgresql,
  "Cloudflare R2": SiCloudflare,
  "Lucide React": SiLucide,
  Python: SiPython,
  pandas: SiPandas,
  "scikit-learn": SiScikitlearn,
  "Google Analytics 4": SiGoogleanalytics,
  "Google Tag Manager": SiGoogletagmanager,
  "Google Search Console": SiGooglesearchconsole,
  "Google Sheets": SiGooglesheets,
  Semrush: SiSemrush,
  "PDF.js": FileText,
  npm: SiNpm,
  ESLint: SiEslint,
};

/** Nontechnical project responsibilities use interface symbols rather than technology logos. */
export const focusIcons: Record<string, IconComponent> = {
  "Systems Analysis": Workflow,
  "Requirements Gathering": ClipboardList,
  "System Design": PencilRuler,
  "Business Analysis": BriefcaseBusiness,
  "Financial Planning": ChartNoAxesCombined,
  GovTech: Landmark,
  "Information Architecture": LayoutTemplate,
  "Responsive Design": MonitorSmartphone,
  "Frontend Development": SiReact,
};

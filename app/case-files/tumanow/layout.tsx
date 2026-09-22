import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("TumaNow", "A GovTech startup case study covering business analysis, product planning, and a project-monitoring prototype under client evaluation.", "/case-files/tumanow");

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}

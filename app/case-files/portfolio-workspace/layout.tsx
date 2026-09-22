import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Portfolio Workspace", "How I designed and built this professional workspace with Next.js, React, TypeScript, and Tailwind CSS.", "/case-files/portfolio-workspace");

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}

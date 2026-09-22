import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Professional Journey", "Recent software projects, internships, and the timeline of my Information Systems education and experience.", "/journey");

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}

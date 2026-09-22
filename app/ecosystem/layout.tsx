import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Professional Ecosystem", "The internships, institutions, startup teams, and stakeholders behind my professional experience.", "/ecosystem");

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}

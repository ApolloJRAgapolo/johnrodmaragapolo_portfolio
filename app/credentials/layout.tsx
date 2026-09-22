import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Credentials", "Selected awards, professional certifications, course completions, and supporting credential records.", "/credentials");

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}

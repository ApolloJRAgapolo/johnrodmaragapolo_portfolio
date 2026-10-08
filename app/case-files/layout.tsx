import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Case Files / Projects", "Explore deployed applications, capstone prototypes, and startup projects by John Rodmar Agapolo.", "/case-files");

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}

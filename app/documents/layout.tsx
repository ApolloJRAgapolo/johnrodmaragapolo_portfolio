import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Documents", "Preview and download my professional resume, and search supporting certificates and documents.", "/documents");

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}

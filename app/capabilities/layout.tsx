import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Capabilities", "Software development, data analytics, business and systems analysis, and digital analytics tools currently being explored.", "/capabilities");

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}

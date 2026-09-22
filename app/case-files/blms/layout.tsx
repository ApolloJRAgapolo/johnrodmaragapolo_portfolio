import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("BLMS Capstone Prototype", "An award-winning livestock monitoring capstone: requirements, system design, and my role as project manager and systems analyst.", "/case-files/blms");

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}

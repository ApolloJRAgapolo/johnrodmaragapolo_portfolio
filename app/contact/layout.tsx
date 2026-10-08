import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Let's Connect", "Contact John Rodmar Agapolo about entry-level web development and software engineering opportunities.", "/contact");

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}

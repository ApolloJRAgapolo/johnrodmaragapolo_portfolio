import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Let's Connect", "Contact John Rodmar Agapolo about opportunities in software development, data analytics, and business analysis.", "/contact");

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}

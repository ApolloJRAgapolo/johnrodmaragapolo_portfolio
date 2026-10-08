import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "CareerTrack",
  "A personal career operations system connecting opportunities, hiring workflows, private documents, and employment history. A deployed release candidate built with Next.js, Express, and PostgreSQL.",
  "/case-files/careertrack",
);

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return children;
}

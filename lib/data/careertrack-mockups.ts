import assets from "@/lib/data/careertrack-mockup-assets.json";
import type { ProjectImage } from "@/lib/types";

const descriptions: Record<string, string> = {
  "opportunity-desk": "Career direction, active opportunities, and follow-ups in one daily view.",
  applications: "Search and filter opportunities by stage, priority, and company.",
  "application-dossier": "Role details, source material, and key dates in a connected application dossier.",
  pipeline: "Review opportunities by hiring stage, with the next action close at hand.",
  documents: "Resume, cover letter, and portfolio versions linked to an application.",
  insights: "Recorded milestones and source outcomes from application history.",
  companies: "A company register with organization details connected to opportunities and career history.",
  profile: "Professional positioning, career direction, and employment history in one career brief.",
};

export const careertrackMockups: ProjectImage[] = assets.screens.map((screen) => ({
  id: screen.id,
  title: screen.title,
  description: descriptions[screen.id],
  alt: `CareerTrack ${screen.title} shown on desktop and mobile. ${descriptions[screen.id]}`,
  original: { src: `${screen.master.src}?v=${screen.master.sha256.slice(0, 12)}`, width: screen.master.width, height: screen.master.height },
  preview: { src: `${screen.web.src}?v=${screen.web.sha256.slice(0, 12)}`, width: screen.web.width, height: screen.web.height },
  display: { src: `${screen.web.src}?v=${screen.web.sha256.slice(0, 12)}`, width: screen.web.width, height: screen.web.height },
}));

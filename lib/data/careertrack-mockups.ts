import assets from "@/lib/data/careertrack-mockup-assets.json";
import type { ProjectImage } from "@/lib/types";

const descriptions: Record<string, string> = {
  "opportunity-desk": "Follow-ups, deadlines, and interviews in one daily view.",
  applications: "Search and filter opportunities by stage, priority, and company.",
  pipeline: "Review opportunities by hiring stage, with the next action close at hand.",
  insights: "Recorded milestones and source outcomes from application history.",
};

export const careertrackMockups: ProjectImage[] = assets.screens.map((screen) => ({
  id: screen.id,
  title: screen.title,
  description: descriptions[screen.id],
  alt: `CareerTrack ${screen.title} in a browser frame. ${descriptions[screen.id]}`,
  original: { src: `${screen.master.src}?v=${screen.master.sha256.slice(0, 12)}`, width: screen.master.width, height: screen.master.height },
  preview: { src: `${screen.web.src}?v=${screen.web.sha256.slice(0, 12)}`, width: screen.web.width, height: screen.web.height },
  display: { src: `${screen.web.src}?v=${screen.web.sha256.slice(0, 12)}`, width: screen.web.width, height: screen.web.height },
}));

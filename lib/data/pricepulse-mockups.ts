import assets from "@/lib/data/pricepulse-mockup-assets.json";
import type { ProjectImage } from "@/lib/types";

const descriptions: Record<string, string> = {
  explore: "Historical monthly price trends for a selected commodity, location, and reporting range.",
  compare: "Compare locations at a shared reporting month, with supporting price history.",
  basket: "Adjust commodity quantities and compare complete historical basket estimates across locations.",
  analysis: "Inspect monthly observation coverage across locations before interpreting trends.",
  methodology: "Review the data source, imported coverage, and calculation rules behind the dashboard.",
};

export const pricepulseMockups: ProjectImage[] = assets.screens.map((screen) => ({
  id: screen.id,
  title: screen.title,
  description: descriptions[screen.id],
  alt: `PricePulse PH ${screen.title} shown on desktop and mobile. ${descriptions[screen.id]}`,
  original: { src: `${screen.master.src}?v=${screen.master.sha256.slice(0, 12)}`, width: screen.master.width, height: screen.master.height },
  preview: { src: `${screen.web.src}?v=${screen.web.sha256.slice(0, 12)}`, width: screen.web.width, height: screen.web.height },
  display: { src: `${screen.web.src}?v=${screen.web.sha256.slice(0, 12)}`, width: screen.web.width, height: screen.web.height },
}));

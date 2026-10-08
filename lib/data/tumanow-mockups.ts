import assets from "@/lib/data/tumanow-mockup-assets.json";
import type { ProjectImage } from "@/lib/types";

const descriptions: Record<string, string> = {
  "gis-map": "Clustered projects across Iloilo, with approximate locations and map filters.",
  "user-management": "Role-based access controls, with account identities and dates redacted.",
  "public-map": "The public transparency view, with project details and the photograph redacted.",
  "municipality-report": "Completion reporting by municipality, with internal accounting values redacted.",
  "staff-sign-in": "Staff sign-in and public dashboard access, with the support number redacted.",
  "mobile-map": "Mobile mapping and project status, with project identifiers hidden.",
  "mobile-filters": "Filter projects by status, locality, monitoring date, and recipient level.",
  "mobile-new-project": "A blank project-entry form excerpt showing project details, status, and dates.",
  "mobile-sync": "Online synchronization status; push notifications remain off in this simulator capture.",
};

function getMockups(platform: "web" | "mobile"): ProjectImage[] {
  return assets.screens.filter((screen) => screen.platform === platform).map((screen) => ({
    id: screen.id,
    title: screen.title,
    description: descriptions[screen.id],
    alt: `TumaNow ${screen.title} in a ${platform === "web" ? "browser" : "phone"} frame. ${descriptions[screen.id]}`,
    original: { src: `${screen.master.src}?v=${screen.master.sha256.slice(0, 12)}`, width: screen.master.width, height: screen.master.height },
    preview: { src: `${screen.web.src}?v=${screen.web.sha256.slice(0, 12)}`, width: screen.web.width, height: screen.web.height },
    display: { src: `${screen.web.src}?v=${screen.web.sha256.slice(0, 12)}`, width: screen.web.width, height: screen.web.height },
  }));
}

export const tumanowWebMockups = getMockups("web");
export const tumanowMobileMockups = getMockups("mobile");

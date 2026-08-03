import { Community } from "../types";

export const communitiesData: Community[] = [
  {
    id: "comm_kwadra_tbi",
    organization: "ISAT U Kwadra TBI",
    role: "Organizational Intern",
    description: "Executed administrative documentation, budget tracking, and prepared official event materials for incubator sessions like Kapehan Ta.",
    timeline: {
      start: "2026-01",
      end: "2026-06",
    },
    relatedProjectIds: [], // Can be populated as incubator projects are added
    relatedAchievementIds: []
  },
  {
    id: "comm_isatu_section",
    organization: "ISAT U Academic Section",
    role: "Class Mayor",
    description: "Served as the primary academic student leader, coordinating capstone defense schedules, official correspondence, and group assignment logistics.",
    timeline: {
      start: "2025-06",
      end: "Present",
    },
    relatedProjectIds: ["proj_blms"], // Linking your leadership directly to your capstone
    relatedAchievementIds: []
  }
];
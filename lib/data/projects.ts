import { Project } from "../types";

export const projectsData: Project[] = [
  {
    id: "proj_blms",
    slug: "backyard-livestock-monitoring-system",
    title: "Backyard Livestock Monitoring System (BLMS)",
    overview: "A comprehensive monitoring system conceptualized to assist local agriculture through AI triage features and structured data management.",
    problem: "Lack of centralized, accessible data for monitoring the health and status of backyard livestock, leading to inefficient agricultural assistance.",
    objectives: [
      "Design a master system blueprint for livestock tracking.",
      "Implement an AI triage feature for early issue detection.",
      "Streamline communication between farmers and local agricultural sectors."
    ],
    role: "Primary System Designer",
    stakeholders: ["Local Farmers", "Local Government Units (LGU)", "Academic Supervisors"],
    architecture: "The architecture involves distinct user personas, a centralized tracking database, and an AI-driven triage mechanism to categorize livestock health alerts.",
    timeline: {
      start: "2025-12",
      end: "2026-04", // Culminated in the Final Defense on April 6, 2026
    },
    challenges: [
      "Structuring complex agricultural requirements into a digital format.",
      "Coordinating panel invitations and defense logistics alongside development."
    ],
    lessonsLearned: [
      "The critical importance of clear user personas in defining system scope.",
      "How to write formal academic correspondence and handle stakeholder approvals."
    ],
    outcome: "Successfully defended the undergraduate capstone project blueprint and system design.",
    links: {},
    
    // The Graph Connections
    relatedToolkitIds: ["tool_figma", "tool_sys_design"],
    relatedLearningIds: [],
    relatedCommunityIds: ["comm_isatu_section"], 
    relatedAchievementIds: [],
    relatedCareerIds: []
  }
];
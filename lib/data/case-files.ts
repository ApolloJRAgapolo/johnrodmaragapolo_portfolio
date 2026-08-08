import type { CaseFile } from "@/lib/types";

export const caseFiles: CaseFile[] = [
  {
    id: "portfolio-workspace",
    type: "PERSONAL DIGITAL WORKSPACE",
    title: "How I Built This Portfolio",
    summary: "A personal professional website created as an organized digital workspace where visitors can explore my projects, experience, credentials, documents, skills, and professional journey.",
    isAvailable: true,
    metadata: {
      role: "Portfolio Creator",
      client: "Personal Professional Portfolio",
      focus: ["Information Architecture", "Responsive Design", "Frontend Development"],
      status: "Continuously Refined",
      year: "2026",
    },
  },
  {
    id: "blms",
    type: "IS CAPSTONE PROJECT",
    title: "Backyard Livestock Monitoring System",
    summary: "A digital system designed to improve backyard livestock monitoring and reporting. My role focused on system planning, process analysis, user requirements, and overall system design.",
    isAvailable: true,
    metadata: {
      role: "Project Manager & Systems Analyst",
      client: "Municipality of San Miguel — Department of Agriculture",
      focus: ["Systems Analysis", "Requirements Gathering", "System Design"],
      status: "Completed",
      year: "2026",
    },
  },
  {
    id: "tumanow",
    type: "GOVTECH STARTUP",
    title: "TumaNow: Digital Transformation for Local Government",
    summary: "A digital project monitoring platform developed to help government offices monitor community development projects in one centralized system, replacing scattered files and manual reports.",
    isAvailable: true,
    metadata: {
      role: "Co-Founder, Business Analyst, CFO",
      client: "Provincial Planning and Development Office (PPDO)",
      focus: ["Business Analysis", "Financial Planning", "GovTech"],
      status: "Champion & Client Validation",
      year: "2025–Present",
    },
  },
];

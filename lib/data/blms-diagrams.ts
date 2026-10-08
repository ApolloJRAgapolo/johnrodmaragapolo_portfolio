import assets from "@/lib/data/blms-diagram-assets.json";
import type { ProjectDiagram } from "@/lib/types";

function diagram(id: keyof typeof assets, title: string, description: string): ProjectDiagram {
  return { id, title, description, alt: `BLMS ${title.toLowerCase()}. ${description}`, ...assets[id] };
}

export const blmsDiagramGroups = [
  {
    id: "project-approach",
    title: "Project Approach",
    description: "The system's scope and the process used to develop and refine its design.",
    diagrams: [
      diagram("conceptual-framework", "Conceptual Framework", "Connects registration, livestock, health-reporting, market, and administrative inputs to the proposed BLMS processes and output."),
      diagram("methodology", "Design Methodology", "Shows planning, analysis, design, prototyping, evaluation, and refinement leading to the final system design."),
    ],
  },
  {
    id: "system-models",
    title: "System Design",
    description: "User responsibilities, class relationships, and the proposed deployment and security design.",
    diagrams: [
      diagram("use-case", "Use Case Diagram", "Maps the five user roles to their system responsibilities, including livestock records, service requests, reporting, and market transactions."),
      diagram("class-diagram", "Class Diagram", "Models users, households, livestock, health reports, veterinary requests, tasks, announcements, and market transactions with their relationships."),
      diagram("deployment", "Proposed Deployment", "Outlines farmer and staff applications, cloud hosting, backend services, storage, and external SMS, maps, notification, and triage services."),
      diagram("security", "Security Design", "Documents intended authentication, role-based access, encrypted communication, protected storage, and access to triage rules."),
    ],
  },
  {
    id: "user-workflows",
    title: "User Workflows",
    description: "Activity diagrams show how each stakeholder would carry out their tasks in the proposed system.",
    diagrams: [
      diagram("farmer-workflow", "Farmer Activity", "Follows registration and household geotagging through livestock management, health reporting, veterinary requests, and record viewing."),
      diagram("barangay-da-workflow", "Barangay DA Representative Activity", "Shows assigned tasks, farmer registration, livestock management, and reports or service requests submitted on a farmer's behalf."),
      diagram("veterinarian-workflow", "MAO Veterinarian Activity", "Shows veterinary-service management, report and request review, scheduled visits, post-visit reporting, and resolved-case history."),
      diagram("mao-head-workflow", "MAO Head Activity", "Covers maps and trends, farmer and livestock records, staff accounts, announcements, and report generation."),
      diagram("auction-market-workflow", "Auction Market Staff Activity", "Follows transaction creation, optional receipt printing, history review, and transaction voiding."),
    ],
  },
];

export const blmsDiagrams = blmsDiagramGroups.flatMap((group) => group.diagrams);

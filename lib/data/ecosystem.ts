import type { EcosystemNode } from "@/lib/types";

export const ecosystemData = [
  {
    id: "isatu",
    stars: "★★★★★",
    name: "Iloilo Science and Technology University (ISAT U)",
    role: "BS Information Systems",
    contribution: "Built my foundation in systems analysis, software development, documentation, business processes, and leadership.",
    outcomes: ["Magna Cum Laude", "Best Capstone Project", "Foundational Systems Thinking"],
    connections: ["leadership", "kwadra", "wadhwani"],
    links: [
      { label: "Professional Journey (2022–2026)", href: "/journey" }
    ]
  },
  {
    id: "leadership",
    stars: "★★★★★",
    name: "Academic Leadership",
    role: "Class Mayor • Vice Mayor • ANALYTICA Auditor",
    contribution: "Developed foundational soft skills in team coordination, conflict resolution, and stakeholder communication.",
    outcomes: ["Class Mayor", "Class Vice Mayor", "ANALYTICA Auditor", "Peer Coordination"],
    connections: ["isatu", "kwadra"],
    links: [
      { label: "Professional Journey", href: "/journey" }
    ]
  },
  {
    id: "kwadra",
    stars: "★★★★★",
    name: "KWADRA Technology Business Incubator",
    role: "600-Hour Organizational Intern",
    contribution: "Transitioned from academic theory to applied innovation, directly facilitating tech commercialization and startup support.",
    outcomes: [
      "Startup Mentoring", 
      "Innovation Programs", 
      "600-hour Internship", 
      "TumaNow Incubation", 
      "Technology Commercialization"
    ],
    connections: ["isatu", "tumanow", "leadership", "wadhwani"],
    links: [
      { label: "Case File #03: TumaNow", href: "/case-files/tumanow" }
    ]
  },
  {
    id: "wadhwani",
    stars: "★★★★",
    name: "Wadhwani Foundation Philippines",
    role: "Program Support Intern",
    contribution: "Coordinated program participation and monitored progress through the Wadhwani platform across different universities.",
    outcomes: ["Stakeholder Communication", "Progress Monitoring", "Program Coordination"],
    connections: ["isatu", "kwadra"],
    links: [
      { label: "Professional Journey (2026)", href: "/journey" }
    ]
  },
  {
    id: "tumanow",
    stars: "★★★★★",
    name: "TumaNow",
    role: "Co-Founder • Business Analyst • CFO",
    contribution: "Built a startup focused on improving local government project monitoring through digital transformation and precise business analysis.",
    outcomes: ["Champion - Startup Hackathon", "Client Validation", "Incubation Track"],
    connections: ["kwadra", "ppdo", "san-miguel"],
    links: [
      { label: "Case File #03: TumaNow", href: "/case-files/tumanow" }
    ]
  },
  {
    id: "ppdo",
    stars: "★★★★",
    name: "Provincial Planning & Development Office",
    role: "Startup Client",
    contribution: "Engaged with the office during the development of TumaNow to understand deeply rooted project monitoring challenges and propose a targeted digital solution.",
    outcomes: ["Digital Governance Validation", "Client Interviews", "Requirements Analysis"],
    connections: ["tumanow"],
    links: [
      { label: "Case File #03: TumaNow", href: "/case-files/tumanow" }
    ]
  },
  {
    id: "san-miguel",
    stars: "★★★★",
    name: "Municipality of San Miguel",
    role: "Capstone Client (Department of Agriculture)",
    contribution: "Collaborated directly with the agricultural office to develop a digital system improving livestock monitoring and reporting.",
    outcomes: ["BLMS Deployment", "Requirements Gathering", "System Design"],
    connections: ["tumanow", "blms"],
    links: [
      { label: "Case File #02: BLMS", href: "/case-files/blms" }
    ]
  },
  {
    id: "blms",
    stars: "★★★★★",
    name: "Backyard Livestock Monitoring System (BLMS)",
    role: "Systems Architect • Capstone Project",
    contribution: "Engineered a master system blueprint with core AI triage features and comprehensive architecture for the agricultural sector.",
    outcomes: ["Best Capstone Project", "Successful Final Defense (April 2026)", "System Deployment"],
    connections: ["san-miguel", "graduate"],
    links: [
      { label: "Case File #02: BLMS", href: "/case-files/blms" }
    ]
  }
] satisfies EcosystemNode[];



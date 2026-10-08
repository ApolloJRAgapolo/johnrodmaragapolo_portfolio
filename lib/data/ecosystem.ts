type EcosystemRelationship = {
  id: string;
  group: string;
  relationship: string;
  name: string;
  context: string;
  links: { label: string; href: string }[];
};

export const ecosystemGroups = [
  "Industry & innovation",
  "Academic & leadership",
  "Project stakeholders",
] as const;

export const ecosystemData = [
  {
    id: "kwadra",
    group: "Industry & innovation",
    relationship: "Internship & incubation",
    name: "KWADRA Technology Business Incubator",
    context: "ISAT U's incubator connects student startups with mentors and innovation programs. It hosted my internship and TumaNow's incubation.",
    links: [
      { label: "Internship experience", href: "/journey#kwadra-internship" },
      { label: "TumaNow project", href: "/case-files/tumanow" },
    ],
  },
  {
    id: "wadhwani",
    group: "Industry & innovation",
    relationship: "Internship",
    name: "Wadhwani Foundation Philippines",
    context: "Program support connected faculty participants from partner universities through the Wadhwani platform.",
    links: [{ label: "Internship experience", href: "/journey#wadhwani-internship" }],
  },
  {
    id: "tumanow",
    group: "Industry & innovation",
    relationship: "Startup project",
    name: "TumaNow",
    context: "Our startup team connected KWADRA's incubation support with local-government discussions about infrastructure project monitoring.",
    links: [{ label: "TumaNow project and my role", href: "/case-files/tumanow" }],
  },
  {
    id: "isatu",
    group: "Academic & leadership",
    relationship: "Academic institution",
    name: "Iloilo Science and Technology University (ISAT U)",
    context: "My Information Systems education at the Iloilo City Campus brought together software development, systems analysis, and applied projects with external stakeholders.",
    links: [{ label: "Education and academic recognition", href: "/journey#education" }],
  },
  {
    id: "leadership",
    group: "Academic & leadership",
    relationship: "Student leadership",
    name: "Academic Leadership",
    context: "Class representation and the ISAT U ANALYTICA student organization provided separate settings for coordination and organizational accountability.",
    links: [{ label: "Class Mayor, Vice Mayor, and Auditor roles", href: "/journey#student-leadership" }],
  },
  {
    id: "blms",
    group: "Academic & leadership",
    relationship: "Capstone prototype",
    name: "Backyard Livestock Monitoring System (BLMS)",
    context: "The capstone connected university systems-design work with the livestock monitoring and reporting needs of a municipal agricultural office.",
    links: [{ label: "BLMS project and my role", href: "/case-files/blms" }],
  },
  {
    id: "ppdo",
    group: "Project stakeholders",
    relationship: "TumaNow stakeholder",
    name: "Provincial Planning & Development Office",
    context: "The PPDO, Iloilo Province, was consulted on infrastructure project monitoring. Potential adoption of TumaNow remains under evaluation.",
    links: [{ label: "TumaNow stakeholder context", href: "/case-files/tumanow" }],
  },
  {
    id: "san-miguel",
    group: "Project stakeholders",
    relationship: "BLMS stakeholder",
    name: "Municipality of San Miguel",
    context: "The Department of Agriculture served as the capstone client for the BLMS prototype, grounding its requirements in livestock monitoring and health reporting.",
    links: [{ label: "BLMS stakeholder context", href: "/case-files/blms" }],
  },
] satisfies EcosystemRelationship[];

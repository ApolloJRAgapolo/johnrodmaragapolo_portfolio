export type EcosystemRelationship = {
  id: string;
  shortName: string;
  group: string;
  relationship: string;
  name: string;
  context: string;
  involvement: string;
  logo?: string;
  darkLogo?: string;
  whiteInDark?: boolean;
  position: { column: number; row: number };
  links: readonly { label: string; href: string }[];
};

export const ecosystemData = [
  {
    id: "isatu", shortName: "ISAT U", group: "Academic & leadership", relationship: "Education",
    name: "Iloilo Science and Technology University",
    context: "My Information Systems education at the Iloilo City Campus brought together software development, systems analysis, and applied projects with external stakeholders.",
    involvement: "Built my foundation in Information Systems through coursework, team projects, and a capstone grounded in a municipal office's requirements.",
    logo: "/ecosystem/logos/isatu.webp", position: { column: 1, row: 2 },
    links: [{ label: "Education & recognition", href: "/journey#education" }],
  },
  {
    id: "kwadra", shortName: "KWADRA TBI", group: "Industry & innovation", relationship: "Internship & incubation",
    name: "KWADRA Technology Business Incubator",
    context: "ISAT U's incubator connects student startups with mentors and innovation programs. It hosted my internship and TumaNow's incubation.",
    involvement: "Completed a 600-hour student internship, preparing documentation and helping coordinate innovation programs, startup activities, and participants.",
    logo: "/ecosystem/logos/kwadra.webp", darkLogo: "/ecosystem/logos/kwadra-dark.svg", position: { column: 2, row: 1 },
    links: [
      { label: "Internship experience", href: "/journey#kwadra-internship" },
      { label: "TumaNow project", href: "/case-files/tumanow" },
    ],
  },
  {
    id: "tumanow", shortName: "TumaNow", group: "Industry & innovation", relationship: "Startup project",
    name: "TumaNow",
    context: "Our startup team connected KWADRA's incubation support with local-government discussions about infrastructure project monitoring.",
    involvement: "As Co-Founder, Business Analyst, and Chief Financial Officer, I supported stakeholder interviews, requirements, workflows, financial planning, and pitching.",
    logo: "/ecosystem/logos/tumanow.svg", darkLogo: "/ecosystem/logos/tumanow-dark.svg", position: { column: 3, row: 1 },
    links: [{ label: "TumaNow project and my role", href: "/case-files/tumanow" }],
  },
  {
    id: "ppdo", shortName: "Iloilo PPDO", group: "Project stakeholders", relationship: "Stakeholder consultation",
    name: "Provincial Planning & Development Office",
    context: "The PPDO, Iloilo Province, was consulted on infrastructure project monitoring. Potential adoption of TumaNow remains under evaluation.",
    involvement: "Contributed to the team's stakeholder discussions, business requirements, and workflow planning for TumaNow.",
    logo: "/ecosystem/logos/iloilo-province.webp", position: { column: 4, row: 1 },
    links: [{ label: "TumaNow stakeholder context", href: "/case-files/tumanow" }],
  },
  {
    id: "blms", shortName: "BLMS", group: "Academic & leadership", relationship: "Capstone prototype",
    name: "Backyard Livestock Monitoring System",
    context: "The capstone connected university systems-design work with the livestock monitoring and reporting needs of a municipal agricultural office.",
    involvement: "Served as Project Manager and Systems Analyst: gathered requirements, analyzed workflows, planned the project, and coordinated the development team. BLMS is a capstone prototype.",
    position: { column: 2, row: 2 },
    links: [{ label: "BLMS project and my role", href: "/case-files/blms" }],
  },
  {
    id: "san-miguel", shortName: "San Miguel", group: "Project stakeholders", relationship: "Capstone client",
    name: "Municipality of San Miguel",
    context: "The Department of Agriculture served as the capstone client for the BLMS prototype, grounding its requirements in livestock monitoring and health reporting.",
    involvement: "Translated the client's livestock monitoring and reporting needs into requirements and system workflows for the student capstone team.",
    logo: "/ecosystem/logos/san-miguel.webp", position: { column: 3, row: 2 },
    links: [{ label: "BLMS stakeholder context", href: "/case-files/blms" }],
  },
  {
    id: "analytica", shortName: "ANALYTICA", group: "Academic & leadership", relationship: "Student organization",
    name: "ISAT U ANALYTICA",
    context: "My student organization role provided a setting for organizational accountability alongside my academic work.",
    involvement: "Served as Auditor of ISAT U ANALYTICA. This was a separate role from my elected class-representation responsibilities.",
    logo: "/ecosystem/logos/analytica.webp", position: { column: 2, row: 3 },
    links: [{ label: "Student leadership experience", href: "/journey#student-leadership" }],
  },
  {
    id: "leadership", shortName: "Class representation", group: "Academic & leadership", relationship: "Elected leadership",
    name: "Class representation",
    context: "Class representation provided another setting for coordination, communication, and responsibility within my academic community.",
    involvement: "Served as elected Class Mayor in AY 2024–2025 and Class Vice Mayor in AY 2025–2026.",
    position: { column: 3, row: 3 },
    links: [{ label: "Class leadership roles", href: "/journey#student-leadership" }],
  },
  {
    id: "wadhwani", shortName: "Wadhwani Foundation", group: "Industry & innovation", relationship: "Internship",
    name: "Wadhwani Foundation Philippines",
    context: "Program support connected faculty participants from partner universities through the Wadhwani platform.",
    involvement: "As a student intern, coordinated faculty participation, monitored platform progress, maintained communication records, and supported participant engagement.",
    logo: "/ecosystem/logos/wadhwani.webp", darkLogo: "/ecosystem/logos/wadhwani.webp", whiteInDark: true, position: { column: 2, row: 4 },
    links: [{ label: "Internship experience", href: "/journey#wadhwani-internship" }],
  },
  {
    id: "careertrack", shortName: "CareerTrack", group: "Independent projects", relationship: "Independent development",
    name: "CareerTrack",
    context: "A personal career workspace for applications, hiring history, private documents, offers, and employment records. The deployed product is a release candidate.",
    involvement: "Designed and built the frontend, API, database, authentication, and private document storage as the solo developer.",
    logo: "/ecosystem/logos/careertrack.webp", position: { column: 2, row: 5 },
    links: [
      { label: "CareerTrack case file", href: "/case-files/careertrack" },
      { label: "Development experience", href: "/journey#careertrack-development" },
    ],
  },
  {
    id: "pricepulse", shortName: "PricePulse PH", group: "Independent projects", relationship: "Independent development",
    name: "PricePulse PH",
    context: "A dashboard for exploring historical Philippine commodity prices, comparing locations, and estimating household basket costs.",
    involvement: "Built the data import pipeline, analytics, and responsive interface as the solo developer, connecting historical price records to useful comparisons.",
    logo: "/ecosystem/logos/pricepulse.svg", darkLogo: "/ecosystem/logos/pricepulse-dark.svg", position: { column: 3, row: 5 },
    links: [
      { label: "PricePulse case file", href: "/case-files/pricepulse" },
      { label: "Project experience", href: "/journey#project-experience" },
    ],
  },
  {
    id: "learning", shortName: "Learning & communities", group: "Professional development", relationship: "Courses & participation",
    name: "Learning & communities",
    context: "Cisco Networking Academy, DataCamp, AI Ready ASEAN, and AWS Community Day are part of my technical learning and community participation.",
    involvement: "Continue developing technical skills through courses and community events. Completion and participation records are available in my credential archive.",
    position: { column: 2, row: 6 },
    links: [{ label: "Learning & participation records", href: "/credentials" }],
  },
  {
    id: "gci-world", shortName: "GCI World", group: "Professional development", relationship: "Final assignment",
    name: "GCI World April 2026",
    context: "The Matsuo-Iwasawa Laboratory at The University of Tokyo organized GCI World April 2026. The program's final assessment connected data analytics and machine learning with a business proposal about telecommunications customer churn.",
    involvement: "Completed the individual final assignment, analyzing the course dataset, evaluating a Random Forest classifier, and proposing customer retention strategies. The related Certificate of Completion remains a separate credential record.",
    logo: "/ecosystem/logos/matsuo-iwasawa-lab.png", darkLogo: "/ecosystem/logos/matsuo-iwasawa-lab.png", position: { column: 3, row: 6 },
    links: [
      { label: "Customer churn case file", href: "/case-files/customer-churn-prediction" },
      { label: "Related certificate", href: "/credentials" },
    ],
  },
] as const satisfies readonly EcosystemRelationship[];

export type EcosystemId = (typeof ecosystemData)[number]["id"];

// Documented relationships; these are not steps in a hiring pipeline.
export const ecosystemConnections = [
  { from: "isatu", to: "kwadra", label: "University incubator" },
  { from: "kwadra", to: "tumanow", label: "Startup incubation" },
  { from: "tumanow", to: "ppdo", label: "Stakeholder consultation" },
  { from: "isatu", to: "blms", label: "Capstone project" },
  { from: "blms", to: "san-miguel", label: "Capstone client" },
  { from: "isatu", to: "analytica", label: "Student organization" },
  { from: "isatu", to: "leadership", label: "Class representation", below: true },
  { from: "experience", to: "wadhwani", label: "Student internship" },
  { from: "experience", to: "careertrack", label: "Independent development" },
  { from: "experience", to: "pricepulse", label: "Independent development", below: true },
  { from: "experience", to: "learning", label: "Continued learning" },
  { from: "learning", to: "gci-world", label: "Program final assessment" },
] as const satisfies readonly {
  from: EcosystemId | "experience";
  to: EcosystemId;
  label: string;
  below?: boolean;
}[];

export const ecosystemDestinations = [
  "ppdo", "san-miguel", "analytica", "leadership", "wadhwani", "careertrack", "pricepulse", "learning", "gci-world",
] as const satisfies readonly EcosystemId[];

export const ecosystemPaths = [
  { title: "Education & startup", description: "From university foundations to incubation and stakeholder consultation.", nodes: ["isatu", "kwadra", "tumanow", "ppdo"], parallel: false },
  { title: "Capstone & client", description: "An academic prototype shaped by municipal agriculture requirements.", nodes: ["isatu", "blms", "san-miguel"], parallel: false },
  { title: "Student leadership", description: "Two separate roles within my academic community.", nodes: ["analytica", "leadership"], parallel: true },
  { title: "Program support", description: "Faculty coordination and participant engagement during my internship.", nodes: ["wadhwani"], parallel: false },
  { title: "Independent projects", description: "Two products built independently, each adding to my development experience.", nodes: ["careertrack", "pricepulse"], parallel: true },
  { title: "Learning & communities", description: "Courses and community participation supporting continued development.", nodes: ["learning", "gci-world"], parallel: false },
] as const satisfies readonly {
  title: string;
  description: string;
  nodes: readonly EcosystemId[];
  parallel: boolean;
}[];

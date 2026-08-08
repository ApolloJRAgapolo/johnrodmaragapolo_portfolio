import { Award, Brain, Briefcase, BookOpen, Heart, Rocket, ShieldCheck, Terminal, Users } from "lucide-react";
import type { DocumentCollection, DocumentItem, DocumentMetadata } from "@/lib/types";



export const professionalDocs = [
  {
    id: "resume-2026",
    title: "Resume / Curriculum Vitae",
    description: "The latest version of my professional resume, including my education, experience, projects, and achievements.",
    updated: "August 2026",
    fileType: "PDF",
    fileUrl: "/resume/John Rodmar Agapolo Professional Resume.pdf", // Ensure this file exists in your public/docs folder
    aspectRatio: 0.707,
    viewerOptions: { allowDownload: true },
    viewerMetadata: {
      documentType: "Resume / Curriculum Vitae",
      lastUpdated: "August 2026",
      description: "A current overview of education, experience, projects, and achievements.",
    },
  }
];

// Grouped Collections
const baseDocumentCollections = {
  awards: {
    id: "awards",
    title: "Awards & Recognition",
    count: "4 Awards",
    icon: Award,
    skills: ["Academic Excellence", "Innovation", "System Design"],
    progress: "████", 
    items: [
      { id: "magna-cum-laude", title: "Magna Cum Laude", meta: "ISAT U • 2026", tags: ["Academic Excellence"], fileUrl: "/docs/awards/magna-cum-laude.pdf" },
      { id: "best-capstone", title: "Best Capstone Project", meta: "ISAT U (BLMS) • 2026", tags: ["System Design"], fileUrl: "/docs/awards/best-capstone.pdf" },
      { id: "startup-champion", title: "Startup Hackathon Champion", meta: "TumaNow • 2025", tags: ["Innovation", "Business"], fileUrl: "/docs/awards/startup-champion.pdf" },
      { id: "outstanding-intern", title: "Outstanding Intern", meta: "KWADRA TBI • 2026", tags: ["Business"], fileUrl: "/docs/awards/outstanding-intern.pdf" },
    ]
  },
  internships: {
    id: "internships", title: "Internships & Industry Experience", count: "2 Credentials", icon: Briefcase,
    skills: ["Professional Development", "Business Administration", "Project Management"], progress: "██",
    items: [
      { id: "i-1", title: "ISAT U - Kwadra TBI Internship", meta: "Kwadra TBI • 2026", tags: ["Internship", "Business"], fileUrl: "/certificates/Internships/ISAT%20U%20-%20Kwadra%20TBI%20Cert.%20of%20%20Internship.pdf" },
      { id: "i-2", title: "Wadhwani Foundation Philippines Internship", meta: "Wadhwani Foundation", tags: ["Internship", "Business"], fileUrl: "/certificates/Internships/Wadhwani%20Foundation%20Philippines%20Cert.%20of%20Internship.pdf" },
    ]
  },
  leadership: {
    id: "leadership", title: "Leadership & Student Service", count: "3 Credentials", icon: Users,
    skills: ["Team Leadership", "Financial Auditing", "Event Management"], progress: "███",
    items: [
      { id: "l-1", title: "BSIS 3-A Class Mayor Commendation", meta: "ISAT U", tags: ["Leadership"], fileUrl: "/certificates/Leadership%20%26%20Student%20Service/Cert%20of%20Commendation%20as%20BSIS%203-A%20Mayor.pdf" },
      { id: "l-2", title: "ANALYTICA Auditor Certification", meta: "ISAT U", tags: ["Leadership", "Business"], fileUrl: "/certificates/Leadership%20%26%20Student%20Service/Certification%20of%20serving%20as%20AUDITOR%20of%20ANALYTICA.pdf" },
      { id: "l-3", title: "CCI Leadership Training", meta: "ISAT U", tags: ["Leadership"], fileUrl: "/certificates/Leadership%20%26%20Student%20Service/Cert%20of%20Participation%20CCI%20Leadership%20Training.pdf" },
    ]
  },
  startup: {
    id: "startup", title: "Startup & Innovation", count: "3 Credentials", icon: Rocket,
    skills: ["Entrepreneurship", "Pitching", "Venture Building"], progress: "███",
    items: [
      { id: "s-1", title: "Western Visayas Student Startup Summit", meta: "WVSSS", tags: ["Startup", "Innovation"], fileUrl: "/certificates/Startup%20%26%20Innovation/Western%20Visayas%20Student%20Startup%20Summit.pdf" },
      { id: "s-2", title: "Startup Hackathon (Participation)", meta: "Iloilo Province • 2025", tags: ["Startup", "Innovation"], fileUrl: "/certificates/Startup%20%26%20Innovation/2025%20Iloilo%20Province%20Startup%20Hackathon%20Cert.%20of%20Participation.pdf" },
      { id: "s-3", title: "SEC Registration and Program for Startups", meta: "SEC", tags: ["Startup", "Business"], fileUrl: "/certificates/Startup%20%26%20Innovation/Cert%20of%20Participation%20for%20SEC%20Registration%20and%20Program%20for%20Startups.pdf" },
    ]
  },
  ai: {
    id: "ai", title: "Artificial Intelligence & Emerging Tech", count: "6 Credentials", icon: Brain,
    skills: ["Generative AI", "AI Ethics", "Technology Readiness"], progress: "██████",
    items: [
      { id: "ai-1", title: "AI Hackathon Workshop 1", meta: "Workshop", tags: ["AI", "Innovation"], fileUrl: "/certificates/Artificial%20Intelligence/Certificate%20for%20John%20Rodmar%20E.%20Agapolo%20for%20_AI%20Hackathon%20Workshop%201.pdf" },
      { id: "ai-2", title: "AI Hackathon Workshop 2", meta: "Workshop", tags: ["AI", "Innovation"], fileUrl: "/certificates/Artificial%20Intelligence/Certificate%20for%20John%20Rodmar%20E.%20Agapolo%20for%20_AI%20Hackathon%20Workshop%202.pdf" },
      { id: "ai-3", title: "AI Ready ASEAN Certificate", meta: "ASEAN", tags: ["AI"], fileUrl: "/certificates/Artificial%20Intelligence/AGAPOLO%20AI%20READY%20ASEAN%20CERTIFICATE.pdf" },
      { id: "ai-4", title: "CHED RAISE Appearance", meta: "CHED", tags: ["AI", "Research"], fileUrl: "/certificates/Artificial%20Intelligence/AGAPOLO_CHED%20RAISE%20Appearance.pdf" },
      { id: "ai-5", title: "CHED RAISE Participation", meta: "CHED", tags: ["AI", "Research"], fileUrl: "/certificates/Artificial%20Intelligence/AGAPOLO_CHED%20RAISE%20Participation.pdf" },
      { id: "ai-6", title: "AI Ready ASEAN Hour of Code", meta: "ASEAN", tags: ["AI", "Programming"], fileUrl: "/certificates/Artificial%20Intelligence/AI%20READY%20ASEAN%20HOUR%20OF%20CODE.pdf" },
    ]
  },
  research: {
    id: "research", title: "Research, Conferences & Technical Learning", count: "3 Credentials", icon: BookOpen,
    skills: ["Academic Research", "IoT", "Smart Systems"], progress: "███",
    items: [
      { id: "r-1", title: "BiU ISC 2026", meta: "Conference • 2026", tags: ["Research"], fileUrl: "/certificates/Research%20%26%20Conferences/Certificate%20BiU%20ISC%202026%20-%20John%20Rodmar%20E.%20Agapolo.pdf" },
      { id: "r-2", title: "IoT and Smart Systems Webinar", meta: "Technical Webinar", tags: ["Research", "Innovation"], fileUrl: "/certificates/Research%20%26%20Conferences/John%20Rodmar%20E.%20Agapolo%20IOT%20and%20Smart%20Systems%20Webinar%20Certificate.pdf" },
      { id: "r-3", title: "Research Colloquium Appreciation", meta: "ISAT U", tags: ["Research"], fileUrl: "/certificates/Research%20%26%20Conferences/Research%20Colloquium%20Cert.%20of%20Appreciation.pdf" },
    ]
  },
  community: {
    id: "community", title: "Community Extension & Volunteerism", count: "3 Credentials", icon: Heart,
    skills: ["Community Service", "Event Facilitation", "Social Responsibility"], progress: "███",
    items: [
      { id: "v-1", title: "Project ALAM Phase 1 Facilitator", meta: "Community Extension", tags: ["Community"], fileUrl: "/certificates/Community%20Engagement/Cert%20of%20Appreciation%20as%20Facilitator%20of%20Project%20ALAM%20Phase%201.pdf" },
      { id: "v-2", title: "Project ALAM Phase 2 Facilitator", meta: "Community Extension", tags: ["Community"], fileUrl: "/certificates/Community%20Engagement/Cert%20of%20Appreciation%20as%20Facilitator%20of%20Project%20ALAM%20Phase%202.pdf" },
      { id: "v-3", title: "Gift-Giving Outreach", meta: "Volunteer Work", tags: ["Community"], fileUrl: "/certificates/Community%20Engagement/Cert%20of%20participation%20Gift-Giving%20Outreach.pdf" },
    ]
  },
  cisco: {
    id: "cisco",
    title: "Cisco Networking Academy",
    count: "5 Certificates",
    icon: ShieldCheck,
    skills: ["Python", "Data Analytics", "Data Science"],
    progress: "█████",
    items: [
      { id: "c-1", title: "Data Analytics Essentials", meta: "Cisco • 2026", tags: ["Data Analytics"], fileUrl: "/docs/cisco/data-analytics-essentials.pdf" },
      { id: "c-2", title: "Introduction to Data Science", meta: "Cisco • 2026", tags: ["Data Science"], fileUrl: "/docs/cisco/introduction-to-data-science.pdf" },
      { id: "c-3", title: "Data Science Essentials with Python", meta: "Cisco • 2026", tags: ["Data Science", "Python"], fileUrl: "/docs/cisco/data-science-essentials-with-python.pdf" },
      { id: "c-4", title: "Python Essentials 1", meta: "Cisco • 2026", tags: ["Python"], fileUrl: "/docs/cisco/python-essentials-1.pdf" },
      { id: "c-5", title: "Python Essentials 2", meta: "Cisco • 2026", tags: ["Python"], fileUrl: "/docs/cisco/python-essentials-2.pdf" },
    ]
  },
  datacamp: {
    id: "datacamp",
    title: "DataCamp",
    count: "27 Certificates",
    icon: Terminal,
    skills: ["Data Literacy", "AI & MLOps", "Cloud Architecture", "Data Security", "Statistics", "Business Strategy"],
    progress: "███████████████████████████",
    items: [
      // Core
      { id: "d-1", title: "Data Literacy Professional", meta: "DataCamp • 2025", tags: ["Data Analytics", "Business"], fileUrl: "/docs/datacamp/data-literacy-professional.pdf" },
      
      // Data Literacy & Strategy
      { id: "d-2", title: "Introduction to Data Literacy", meta: "DataCamp • 2025", tags: ["Data Analytics"], fileUrl: "/docs/datacamp/introduction-to-data-literacy.pdf" },
      { id: "d-3", title: "Data Literacy Case Study: Remote Working Analysis", meta: "DataCamp • 2025", tags: ["Data Analytics", "Business"], fileUrl: "/docs/datacamp/remote-working-analysis.pdf" },
      { id: "d-4", title: "Data Storytelling Concepts", meta: "DataCamp • 2025", tags: ["Data Analytics", "Business"], fileUrl: "/docs/datacamp/data-storytelling-concepts.pdf" },
      { id: "d-5", title: "Communicating Data Insights", meta: "DataCamp • 2025", tags: ["Data Analytics", "Business"], fileUrl: "/docs/datacamp/communicating-data-insights.pdf" },
      { id: "d-6", title: "Forming Analytical Questions", meta: "DataCamp • 2025", tags: ["Data Analytics", "Business"], fileUrl: "/docs/datacamp/forming-analytical-questions.pdf" },
      { id: "d-7", title: "Introduction to Data Culture", meta: "DataCamp • 2025", tags: ["Data Analytics", "Business"], fileUrl: "/docs/datacamp/introduction-to-data-culture.pdf" },
      { id: "d-8", title: "Introduction to Data", meta: "DataCamp • 2025", tags: ["Data Analytics"], fileUrl: "/docs/datacamp/introduction-to-data.pdf" },
      { id: "d-9", title: "Introduction to Statistics", meta: "DataCamp • 2025", tags: ["Statistics"], fileUrl: "/docs/datacamp/introduction-to-statistics.pdf" },
      { id: "d-10", title: "Dashboard Design Concepts", meta: "DataCamp • 2025", tags: ["Data Analytics", "Data Visualization"], fileUrl: "/docs/datacamp/dashboard-design-concepts.pdf" },
      { id: "d-11", title: "Data Strategy", meta: "DataCamp • 2025", tags: ["Data Analytics", "Business"], fileUrl: "/docs/datacamp/data-strategy.pdf" },

      // AI & MLOps
      { id: "d-12", title: "Understanding Artificial Intelligence", meta: "DataCamp • 2025", tags: ["AI"], fileUrl: "/docs/datacamp/understanding-artificial-intelligence.pdf" },
      { id: "d-13", title: "Implementing AI Solutions in Business", meta: "DataCamp • 2025", tags: ["AI", "Business"], fileUrl: "/docs/datacamp/implementing-ai-solutions-in-business.pdf" },
      { id: "d-14", title: "Machine Learning for Business", meta: "DataCamp • 2025", tags: ["AI", "Business", "Data Science"], fileUrl: "/docs/datacamp/machine-learning-for-business.pdf" },
      { id: "d-15", title: "Introduction to ChatGPT", meta: "DataCamp • 2025", tags: ["AI"], fileUrl: "/docs/datacamp/introduction-to-chatgpt.pdf" },
      { id: "d-16", title: "MLOps Concepts", meta: "DataCamp • 2025", tags: ["AI", "Data Science", "Cloud"], fileUrl: "/docs/datacamp/mlops-concepts.pdf" },
      { id: "d-17", title: "MLOps Deployment and Life Cycling", meta: "DataCamp • 2025", tags: ["AI", "Data Science", "Cloud"], fileUrl: "/docs/datacamp/mlops-deployment-and-life-cycling.pdf" },
      { id: "d-18", title: "Monitoring Machine Learning Concepts", meta: "DataCamp • 2025", tags: ["AI", "Data Science"], fileUrl: "/docs/datacamp/monitoring-machine-learning-concepts.pdf" },

      // Cloud, Architecture & Security
      { id: "d-19", title: "Understanding Microsoft Azure Management", meta: "DataCamp • 2025", tags: ["Cloud"], fileUrl: "/docs/datacamp/understanding-microsoft-azure-management.pdf" },
      { id: "d-20", title: "AWS Concepts", meta: "DataCamp • 2025", tags: ["Cloud"], fileUrl: "/docs/datacamp/aws-concepts.pdf" },
      { id: "d-21", title: "Understanding Modern Data Architecture", meta: "DataCamp • 2025", tags: ["Data Analytics", "Cloud"], fileUrl: "/docs/datacamp/understanding-modern-data-architecture.pdf" },
      { id: "d-22", title: "DevOps Concepts", meta: "DataCamp • 2025", tags: ["Cloud"], fileUrl: "/docs/datacamp/devops-concepts.pdf" },
      { id: "d-23", title: "Introduction to Data Security", meta: "DataCamp • 2025", tags: ["Security"], fileUrl: "/docs/datacamp/introduction-to-data-security.pdf" },
      { id: "d-24", title: "Introduction to Data Privacy", meta: "DataCamp • 2025", tags: ["Security", "Business"], fileUrl: "/docs/datacamp/introduction-to-data-privacy.pdf" },
      { id: "d-25", title: "Introduction to Data Ethics", meta: "DataCamp • 2025", tags: ["Security", "Business"], fileUrl: "/docs/datacamp/introduction-to-data-ethics.pdf" },
      { id: "d-26", title: "Responsible AI Data Management", meta: "DataCamp • 2025", tags: ["AI", "Security"], fileUrl: "/docs/datacamp/responsible-ai-data-management.pdf" },
      { id: "d-27", title: "AI Security and Risk Management", meta: "DataCamp • 2025", tags: ["AI", "Security", "Business"], fileUrl: "/docs/datacamp/ai-security-and-risk-management.pdf" }
    ]
  }
} satisfies Record<string, DocumentCollection>;

const collectionPresentation = {
  awards: { category: "Academic Achievement", documentType: "Certificate of Recognition" },
  internships: { category: "Internship", documentType: "Internship Certificate" },
  leadership: { category: "Leadership", documentType: "Certificate" },
  startup: { category: "Innovation", documentType: "Certificate" },
  ai: { category: "Artificial Intelligence", documentType: "Certificate" },
  research: { category: "Research", documentType: "Conference Certificate" },
  community: { category: "Community Engagement", documentType: "Certificate" },
  cisco: { category: "Professional Certification", documentType: "Professional Certificate" },
  datacamp: { category: "Professional Certification", documentType: "Professional Certificate" },
} as const;

const normalizedIssuers: [RegExp, string][] = [
  [/cisco/i, "Cisco Networking Academy"],
  [/datacamp/i, "DataCamp"],
  [/wadhwani/i, "Wadhwani Foundation Philippines"],
  [/(isat\s*u|blms)/i, "Iloilo Science and Technology University"],
  [/kwadra/i, "ISAT U — KWADRA TBI"],
  [/ai ready asean|asean/i, "AI Ready ASEAN"],
  [/ched/i, "Commission on Higher Education"],
  [/iloilo province/i, "Iloilo Province Government"],
  [/tumanow/i, "TumaNow"],
  [/wvs?ss/i, "Western Visayas Student Startup Summit"],
  [/\bsec\b/i, "Securities and Exchange Commission"],
];

const documentMetadataOverrides: Record<string, Partial<DocumentMetadata>> = {
  "best-capstone": { issuer: "ISAT U - College of Computing and Informatics" },
  "outstanding-intern": { issuer: "ISAT U - College of Computing and Informatics" },
  "startup-champion": { issuer: "Iloilo Province Government" },
};

function inferIssuer(meta: string): string | undefined {
  return normalizedIssuers.find(([pattern]) => pattern.test(meta))?.[1];
}

function inferDescription(title: string, category: string): string {
  if (/magna cum laude/i.test(title)) return "Academic distinction awarded upon graduating with Magna Cum Laude honors.";
  if (/outstanding intern/i.test(title)) return "Recognition awarded for outstanding internship performance.";
  if (category === "Professional Certification") return `Certificate awarded for successfully completing the ${title} course.`;
  if (category === "Internship") return `Certificate documenting completion of the ${title} internship.`;
  if (category === "Research") return `Certificate recognizing participation in ${title}.`;
  return `${category} credential recognizing ${title}.`;
}

function enrichDocument(item: DocumentItem, collectionId: keyof typeof collectionPresentation): DocumentItem {
  const presentation = collectionPresentation[collectionId];
  const issueDate = item.meta.match(/\b(?:19|20)\d{2}\b/)?.[0];
  const viewerMetadata: DocumentMetadata = {
    title: item.title,
    category: presentation.category,
    issuer: inferIssuer(item.meta),
    issuedDate: issueDate,
    documentType: presentation.documentType,
    verificationStatus: "Official Credential",
    description: inferDescription(item.title, presentation.category),
  };

  return {
    ...item,
    aspectRatio: item.aspectRatio ?? 1.414,
    viewerOptions: item.viewerOptions ?? { allowDownload: false },
    viewerMetadata: { ...viewerMetadata, ...item.viewerMetadata, ...documentMetadataOverrides[item.id] },
  };
}

export const documentCollections = Object.fromEntries(
  Object.entries(baseDocumentCollections).map(([id, collection]) => [
    id,
    { ...collection, items: collection.items.map((item) => enrichDocument(item, id as keyof typeof collectionPresentation)) },
  ]),
) as Record<string, DocumentCollection>;

export const documentFilterTags = ["All", "Python", "Data Analytics", "Data Science", "AI", "Cloud", "Security", "Business", "Leadership", "Startup", "Community", "Research"];

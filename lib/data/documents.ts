import { Award, Brain, Briefcase, BookOpen, Heart, Rocket, ShieldCheck, Terminal, Users } from "lucide-react";
import type { CredentialKind, DocumentCollection, DocumentItem, DocumentMetadata, ProfessionalDocument } from "@/lib/types";



export const professionalDocs: ProfessionalDocument[] = [
  {
    id: "resume-2026",
    title: "Resume / Curriculum Vitae",
    description: "The latest version of my professional resume, including my education, experience, projects, and achievements.",
    updated: "August 2026",
    fileType: "PDF",
    fileUrl: "/resume/John Rodmar Agapolo Professional Resume.pdf",
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
    icon: Award,
    skills: ["Academic Excellence", "Innovation", "System Design"],
    progress: "████", 
    items: [
      { id: "magna-cum-laude", title: "Magna Cum Laude", meta: "ISAT U • 2026", tags: ["Academic Excellence"], fileUrl: "/certificates/Awards%20and%20Recognition/Magna%20Cum%20Laude.pdf" },
      { id: "best-capstone", title: "Best Capstone Project", meta: "ISAT U (BLMS) • 2026", tags: ["System Design"], fileUrl: "/certificates/Awards%20and%20Recognition/Cert%20of%20Recognition%20Best%20Capstone%20Research%20Award.pdf" },
      { id: "startup-champion", title: "Startup Hackathon Champion", meta: "TumaNow • 2025", tags: ["Innovation", "Business"], fileUrl: "/certificates/Awards%20and%20Recognition/2025%20Iloilo%20Province%20Startup%20Hackathon%20Cert.%20of%20Recognition.pdf" },
      { id: "outstanding-intern", title: "Outstanding Intern", meta: "KWADRA TBI • 2026", tags: ["Business"], fileUrl: "/certificates/Awards%20and%20Recognition/Cert%20of%20Recognition%20Outstanding%20Intern%20Award.pdf" },
    ]
  },
  internships: {
    id: "internships", title: "Internships & Industry Experience", icon: Briefcase,
    skills: ["Professional Development", "Business Administration", "Project Management"], progress: "██",
    items: [
      { id: "i-1", title: "ISAT U - Kwadra TBI Internship", meta: "Kwadra TBI • 2026", tags: ["Internship", "Business"], fileUrl: "/certificates/Internships/ISAT%20U%20-%20Kwadra%20TBI%20Cert.%20of%20%20Internship.pdf" },
      { id: "i-2", title: "Wadhwani Foundation Philippines Internship", meta: "Wadhwani Foundation", tags: ["Internship", "Business"], fileUrl: "/certificates/Internships/Wadhwani%20Foundation%20Philippines%20Cert.%20of%20Internship.pdf" },
    ]
  },
  leadership: {
    id: "leadership", title: "Leadership & Student Service", icon: Users,
    skills: ["Team Leadership", "Financial Auditing", "Event Management"], progress: "███",
    items: [
      { id: "l-1", title: "BSIS 3-A Class Mayor Commendation", meta: "ISAT U", tags: ["Leadership"], fileUrl: "/certificates/Leadership%20%26%20Student%20Service/Cert%20of%20Commendation%20as%20BSIS%203-A%20Mayor.pdf" },
      { id: "l-2", title: "ANALYTICA Auditor Certification", meta: "ISAT U", tags: ["Leadership", "Business"], fileUrl: "/certificates/Leadership%20%26%20Student%20Service/Certification%20of%20serving%20as%20AUDITOR%20of%20ANALYTICA.pdf" },
      { id: "l-3", title: "CCI Leadership Training", meta: "ISAT U", tags: ["Leadership"], fileUrl: "/certificates/Leadership%20%26%20Student%20Service/Cert%20of%20Participation%20CCI%20Leadership%20Training.pdf" },
    ]
  },
  startup: {
    id: "startup", title: "Startup & Innovation", icon: Rocket,
    skills: ["Entrepreneurship", "Pitching", "Venture Building"], progress: "███",
    items: [
      { id: "s-1", title: "Western Visayas Student Startup Summit", meta: "WVSSS", tags: ["Startup", "Innovation"], fileUrl: "/certificates/Startup%20%26%20Innovation/Western%20Visayas%20Student%20Startup%20Summit.pdf" },
      { id: "s-2", title: "Startup Hackathon (Participation)", meta: "Iloilo Province • 2025", tags: ["Startup", "Innovation"], fileUrl: "/certificates/Startup%20%26%20Innovation/2025%20Iloilo%20Province%20Startup%20Hackathon%20Cert.%20of%20Participation.pdf" },
      { id: "s-3", title: "SEC Registration and Program for Startups", meta: "SEC", tags: ["Startup", "Business"], fileUrl: "/certificates/Startup%20%26%20Innovation/Cert%20of%20Participation%20for%20SEC%20Registration%20and%20Program%20for%20Startups.pdf" },
    ]
  },
  ai: {
    id: "ai", title: "Artificial Intelligence & Emerging Tech", icon: Brain,
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
    id: "research", title: "Research, Conferences & Technical Learning", icon: BookOpen,
    skills: ["Academic Research", "IoT", "Smart Systems"], progress: "███",
    items: [
      { id: "r-1", title: "BiU ISC 2026", meta: "Conference • 2026", tags: ["Research"], fileUrl: "/certificates/Research%20%26%20Conferences/Certificate%20BiU%20ISC%202026%20-%20John%20Rodmar%20E.%20Agapolo.pdf" },
      { id: "r-2", title: "IoT and Smart Systems Webinar", meta: "Technical Webinar", tags: ["Research", "Innovation"], fileUrl: "/certificates/Research%20%26%20Conferences/John%20Rodmar%20E.%20Agapolo%20IOT%20and%20Smart%20Systems%20Webinar%20Certificate.pdf" },
      { id: "r-3", title: "Research Colloquium Appreciation", meta: "ISAT U", tags: ["Research"], fileUrl: "/certificates/Research%20%26%20Conferences/Research%20Colloquium%20Cert.%20of%20Appreciation.pdf" },
      { id: "rdlead-training", title: "TRANCHE #1 RDLead Training", meta: "Iloilo Science and Technology University & National Research Council of the Philippines October 16, 2025", tags: ["AI", "Research"], fileUrl: "/certificates/Research%20%26%20Conferences/Cert%20of%20Participation%20on%20RD%20Lead%20Training.pdf", viewerMetadata: { category: "Research & Professional Development", issuer: "Iloilo Science and Technology University & National Research Council of the Philippines", issuedDate: "October 16, 2025", documentType: "Certificate of Participation", verificationStatus: "Official Credential", description: "Certificate of participation for TRANCHE #1 RDLead Training: Artificial Intelligence (Machine Learning) Training for Textile Research Innovation." } },
      { id: "gci-world-april-2026", title: "GCI World April 2026", meta: "Matsuo-Iwasawa Laboratory, The University of Tokyo • August 31, 2026", tags: ["Research"], fileUrl: "/certificates/Research%20%26%20Conferences/gci-world-april-2026.pdf", viewerMetadata: { category: "Research, Conferences & Technical Learning", issuer: "Matsuo-Iwasawa Laboratory, The University of Tokyo", issuedDate: "August 31, 2026", documentType: "Certificate of Completion", verificationStatus: "Verified", description: "Certificate confirming successful completion of the program and final assessment." } },
      { id: "aws-community-day-philippines-2026", title: "AWS Community Day Philippines 2026", meta: "AWS Community Day Philippines • August 23, 2026", tags: ["Research", "Cloud"], fileUrl: "/certificates/Research%20%26%20Conferences/aws-community-day-philippines-2026.pdf", viewerMetadata: { category: "Research, Conferences & Technical Learning", issuer: "AWS Community Day Philippines", issuedDate: "August 23, 2026", documentType: "Certificate of Participation", verificationStatus: "Verified", description: "Participation certificate for AWS Community Day Philippines 2026; not an AWS professional certification." } },
    ]
  },
  community: {
    id: "community", title: "Community Extension & Volunteerism", icon: Heart,
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
    icon: ShieldCheck,
    skills: ["Python", "Data Analytics", "Data Science"],
    progress: "█████",
    items: [
      { id: "c-1", title: "Data Analytics Essentials", meta: "Cisco • 2026", tags: ["Data Analytics"], fileUrl: "/certificates/Cisco/DataAnalyticsEssentialsUpdate20260803-8-qrux73.pdf" },
      { id: "c-2", title: "Introduction to Data Science", meta: "Cisco • 2026", tags: ["Data Science"], fileUrl: "/certificates/Cisco/IntrotoDataScienceUpdate20260803-8-5pq7dk.pdf" },
      { id: "c-3", title: "Data Science Essentials with Python", meta: "Cisco • 2026", tags: ["Data Science", "Python"], fileUrl: "/certificates/Cisco/DataScienceEssentialswithPythonv120260803-8-hb1gqp.pdf" },
      { id: "c-4", title: "Python Essentials 1", meta: "Cisco • 2026", tags: ["Python"], fileUrl: "/certificates/Cisco/PythonEssentials1Update20260803-8-o1mbik.pdf" },
      { id: "c-5", title: "Python Essentials 2", meta: "Cisco • 2026", tags: ["Python"], fileUrl: "/certificates/Cisco/PythonEssentials2Update20260803-8-vt25m1.pdf" },
    ]
  },
  datacamp: {
    id: "datacamp",
    title: "DataCamp",
    icon: Terminal,
    skills: ["Data Literacy", "AI & MLOps", "Cloud Architecture", "Data Security", "Statistics", "Business Strategy"],
    progress: "███████████████████████████",
    items: [
      // Core
      { id: "d-1", title: "Data Literacy Professional", meta: "DataCamp • 2025", tags: ["Data Analytics", "Business"], fileUrl: "/certificates/Datacamp/DATA%20LITERACY.pdf" },
      
      // Data Literacy & Strategy
      { id: "d-2", title: "Introduction to Data Literacy", meta: "DataCamp • 2025", tags: ["Data Analytics"], fileUrl: "/certificates/Datacamp/Introduction%20to%20Data%20Literacy.pdf" },
      { id: "d-3", title: "Data Literacy Case Study: Remote Working Analysis", meta: "DataCamp • 2025", tags: ["Data Analytics", "Business"], fileUrl: "/certificates/Datacamp/Data%20Literacy%20Case%20Study%20Remote%20Working.pdf" },
      { id: "d-4", title: "Data Storytelling Concepts", meta: "DataCamp • 2025", tags: ["Data Analytics", "Business"], fileUrl: "/certificates/Datacamp/Data%20Storytelling%20Concepts.pdf" },
      { id: "d-5", title: "Communicating Data Insights", meta: "DataCamp • 2025", tags: ["Data Analytics", "Business"], fileUrl: "/certificates/Datacamp/Communicating%20Data%20Insights.pdf" },
      { id: "d-6", title: "Forming Analytical Questions", meta: "DataCamp • 2025", tags: ["Data Analytics", "Business"], fileUrl: "/certificates/Datacamp/Forming%20Analytical%20Questions.pdf" },
      { id: "d-7", title: "Introduction to Data Culture", meta: "DataCamp • 2025", tags: ["Data Analytics", "Business"], fileUrl: "/certificates/Datacamp/Introduction%20to%20Data%20Culture.pdf" },
      { id: "d-8", title: "Introduction to Data", meta: "DataCamp • 2025", tags: ["Data Analytics"], fileUrl: "/certificates/Datacamp/Introduction%20to%20Data.pdf" },
      { id: "d-9", title: "Introduction to Statistics", meta: "DataCamp • 2025", tags: ["Statistics"], fileUrl: "/certificates/Datacamp/Introduction%20to%20Statistics.pdf" },
      { id: "d-10", title: "Dashboard Design Concepts", meta: "DataCamp • 2025", tags: ["Data Analytics", "Data Visualization"], fileUrl: "/certificates/Datacamp/Dashboard%20Design%20Concepts.pdf" },
      { id: "d-11", title: "Data Strategy", meta: "DataCamp • 2025", tags: ["Data Analytics", "Business"], fileUrl: "/certificates/Datacamp/Data%20Strategy.pdf" },

      // AI & MLOps
      { id: "d-12", title: "Understanding Artificial Intelligence", meta: "DataCamp • 2025", tags: ["AI"], fileUrl: "/certificates/Datacamp/Understanding%20Artificial%20Intelligence.pdf" },
      { id: "d-13", title: "Implementing AI Solutions in Business", meta: "DataCamp • 2025", tags: ["AI", "Business"], fileUrl: "/certificates/Datacamp/Implementing%20AI%20Solutions%20in%20Business.pdf" },
      { id: "d-14", title: "Machine Learning for Business", meta: "DataCamp • 2025", tags: ["AI", "Business", "Data Science"], fileUrl: "/certificates/Datacamp/Machine%20Learning%20for%20Business.pdf" },
      { id: "d-15", title: "Introduction to ChatGPT", meta: "DataCamp • 2025", tags: ["AI"], fileUrl: "/certificates/Datacamp/Introduction%20to%20ChatGPT.pdf" },
      { id: "d-16", title: "MLOps Concepts", meta: "DataCamp • 2025", tags: ["AI", "Data Science", "Cloud"], fileUrl: "/certificates/Datacamp/MLOps%20Concepts.pdf" },
      { id: "d-17", title: "MLOps Deployment and Life Cycling", meta: "DataCamp • 2025", tags: ["AI", "Data Science", "Cloud"], fileUrl: "/certificates/Datacamp/MLOps%20Deployment%20and%20Life%20Cycling.pdf" },
      { id: "d-18", title: "Monitoring Machine Learning Concepts", meta: "DataCamp • 2025", tags: ["AI", "Data Science"], fileUrl: "/certificates/Datacamp/Monitoring%20Machine%20Learning%20Concepts.pdf" },

      // Cloud, Architecture & Security
      { id: "d-19", title: "Understanding Microsoft Azure Management", meta: "DataCamp • 2025", tags: ["Cloud"], fileUrl: "/certificates/Datacamp/Understanding%20Microsoft%20Azure%20Management.pdf" },
      { id: "d-20", title: "AWS Concepts", meta: "DataCamp • 2025", tags: ["Cloud"], fileUrl: "/certificates/Datacamp/AWS%20Concepts.pdf" },
      { id: "d-21", title: "Understanding Modern Data Architecture", meta: "DataCamp • 2025", tags: ["Data Analytics", "Cloud"], fileUrl: "/certificates/Datacamp/Understanding%20Modern%20Data%20Architecture.pdf" },
      { id: "d-22", title: "DevOps Concepts", meta: "DataCamp • 2025", tags: ["Cloud"], fileUrl: "/certificates/Datacamp/DevOps%20Concepts.pdf" },
      { id: "d-23", title: "Introduction to Data Security", meta: "DataCamp • 2025", tags: ["Security"], fileUrl: "/certificates/Datacamp/Introduction%20to%20Data%20Security.pdf" },
      { id: "d-24", title: "Introduction to Data Privacy", meta: "DataCamp • 2025", tags: ["Security", "Business"], fileUrl: "/certificates/Datacamp/Introduction%20to%20Data%20Privacy.pdf" },
      { id: "d-25", title: "Introduction to Data Ethics", meta: "DataCamp • 2025", tags: ["Security", "Business"], fileUrl: "/certificates/Datacamp/Introduction%20to%20Data%20Ethics.pdf" },
      { id: "d-26", title: "Responsible AI Data Management", meta: "DataCamp • 2025", tags: ["AI", "Security"], fileUrl: "/certificates/Datacamp/Responsible%20AI%20Data%20Management.pdf" },
      { id: "d-27", title: "AI Security and Risk Management", meta: "DataCamp • 2025", tags: ["AI", "Security", "Business"], fileUrl: "/certificates/Datacamp/AI%20Security%20and%20Risk%20Management.pdf" }
    ]
  }
};

const collectionPresentation = {
  awards: { category: "Academic Achievement", documentType: "Certificate of Recognition" },
  internships: { category: "Internship", documentType: "Internship Certificate" },
  leadership: { category: "Leadership", documentType: "Certificate" },
  startup: { category: "Innovation", documentType: "Certificate" },
  ai: { category: "Artificial Intelligence", documentType: "Certificate" },
  research: { category: "Research", documentType: "Conference Certificate" },
  community: { category: "Community Engagement", documentType: "Certificate" },
  cisco: { category: "Technical Courses", documentType: "Course Completion" },
  datacamp: { category: "Courses & Certification", documentType: "Course Completion" },
} as const;

// Classifications describe the evidence supplied by each record, not its file URL.
const collectionKinds: Record<keyof typeof collectionPresentation, CredentialKind> = {
  awards: "Recognition / award",
  internships: "Internship documentation",
  leadership: "Supporting document",
  startup: "Certificate of participation",
  ai: "Training documentation",
  research: "Certificate of participation",
  community: "Recognition / award",
  cisco: "Course completion",
  datacamp: "Course completion",
};

const documentKinds: Record<string, CredentialKind> = {
  "l-1": "Recognition / award",
  "l-3": "Certificate of participation",
  "ai-4": "Certificate of participation",
  "ai-5": "Certificate of participation",
  "r-3": "Recognition / award",
  "gci-world-april-2026": "Certificate of completion",
  "v-3": "Certificate of participation",
  "d-1": "Professional certification",
};

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
  "d-1": { category: "Professional Certification", documentType: "Professional Certification", description: "Professional certification record for Data Literacy Professional." },
};

function inferIssuer(meta: string): string | undefined {
  return normalizedIssuers.find(([pattern]) => pattern.test(meta))?.[1];
}

function inferDescription(title: string, kind: CredentialKind): string {
  if (/magna cum laude/i.test(title)) return "Academic distinction awarded upon graduating with Magna Cum Laude honors.";
  if (/outstanding intern/i.test(title)) return "Recognition awarded for outstanding internship performance.";
  if (kind === "Course completion") return `Course completion record for ${title}.`;
  if (kind === "Internship documentation") return `Certificate documenting completion of the ${title} internship.`;
  if (kind === "Certificate of participation") return `Certificate recognizing participation in ${title}.`;
  if (kind === "Recognition / award") return `Recognition document for ${title}.`;
  return `Supporting document for ${title}.`;
}

function enrichDocument(item: DocumentItem, collectionId: keyof typeof collectionPresentation): DocumentItem {
  const presentation = collectionPresentation[collectionId];
  const kind = documentKinds[item.id] ?? collectionKinds[collectionId];
  const issueDate = item.meta.match(/\b(?:19|20)\d{2}\b/)?.[0];
  const viewerMetadata: DocumentMetadata = {
    title: item.title,
    category: presentation.category,
    issuer: inferIssuer(item.meta),
    issuedDate: issueDate,
    documentType: kind,
    verificationStatus: "Supporting document",
    description: inferDescription(item.title, kind),
  };

  return {
    ...item,
    kind,
    aspectRatio: item.aspectRatio ?? 1.414,
    viewerOptions: item.viewerOptions ?? { allowDownload: false },
    viewerMetadata: {
      ...viewerMetadata,
      ...item.viewerMetadata,
      ...documentMetadataOverrides[item.id],
      verificationStatus: item.viewerMetadata?.verificationStatus === "Certificate Pending" ? "Certificate Pending" : "Supporting document",
    },
  };
}

export const documentCollections = Object.fromEntries(
  Object.entries(baseDocumentCollections).map(([id, collection]) => [
    id,
    {
      ...collection,
      count: `${collection.items.length} ${collection.items.length === 1 ? "Credential" : "Credentials"}`,
      items: collection.items.map((item) => enrichDocument(item, id as keyof typeof collectionPresentation)),
    },
  ]),
) as Record<string, DocumentCollection>;

// The credential ledger reuses these records so GCI and AWS stay aligned in both views.
export const featuredResearchCredentials = documentCollections.research.items
  .filter((item) => item.id === "gci-world-april-2026" || item.id === "aws-community-day-philippines-2026")
  .map((item) => ({
    title: item.title,
    issuer: item.viewerMetadata?.issuer ?? "",
    kind: item.kind ?? "Supporting document",
    action: "viewer" as const,
    pdfPath: item.fileUrl ?? "",
    aspectRatio: item.aspectRatio,
    viewerMetadata: item.viewerMetadata,
    viewerOptions: item.viewerOptions ?? { allowDownload: false },
  }));

export const documentFilterTags = ["All", "Python", "Data Analytics", "Data Science", "AI", "Cloud", "Security", "Business", "Leadership", "Startup", "Community", "Research"];

export const allCertificates = Object.values(documentCollections).flatMap((collection) => collection.items);
export const verifiedCredentialCount = allCertificates.filter((item) => item.viewerMetadata?.verificationStatus !== "Certificate Pending").length;
export const pendingCredentialCount = allCertificates.length - verifiedCredentialCount;

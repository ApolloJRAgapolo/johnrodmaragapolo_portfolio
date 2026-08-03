"use client";

import { useState } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { 
  FileText, 
  Eye, 
  Download, 
  X, 
  Award, 
  ShieldCheck,
  Search,
  ChevronDown,
  ChevronUp,
  Terminal,
  Briefcase,
  Users,
  Rocket,
  Brain,
  BookOpen,
  Heart
} from "lucide-react";

// --- DATA ARCHITECTURE ---

const professionalDocs = [
  {
    id: "resume-2026",
    title: "Résumé / Curriculum Vitae",
    description: "The latest version of my professional résumé, including my education, experience, projects, and achievements.",
    updated: "August 2026",
    fileType: "PDF",
    fileUrl: "/docs/resume-2026.pdf" // Ensure this file exists in your public/docs folder
  }
];

// Grouped Collections
const collections = {
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
};

const filterTags = ["All", "Python", "Data Analytics", "Data Science", "AI", "Cloud", "Security", "Business", "Leadership", "Startup", "Community", "Research"];

// --- MAIN PAGE COMPONENT ---
export default function CertificationLibrary() {
  const [previewDoc, setPreviewDoc] = useState<{title: string, fileUrl: string} | null>(null);
  const [expandedCol, setExpandedCol] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  // These routes match the exact filenames and folders in public/certificates.
  // Files in public are served from the site root, so spaces must be URL encoded.
  const certificateFileUrl = (item: { title: string; fileUrl: string }) => {
    const exactFiles: Record<string, string> = {
      "Magna Cum Laude": "Awards and Recognition/Magna Cum Laude.pdf",
      "Best Capstone Project": "Awards and Recognition/Cert of Recognition Best Capstone Research Award.pdf",
      "Startup Hackathon Champion": "Awards and Recognition/2025 Iloilo Province Startup Hackathon Cert. of Recognition.pdf",
      "Outstanding Intern": "Awards and Recognition/Cert of Recognition Outstanding Intern Award.pdf",
      "Data Analytics Essentials": "Cisco/DataAnalyticsEssentialsUpdate20260803-8-qrux73.pdf",
      "Introduction to Data Science": "Cisco/IntrotoDataScienceUpdate20260803-8-5pq7dk.pdf",
      "Data Science Essentials with Python": "Cisco/DataScienceEssentialswithPythonv120260803-8-hb1gqp.pdf",
      "Python Essentials 1": "Cisco/PythonEssentials1Update20260803-8-o1mbik.pdf",
      "Python Essentials 2": "Cisco/PythonEssentials2Update20260803-8-vt25m1.pdf",
      "Data Literacy Professional": "Datacamp/DATA LITERACY.pdf",
      "Data Literacy Case Study: Remote Working Analysis": "Datacamp/Data Literacy Case Study Remote Working.pdf",
      "CHED RAISE 2026": "Artificial Intelligence/AGAPOLO_CHED RAISE Appearance.pdf",
      "AI Ready ASEAN": "Artificial Intelligence/AGAPOLO AI READY ASEAN CERTIFICATE.pdf",
    };

    const file = exactFiles[item.title] ?? (item.fileUrl.includes("/datacamp/")
      ? `Datacamp/${item.title}.pdf`
      : undefined);

    return file ? `/certificates/${encodeURIComponent(file).replace(/%2F/g, "/")}` : item.fileUrl;
  };

  const allCertificates = Object.values(collections).flatMap(collection => collection.items);

  // Search and Filter Logic
  const filteredCertificates = allCertificates.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          cert.meta.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === "All" || cert.tags.includes(activeFilter);
    return matchesSearch && matchesFilter;
  });

  const isSearching = searchQuery.length > 0 || activeFilter !== "All";

  // Reusable Document Item (Inner Row)
  const DocumentItem = ({ item }: { item: any }) => {
    const fileUrl = certificateFileUrl(item);
    return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-border/20 hover:bg-secondary/10 transition-all duration-300 px-4 -mx-4 group">
      <div className="transition-transform duration-300 group-hover:translate-x-2">
        <h4 className="text-[13px] font-medium text-foreground">{item.title}</h4>
        <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-1 block">
          {item.meta} • PDF
        </span>
      </div>
      <div className="flex items-center gap-2 mt-3 sm:mt-0 opacity-100 sm:opacity-0 sm:-translate-x-4 sm:group-hover:opacity-100 sm:group-hover:translate-x-0 transition-all duration-300 ease-out">
        <button 
          onClick={() => setPreviewDoc({ title: item.title, fileUrl })}
          className="text-[11px] font-medium text-foreground hover:bg-foreground hover:text-background border border-border/40 px-3 py-1.5 transition-colors"
        >
          Preview
        </button>
        <a 
          href={fileUrl}
          download
          className="text-[11px] font-medium bg-foreground text-background hover:bg-foreground/80 px-3 py-1.5 transition-colors inline-block shadow-sm"
        >
          Download
        </a>
      </div>
    </div>
    );
  };

  return (
    <main className="flex-1 min-h-screen bg-background selection:bg-foreground selection:text-background pb-32">
      <div className="max-w-4xl mx-auto px-8 py-16 lg:px-16 lg:py-24 w-full">
        
        {/* HEADER */}
        <RevealOnScroll>
        <header className="mb-16">
          <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground mb-8">
            <span className="text-foreground">Workspace</span>
            <span>/</span>
            <span>Knowledge Repository</span>
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-6">
            Certification Library
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-2xl">
            A curated repository of my professional documentation, verified certifications, and technical upskilling.
          </p>
        </header>
        </RevealOnScroll>

        {/* PROFESSIONAL DOCUMENTS (Fixed/Uncollapsible) */}
        <RevealOnScroll delay={100}>
        <section className="mb-16">
          <h2 className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6 border-b border-border/40 pb-4">
            Primary Document
          </h2>
          <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-border/40 hover:bg-secondary/5 transition-colors px-4 -mx-4 rounded-sm group">
            <div className="flex items-start gap-4">
              <FileText className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors mt-1" />
              <div>
                <h3 className="text-[15px] font-semibold text-foreground tracking-tight">{professionalDocs[0].title}</h3>
                <p className="text-[13px] text-muted-foreground mt-1 max-w-lg">{professionalDocs[0].description}</p>
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60 mt-3 block">
                  Updated: {professionalDocs[0].updated} • Format: {professionalDocs[0].fileType}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-4 md:mt-0 pl-9 md:pl-0">
              <button 
                onClick={() => setPreviewDoc({ title: professionalDocs[0].title, fileUrl: professionalDocs[0].fileUrl })}
                className="flex items-center gap-2 px-4 py-2 border border-border/40 text-[12px] font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                <Eye className="w-3.5 h-3.5" /> Preview
              </button>
              <a 
                href={professionalDocs[0].fileUrl}
                download
                className="flex items-center gap-2 px-4 py-2 bg-foreground text-background text-[12px] font-medium hover:bg-foreground/80 transition-colors"
              >
                <Download className="w-3.5 h-3.5" /> Download
              </a>
            </div>
          </div>
        </section>
        </RevealOnScroll>

        {/* LEARNING OVERVIEW DASHBOARD */}
        <RevealOnScroll delay={100}>
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border border-border/40 p-6 bg-secondary/5 rounded-sm">
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">56</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Certificates Earned</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">9</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Learning Providers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">400+</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Hours of Learning</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-1">12</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Technical Domains</div>
            </div>
          </div>
        </section>
        </RevealOnScroll>

        {/* SEARCH & FILTERS */}
        <RevealOnScroll>
        <section className="mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search certificates, skills, or providers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-background border border-border/40 pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors rounded-sm"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {filterTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider transition-colors border ${
                  activeFilter === tag 
                  ? 'border-foreground bg-foreground text-background' 
                  : 'border-border/40 text-muted-foreground hover:border-foreground/50 hover:text-foreground'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>
        </RevealOnScroll>

        {/* COLLECTIONS / RESULTS VIEW */}
        <section>
          
          {/* SEARCH RESULTS MODE */}
          {isSearching ? (
            <div className="border-t border-border/40 pt-8">
              <h2 className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Search Results ({filteredCertificates.length})
              </h2>
              {filteredCertificates.length > 0 ? (
                filteredCertificates.map(cert => <DocumentItem key={cert.id} item={cert} />)
              ) : (
                <div className="text-sm text-muted-foreground py-8 text-center border border-dashed border-border/40">
                  No certificates found matching your criteria.
                </div>
              )}
            </div>
          ) : (
            
          /* COLLECTIONS MODE */
          <div className="flex flex-col gap-6">
            {Object.values(collections).map((collection, index) => {
              const isExpanded = expandedCol === collection.id;
              
              return (
                <RevealOnScroll key={collection.id} delay={index * 100}>
                <div className="border border-border/40 rounded-sm overflow-hidden">
                  {/* Collection Header (Clickable) */}
                  <div 
                    onClick={() => setExpandedCol(isExpanded ? null : collection.id)}
                    className="p-6 cursor-pointer hover:bg-secondary/5 transition-colors group flex flex-col md:flex-row md:items-center justify-between"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <collection.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                        <h3 className="text-lg font-semibold text-foreground tracking-tight">{collection.title}</h3>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-[12px] text-muted-foreground mb-4 md:mb-0">
                        <span className="font-mono uppercase tracking-widest text-foreground">{collection.count}</span>
                        <span className="hidden sm:inline text-border/40">|</span>
                        <div className="flex flex-wrap gap-1.5">
                          {collection.skills.map((skill, i) => (
                            <span key={i} className="after:content-['•'] after:ml-1.5 last:after:content-[''] after:text-border/40">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 md:mt-0 flex flex-col md:items-end justify-between md:ml-8 w-full md:w-auto">
                      <div className="text-[8px] tracking-[0.3em] font-mono text-muted-foreground/40 mb-3 hidden md:block">
                        {collection.progress}
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-foreground border border-border/40 px-4 py-2 group-hover:bg-foreground group-hover:text-background transition-colors self-start md:self-end">
                        {isExpanded ? "Close Collection" : "View Collection"}
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Items List */}
                  <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 bg-secondary/5 border-t border-border/20">
                      <div className="pt-2">
                        {collection.items.map(item => (
                          <DocumentItem key={item.id} item={item} />
                        ))}
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                </RevealOnScroll>
              );
            })}
          </div>
          )}
        </section>

        {/* FUTURE-PROOF FOOTER */}
        <RevealOnScroll delay={100}>
        <footer className="pt-16 mt-16 border-t border-border/20">
          <p className="text-[12px] leading-relaxed text-muted-foreground/60 max-w-lg font-mono">
            // This repository will continue to expand as I complete new certifications and finalize project documentation throughout my career architecture.
          </p>
        </footer>
        </RevealOnScroll>

      </div>

      {/* PREVIEW MODAL OVERLAY */}
      {previewDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setPreviewDoc(null)}
          />
          <div className="relative w-full max-w-4xl h-[85vh] bg-card border border-border/40 shadow-2xl flex flex-col rounded-sm animate-in fade-in zoom-in-95 slide-in-from-bottom-8 duration-500 ease-out">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border/40 bg-muted/20">
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-muted-foreground animate-pulse" />
                <h3 className="text-sm font-medium text-foreground">{previewDoc.title}</h3>
              </div>
              <button 
                onClick={() => setPreviewDoc(null)}
                className="p-2 hover:bg-muted rounded-sm transition-transform hover:rotate-90 duration-300 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body (Real PDF Preview) */}
            <div className="flex-1 bg-secondary/10 p-4 md:p-8 overflow-hidden flex items-start justify-center relative">
              {/* This iframe will securely display the PDF in the browser */}
              <iframe 
                src={`${previewDoc.fileUrl}#toolbar=0&navpanes=0&scrollbar=0`} 
                className="w-full h-full border border-border/20 shadow-sm bg-background rounded-sm animate-in fade-in duration-700 delay-200 fill-mode-both"
                title={previewDoc.title}
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-border/40 bg-muted/20 flex justify-end gap-3">
              <button 
                onClick={() => setPreviewDoc(null)}
                className="px-4 py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Close
              </button>
              <a 
                href={previewDoc.fileUrl}
                download
                className="flex items-center gap-2 px-4 py-2 bg-foreground text-background text-xs font-medium hover:bg-foreground/80 transition-all rounded-sm hover:scale-105 active:scale-95"
              >
                <Download className="w-3.5 h-3.5" />
                Download Document
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

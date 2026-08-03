import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, ExternalLink, FileText, Award, GraduationCap, Briefcase } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";

// --- DATA CONFIGURATION ---

const coreCertifications = [
  { title: "Data Literacy Professional", issuer: "DataCamp", logoSrc: "/badges/datacamp-icon.svg", url: "https://www.datacamp.com/skill-verification/DL0031410567271" },
  { title: "Data Analytics Essentials", issuer: "Cisco Networking Academy", logoSrc: "/badges/cisco-com-logo.png", url: "https://www.credly.com/badges/d83d6751-8f73-4e64-a57c-d45424430446/public_url" },
  { title: "Introduction to Data Science", issuer: "Cisco Networking Academy", logoSrc: "/badges/cisco-com-logo.png", url: "https://www.credly.com/badges/3654afa3-6bf8-4b80-90c0-2feeb48cf3eb/public_url" },
  { title: "Data Science Essentials with Python", issuer: "Cisco Networking Academy", logoSrc: "/badges/cisco-com-logo.png", url: "https://www.credly.com/badges/780f0ce9-09dd-44ca-bfa7-2b356805331f/public_url" },
  { title: "Python Essentials 1", issuer: "Cisco Networking Academy", logoSrc: "/badges/cisco-com-logo.png", url: "https://www.credly.com/badges/a3d5ebf1-3053-42ae-bc85-f53739917f8a/public_url" },
  { title: "Python Essentials 2", issuer: "Cisco Networking Academy", logoSrc: "/badges/cisco-com-logo.png", url: "https://www.credly.com/badges/9f9024da-9abe-42dc-877a-204d83d2e829/public_url" }
];

const dataLiteracy = [
  { title: "Introduction to Data Literacy", issuer: "DataCamp", logoSrc: "/badges/datacamp-icon.svg", url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/6edeb397b284650103e43ef4f368db79b3538441?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa" },
  { title: "Data Literacy Case Study: Remote Working Analysis", issuer: "DataCamp", logoSrc: "/badges/datacamp-icon.svg", url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/50a8fc9cbd1e32479717de0c15fd0c7dd72be26b?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa" },
  { title: "Data Storytelling Concepts", issuer: "DataCamp", logoSrc: "/badges/datacamp-icon.svg", url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/ab6bdfc5cddddcd6a61e2ecec5be1b3db466a424?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa" },
  { title: "Communicating Data Insights", issuer: "DataCamp", logoSrc: "/badges/datacamp-icon.svg", url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/a71ffa642122376bb19cbb47fc8213c999d3de28?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa" },
  { title: "Forming Analytical Questions", issuer: "DataCamp", logoSrc: "/badges/datacamp-icon.svg", url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/45ce015e649559982d9ba804ffddc9eb8b24c1d6?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa" },
  { title: "Introduction to Data Culture", issuer: "DataCamp", logoSrc: "/badges/datacamp-icon.svg", url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/3652099ec58fb7aba1e06681918ed22ae1d9c228?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa" },
  { title: "Introduction to Data", issuer: "DataCamp", logoSrc: "/badges/datacamp-icon.svg", url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/6e4af68e991851f3bc06637978587bc365601a16?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa" },
  { title: "Introduction to Statistics", issuer: "DataCamp", logoSrc: "/badges/datacamp-icon.svg", url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/9743c20590add0cc9562a6b5c6fd46a230144a5e?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa" },
  { title: "Dashboard Design Concepts", issuer: "DataCamp", logoSrc: "/badges/datacamp-icon.svg", url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/86fe51f4fc1e354dda317e61083907e0e9c4780d?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa" },
  { title: "Data Strategy", issuer: "DataCamp", logoSrc: "/badges/datacamp-icon.svg", url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/b90b7d60fdadb564fb6c5416bdbc8db91fe0e962?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa" }
];

const aiAndMlops = [
  { title: "Understanding Artificial Intelligence", issuer: "DataCamp", logoSrc: "/badges/datacamp-icon.svg", url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/035b46d4ea70c4eea43ab83193181c199a1a8415?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa" },
  { title: "Implementing AI Solutions in Business", issuer: "DataCamp", logoSrc: "/badges/datacamp-icon.svg", url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/bbc4c2d3ee7cff9b3985e92f285c046db923a8d7?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa" },
  { title: "Machine Learning for Business", issuer: "DataCamp", logoSrc: "/badges/datacamp-icon.svg", url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/ad0bd3efa3d98eaa9d2bf0629e77755454730fb9?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa" },
  { title: "Introduction to ChatGPT", issuer: "DataCamp", logoSrc: "/badges/datacamp-icon.svg", url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/ee7037bf0136147783e6eb694f53ab16c2ee2262?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa" },
  { title: "MLOps Concepts", issuer: "DataCamp", logoSrc: "/badges/datacamp-icon.svg", url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/265f3280f11917d294009676f2742f99d5bc6982?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa" },
  { title: "MLOps Deployment and Life Cycling", issuer: "DataCamp", logoSrc: "/badges/datacamp-icon.svg", url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/d28beec597c562bd146dba96d640c46d07665510?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa" },
  { title: "Monitoring Machine Learning Concepts", issuer: "DataCamp", logoSrc: "/badges/datacamp-icon.svg", url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/37661e0ce46baae1c284f8efec639d73dab22a27?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa" }
];

const cloudAndSecurity = [
  { title: "Understanding Microsoft Azure Management", issuer: "DataCamp", logoSrc: "/badges/datacamp-icon.svg", url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/80f4faf3b46fb49feedddb8630248bb03fa5495d?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa" },
  { title: "AWS Concepts", issuer: "DataCamp", logoSrc: "/badges/datacamp-icon.svg", url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/c767a266e3e2eda32fc2abee72af1c05dc96647b?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa" },
  { title: "Understanding Modern Data Architecture", issuer: "DataCamp", logoSrc: "/badges/datacamp-icon.svg", url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/f625abb86cbfd770079b1a41e0f51f74a8e06062?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa" },
  { title: "DevOps Concepts", issuer: "DataCamp", logoSrc: "/badges/datacamp-icon.svg", url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/831a5206023d0e5c3983f29180f0ef9b95619f0e?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa" },
  { title: "Introduction to Data Security", issuer: "DataCamp", logoSrc: "/badges/datacamp-icon.svg", url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/24f8c5ae0860d70cbed5a0a01b439a7f71468b60?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa" },
  { title: "Introduction to Data Privacy", issuer: "DataCamp", logoSrc: "/badges/datacamp-icon.svg", url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/733f6bfa03a49501fe2bc81baeabbf1a66eb3a78?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa" },
  { title: "Introduction to Data Ethics", issuer: "DataCamp", logoSrc: "/badges/datacamp-icon.svg", url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/42dd737ee26e1f33623e32da0c4fd2a838e9b670?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa" },
  { title: "Responsible AI Data Management", issuer: "DataCamp", logoSrc: "/badges/datacamp-icon.svg", url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/5d2f758d95a3f388d342c3e6aa84508c6d0d50ad?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa" },
  { title: "AI Security and Risk Management", issuer: "DataCamp", logoSrc: "/badges/datacamp-icon.svg", url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/2a82b29dabe7a10ed15e470ef7c5ba515ac8c75a?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa" }
];

// --- REUSABLE UI COMPONENT ---

function CredentialItem({ 
  title, 
  issuer, 
  url, 
  logoSrc, 
  icon: Icon = ShieldCheck 
}: { 
  title: string, 
  issuer: string, 
  url: string, 
  logoSrc?: string, 
  icon?: any 
}) {
  const isPending = url === "#";
  return (
    <div className="group flex flex-col justify-between p-6 border border-border/40 hover:border-foreground/20 transition-colors bg-secondary/5 h-full">
      <div>
        <Icon className="w-4 h-4 stroke-[1.5] text-muted-foreground mb-4" />
        <h4 className="text-[13px] font-medium text-foreground leading-snug mb-2">{title}</h4>
        
        <div className="flex items-center gap-2">
          {logoSrc && (
            <div className="relative w-4 h-4 opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
              <Image 
                src={logoSrc} 
                alt={`${issuer} logo`} 
                fill 
                className="object-contain"
              />
            </div>
          )}
          <p className="text-[11px] text-muted-foreground font-mono uppercase tracking-wider">{issuer}</p>
        </div>
      </div>
      <div className="mt-6 pt-4 border-t border-border/40">
        {isPending ? (
          <span className="text-[10px] text-muted-foreground/50 uppercase tracking-widest flex items-center gap-2">
            Verification Pending
          </span>
        ) : (
          <Link href={url} target="_blank" className="text-[10px] text-foreground uppercase tracking-widest flex items-center gap-2 hover:text-muted-foreground transition-colors">
            Verify Source <ExternalLink className="w-3 h-3 stroke-[1.5]" />
          </Link>
        )}
      </div>
    </div>
  );
}

// --- MAIN PAGE ---

export default function Credentials() {
  return (
    <main className="flex-1 h-screen overflow-y-auto bg-background selection:bg-foreground selection:text-background">
      <div className="max-w-5xl mx-auto px-8 py-16 lg:px-16 lg:py-24 w-full">
        
        {/* HEADER */}
        <RevealOnScroll delay={0}>
          <header className="mb-24">
            <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground mb-8">
              <span className="text-foreground">Credentials Ledger</span>
              <span>/</span>
              <span>35 Verified Nodes</span>
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight text-foreground mb-6">
              Verified Credentials
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-2xl">
              A verified record of my certifications, academic achievements, and professional development.
            </p>
          </header>
        </RevealOnScroll>

        {/* SECTION 1: ACADEMIC & AWARDS */}
        <section className="mb-24">
          <RevealOnScroll delay={0}>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-8 border-b border-border/40 pb-3 flex items-center gap-2">
              <Award className="w-3.5 h-3.5 stroke-[1.5]" />
              Honors, Awards & Internships
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <RevealOnScroll delay={100} className="h-full"><CredentialItem title="Magna Cum Laude" issuer="Academic Honors" url="#" icon={GraduationCap} /></RevealOnScroll>
            <RevealOnScroll delay={150} className="h-full"><CredentialItem title="Best Capstone Project Award" issuer="Academic Honors" url="#" icon={Award} /></RevealOnScroll>
            <RevealOnScroll delay={200} className="h-full"><CredentialItem title="Outstanding Intern Award" issuer="Academic Honors" url="#" icon={Award} /></RevealOnScroll>
            <RevealOnScroll delay={250} className="h-full"><CredentialItem title="Iloilo Province Startup Hackathon Champion" issuer="Awards & Competitions" url="#" icon={Award} /></RevealOnScroll>
            <RevealOnScroll delay={300} className="h-full"><CredentialItem title="Global Consumer Intelligence (GCI)" issuer="The University of Tokyo - Matsuo-Iwasawa Laboratory" url="#" icon={FileText} /></RevealOnScroll>
            <RevealOnScroll delay={350} className="h-full"><CredentialItem title="ISAT U - Kwadra TBI" issuer="Internship Documentation" url="#" icon={Briefcase} /></RevealOnScroll>
            <RevealOnScroll delay={400} className="h-full"><CredentialItem title="Wadhwani Foundation Philippines" issuer="Internship Documentation" url="#" icon={Briefcase} /></RevealOnScroll>
          </div>
        </section>

        {/* SECTION 2: CORE CERTIFICATIONS */}
        <section className="mb-24">
          <RevealOnScroll delay={0}>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-8 border-b border-border/40 pb-3 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 stroke-[1.5]" />
              Core Professional Certifications
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreCertifications.map((cert, i) => (
              <RevealOnScroll key={i} delay={(i + 1) * 100} className="h-full">
                <CredentialItem title={cert.title} issuer={cert.issuer} logoSrc={cert.logoSrc} url={cert.url} />
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* SECTION 3: DATA LITERACY */}
        <section className="mb-24">
          <RevealOnScroll delay={0}>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-8 border-b border-border/40 pb-3">
              Data Literacy & Strategy
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dataLiteracy.map((cert, i) => (
              <RevealOnScroll key={i} delay={(i + 1) * 100} className="h-full">
                <CredentialItem title={cert.title} issuer={cert.issuer} logoSrc={cert.logoSrc} url={cert.url} />
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* SECTION 4: AI & MLOPS */}
        <section className="mb-24">
          <RevealOnScroll delay={0}>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-8 border-b border-border/40 pb-3">
              Artificial Intelligence & MLOps
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiAndMlops.map((cert, i) => (
              <RevealOnScroll key={i} delay={(i + 1) * 100} className="h-full">
                <CredentialItem title={cert.title} issuer={cert.issuer} logoSrc={cert.logoSrc} url={cert.url} />
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* SECTION 5: CLOUD & SECURITY */}
        <section className="mb-12">
          <RevealOnScroll delay={0}>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-8 border-b border-border/40 pb-3">
              Cloud, Architecture & Security
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cloudAndSecurity.map((cert, i) => (
              <RevealOnScroll key={i} delay={(i + 1) * 100} className="h-full">
                <CredentialItem title={cert.title} issuer={cert.issuer} logoSrc={cert.logoSrc} url={cert.url} />
              </RevealOnScroll>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
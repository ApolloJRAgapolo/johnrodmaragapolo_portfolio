"use client";


import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  Briefcase,
  Download,
  FileText,
  MapPin,
  Terminal,
} from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { contactMethods, profileLinks } from "@/lib/data/contact";

export default function ContactPage() {
  return (
    <main className="flex-1 min-h-screen overflow-y-auto bg-background pb-32 selection:bg-foreground selection:text-background">
      <div className="w-full max-w-4xl mx-auto px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24">
        <RevealOnScroll>
          <header className="mb-20">
            <div className="mb-8 flex items-center gap-4 text-[10px] font-mono text-muted-foreground">
              <span className="flex items-center gap-1.5 text-foreground">
                <Terminal className="h-3 w-3" /> Communication Protocol
              </span>
              <span>/</span>
              <span>Open</span>
            </div>
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground">Let&apos;s Connect</h1>
            <p className="max-w-2xl text-xl font-light leading-relaxed text-muted-foreground">
              Thank you for visiting my professional workspace. Whether you have an opportunity, a collaboration in mind, or simply want to connect, I&apos;d be happy to hear from you.
            </p>
          </header>
        </RevealOnScroll>

        <div className="mb-16 h-px w-full bg-border/40" />

        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <RevealOnScroll delay={100} className="h-full">
            <section className="h-full border border-border/40 bg-card/30 p-8">
              <h2 className="mb-8 flex items-center gap-2 border-b border-border/40 pb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                <Activity className="h-3.5 w-3.5 stroke-[1.5]" /> Professional Availability
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Status</h3>
                  <div className="flex items-center gap-2 text-[14px] font-medium text-foreground">
                    <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" /></span>
                    Available for Entry-Level Opportunities
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Location</h3>
                  <div className="flex items-center gap-2 text-[14px] text-foreground"><MapPin className="h-4 w-4 text-muted-foreground" /> Iloilo City, Philippines</div>
                </div>
                <div>
                  <h3 className="mb-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Preferred Roles</h3>
                  <ul className="space-y-2">
                    {["Junior Business Analyst", "Junior Data Analyst", "Junior Systems Analyst", "Junior Project Manager", "Junior Software Developer", "Project Technical Assistant", "Intellectual Property Management Associate", "Any Entry-Level IT or GovTech Role"].map((role) => (
                      <li key={role} className="flex items-center gap-2 text-[13px] text-foreground"><Briefcase className="h-3.5 w-3.5 shrink-0 text-muted-foreground" /> {role}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </RevealOnScroll>

          <RevealOnScroll delay={200} className="h-full">
            <section className="flex h-full flex-col border border-border/40 bg-card/30 p-8">
              <h2 className="mb-8 flex items-center gap-2 border-b border-border/40 pb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground"><Terminal className="h-3.5 w-3.5 stroke-[1.5]" /> Contact Information</h2>
              <div className="flex flex-1 flex-col justify-center gap-2">
                {contactMethods.map(({ label, value, href, icon: Icon }) => (
                  <Link key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="group flex min-h-24 flex-col justify-center gap-2 border border-border/40 p-4 transition-all hover:border-foreground/30 hover:bg-secondary/5">
                    <span className="flex items-center justify-between gap-3"><span className="flex items-center gap-3"><Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" /><span className="text-[13px] font-medium text-foreground">{label}</span></span><ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" /></span>
                    <span className="pl-7 text-[12px] text-muted-foreground">{value}</span>
                  </Link>
                ))}
              </div>
            </section>
          </RevealOnScroll>
        </div>

        <div className="mb-16 h-px w-full bg-border/40" />

        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <RevealOnScroll delay={100}><section><h2 className="mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Quick Introduction</h2><p className="border-l-2 border-foreground/20 py-1 pl-4 text-[15px] leading-relaxed text-muted-foreground">I&apos;m a BS Information Systems graduate who enjoys understanding problems, improving processes, and building practical digital solutions. I&apos;m continuously learning and looking forward to contributing to meaningful projects.</p></section></RevealOnScroll>
          <RevealOnScroll delay={200}><section><h2 className="mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Currently Interested In</h2><div className="flex flex-wrap gap-2">{["Business Process Analysis", "Systems Analysis", "Government Digital Transformation", "Data Analytics", "AI-assisted Solutions"].map((interest) => <span key={interest} className="border border-border/40 bg-secondary/5 px-3 py-1.5 text-[11px] font-mono text-foreground">{interest}</span>)}</div></section></RevealOnScroll>
        </div>

        <div className="mb-16 h-px w-full bg-border/40" />

        <div className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <RevealOnScroll delay={100} className="col-span-1 lg:col-span-7">
            <section><h2 className="mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Professional Profiles</h2><div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{profileLinks.map(({ label, description, href, icon: Icon }) => <Link key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="group flex flex-col border border-border/40 p-5 transition-all hover:border-foreground/30 hover:bg-secondary/5"><div className="mb-4 flex items-start justify-between"><Icon className="h-5 w-5 text-foreground" /><ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" /></div><h3 className="text-[14px] font-medium text-foreground">{label}</h3><p className="mt-1 text-[12px] text-muted-foreground">{description}</p></Link>)}</div></section>
          </RevealOnScroll>
          <RevealOnScroll delay={200} className="col-span-1 h-full lg:col-span-5">
            <section className="flex h-full flex-col justify-between border border-border/40 bg-foreground p-8 text-background"><div><FileText className="mb-6 h-6 w-6" /><h3 className="mb-3 text-xl font-bold">Professional Resume</h3><p className="mb-8 text-[14px] leading-relaxed text-background/80">Download my latest resume containing my education, experience, projects, and certifications.</p></div><a href="/resume.pdf" download className="group flex w-full items-center justify-center gap-2 bg-background py-3 text-[12px] font-mono uppercase tracking-widest text-foreground transition-colors hover:bg-background/90"><Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />Download Resume</a></section>
          </RevealOnScroll>
        </div>

        <div className="mb-16 h-px w-full bg-border/40" />

        <RevealOnScroll delay={100}>
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center"><h3 className="mb-8 text-xl font-medium tracking-tight text-foreground">&quot;I am always open to learning, collaboration, and opportunities that create meaningful impact through technology.&quot;</h3><div className="space-y-2 text-[12px] font-light text-muted-foreground"><p>Thank you for taking the time to explore my professional workspace.</p><p>I appreciate your visit and look forward to connecting with you.</p></div></div>
        </RevealOnScroll>
      </div>
    </main>
  );
}

"use client";


import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  Briefcase,
  Download,
  FileText,
  Terminal,
} from "lucide-react";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { contactMethods } from "@/lib/data/contact";

export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 min-h-screen overflow-y-auto bg-background pb-32 selection:bg-foreground selection:text-background">
      <div className="w-full max-w-4xl mx-auto px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24">
        <RevealOnScroll>
          <header className="mb-20">
            <div className="mb-8 flex items-center gap-4 text-[10px] font-mono text-muted-foreground">
              <span className="flex items-center gap-1.5 text-foreground">
                <Terminal className="h-3 w-3" /> Contact
              </span>
              <span>/</span>
              <span>Let’s connect</span>
            </div>
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground">Let&apos;s Connect</h1>
            <p className="max-w-2xl text-xl font-light leading-relaxed text-muted-foreground">
              Thank you for visiting my professional workspace. Whether you have an opportunity, a collaboration in mind, or simply want to connect, I&apos;d be happy to hear from you.
            </p>
          </header>
        </RevealOnScroll>

        <div className="mb-16 h-px w-full bg-border/40" />

        <div className="mb-16 grid grid-cols-1 gap-12 xl:grid-cols-2 xl:gap-16">
          <RevealOnScroll delay={100} className="h-full">
            <section className="h-full">
              <h2 className="mb-8 flex items-center gap-2 border-b border-border/40 pb-3 text-base font-semibold tracking-tight text-foreground">
                <Activity className="h-3.5 w-3.5 stroke-[1.5]" /> Professional availability
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-xs font-medium text-muted-foreground">Status</h3>
                  <div className="flex items-center gap-2 text-[14px] font-medium text-foreground">
                    <span className="relative flex h-2 w-2"><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" /></span>
                    Available for Entry-Level Opportunities
                  </div>
                </div>
                <div>
                  <h3 className="mb-3 text-xs font-medium text-muted-foreground">Preferred roles</h3>
                  <ul className="space-y-2">
                    {["Software Engineer", "Web Developer", "Junior Software Developer", "Junior Business Analyst", "Junior Systems Analyst", "Junior Data Analyst", "IT Support / Technical Support", "Project Technical Assistant", "Junior Project Coordinator", "Entry-Level IT / GovTech Roles"].map((role) => (
                      <li key={role} className="flex items-center gap-2 text-[13px] text-foreground"><Briefcase className="h-3.5 w-3.5 shrink-0 text-muted-foreground" /> {role}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </RevealOnScroll>

          <RevealOnScroll delay={200} className="h-full">
            <section className="flex h-full flex-col">
              <h2 className="mb-8 flex items-center gap-2 border-b border-border/40 pb-3 text-base font-semibold tracking-tight text-foreground"><Terminal className="h-3.5 w-3.5 stroke-[1.5]" /> Contact information</h2>
              <div className="flex flex-col">
                {contactMethods.map(({ label, value, href, icon: Icon }) => (
                  <Link key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="group flex min-h-24 flex-col justify-center gap-2 border-b border-border/40 py-4 transition-colors hover:bg-secondary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40">
                    <span className="flex items-center justify-between gap-3"><span className="flex items-center gap-3"><Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" /><span className="text-[13px] font-medium text-foreground">{label}</span></span><ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" /></span>
                    <span className="break-words pl-7 text-[12px] text-muted-foreground">{value}</span>
                  </Link>
                ))}
              </div>
            </section>
          </RevealOnScroll>
        </div>

        <div className="mb-16 h-px w-full bg-border/40" />

        <div className="mb-16 grid grid-cols-1 gap-12 xl:grid-cols-2 xl:gap-16">
          <RevealOnScroll delay={100}><section><h2 className="mb-6 text-base font-semibold tracking-tight text-foreground">A little about me</h2><p className="border-l-2 border-foreground/20 py-1 pl-4 text-[15px] leading-relaxed text-muted-foreground">I&apos;m a BS Information Systems graduate interested in building software and web solutions, understanding real-world problems, improving processes, and continuously developing my technical skills.</p></section></RevealOnScroll>
          <RevealOnScroll delay={200}><section><h2 className="mb-6 text-base font-semibold tracking-tight text-foreground">Current interests</h2><div className="flex flex-wrap gap-2">{["Software Engineering", "Web Development", "Systems Analysis & Design", "Business Process Analysis", "API & Database Integration", "Data Analytics", "AI-Assisted Development"].map((interest) => <span key={interest} className="border border-border/40 bg-secondary/5 px-3 py-1.5 text-xs text-foreground">{interest}</span>)}</div></section></RevealOnScroll>
        </div>

        <div className="mb-16 h-px w-full bg-border/40" />

        <div className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <RevealOnScroll delay={200} className="col-span-1 h-full lg:col-span-12">
            <section className="flex h-full flex-col justify-between border border-border/40 bg-foreground p-8 text-background"><div><FileText className="mb-6 h-6 w-6" /><h3 className="mb-3 text-xl font-bold">Professional Resume</h3><p className="mb-8 text-[14px] leading-relaxed text-background/80">Download my latest resume containing my education, experience, projects, and certifications.</p></div><a href="/resume/John Rodmar Agapolo Professional Resume.pdf" download className="group flex w-full items-center justify-center gap-2 bg-background py-3 text-[12px] font-mono uppercase tracking-widest text-foreground transition-colors hover:bg-background/90"><Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />Download Resume</a></section>
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

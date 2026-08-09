"use client";

import { useState } from "react";
import Link from "next/link";
import { Database } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { ecosystemData } from "@/lib/data/ecosystem";

// --- INTERACTIVE MAP NODE COMPONENT ---
const Node = ({ 
  id, 
  activeNode, 
  setActiveNode, 
  children 
}: { 
  id: string, 
  activeNode: string | null, 
  setActiveNode: (id: string | null) => void, 
  children: React.ReactNode 
}) => {
  const isHighlighted = 
    !activeNode || 
    activeNode === id || 
    ecosystemData.find(n => n.id === activeNode)?.connections.includes(id) || 
    ecosystemData.find(n => n.id === id)?.connections.includes(activeNode);
  
  return (
    <span
      onMouseEnter={() => setActiveNode(id)}
      onMouseLeave={() => setActiveNode(null)}
      onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
      className={`inline-block max-w-full cursor-pointer whitespace-normal rounded-sm text-center font-semibold transition-all duration-300
        ${!isHighlighted ? 'opacity-30 grayscale' : 'opacity-100'}
        ${activeNode === id ? 'bg-foreground text-background' : 'hover:text-muted-foreground text-foreground'}
      `}
    >
      {children}
    </span>
  )
};

export default function CareerArchitecture() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <main className="flex-1 min-h-screen overflow-y-auto bg-background selection:bg-foreground selection:text-background pb-32">
      <div className="max-w-4xl mx-auto w-full px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24">
        
        {/* HEADER */}
        <RevealOnScroll>
        <header className="mb-16">
          <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground mb-8">
            <span className="text-foreground">Workspace</span>
            <span>/</span>
            <span>Career Architecture</span>
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-6">
            Career Architecture Map
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-2xl">
            A visual map of the experiences, projects, and opportunities that shaped my professional journey.
          </p>
        </header>
        </RevealOnScroll>

        {/* SUBTLE LEGEND */}
        <RevealOnScroll delay={100}>
        <div className="flex flex-wrap items-center justify-center gap-8 text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-12">
          <span className="flex items-center gap-2"><span className="text-foreground font-bold">○</span> Academic</span>
          <span className="flex items-center gap-2"><span className="text-foreground font-bold">□</span> Innovation</span>
          <span className="flex items-center gap-2"><span className="text-foreground font-bold">◇</span> Government</span>
          <span className="flex items-center gap-2"><span className="text-foreground font-bold">△</span> Industry</span>
        </div>
        </RevealOnScroll>

        {/* CAREER ARCHITECTURE MAP */}
        <RevealOnScroll delay={200}>
          <section className="mb-32">
            <div className="relative overflow-hidden rounded-xl border border-border/20 bg-card/5 px-4 py-10 sm:px-6 sm:py-12">
              <div className="relative mx-auto flex w-full min-w-0 max-w-3xl flex-col items-center gap-8">
                <Node id="isatu" activeNode={activeNode} setActiveNode={setActiveNode}>ISAT U</Node>
                <span aria-hidden className="h-8 w-px bg-border/60" />
                <div className="grid w-full grid-cols-3 gap-2 text-center sm:gap-6">
                  <Node id="leadership" activeNode={activeNode} setActiveNode={setActiveNode}>Leadership</Node>
                  <Node id="kwadra" activeNode={activeNode} setActiveNode={setActiveNode}>Internship</Node>
                  <Node id="wadhwani" activeNode={activeNode} setActiveNode={setActiveNode}>Program Support</Node>
                </div>
                <span aria-hidden className="h-8 w-px bg-border/60" />
                <Node id="tumanow" activeNode={activeNode} setActiveNode={setActiveNode}>Startup Journey</Node>
                <span aria-hidden className="h-8 w-px bg-border/60" />
                <div className="grid w-full grid-cols-2 gap-2 text-center sm:w-2/3 sm:gap-6">
                  <Node id="tumanow" activeNode={activeNode} setActiveNode={setActiveNode}>Startup Champion</Node>
                  <Node id="ppdo" activeNode={activeNode} setActiveNode={setActiveNode}>Provincial Planning and Development Office</Node>
                </div>
                <span aria-hidden className="h-8 w-px bg-border/60" />
                <Node id="san-miguel" activeNode={activeNode} setActiveNode={setActiveNode}>Municipality of San Miguel</Node>
                <span aria-hidden className="h-8 w-px bg-border/60" />
                <Node id="blms" activeNode={activeNode} setActiveNode={setActiveNode}>BLMS Capstone</Node>
                <span aria-hidden className="h-8 w-px bg-border/60" />
                <Node id="isatu" activeNode={activeNode} setActiveNode={setActiveNode}>Information Systems Graduate</Node>
              </div>
            </div>
            <div className="mt-6 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Professional Evolution / Hover to trace operational paths / Click to view dossier
            </div>
          </section>
        </RevealOnScroll>

        {/* DOSSIER DOCUMENTATION */}
        <RevealOnScroll delay={300}>
        <section>
          <div className="flex items-center gap-2 mb-16">
            <Database className="w-4 h-4 text-foreground" />
            <h2 className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground">
              Core Network Dossiers
            </h2>
          </div>

          <div className="flex flex-col">
            {ecosystemData.map((node, index) => (
              <RevealOnScroll key={node.id} delay={(index + 1) * 100}>
              <div 
                id={node.id}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                className={`py-12 border-t border-border/40 transition-colors duration-500
                  ${index === ecosystemData.length - 1 ? "border-b" : ""}
                  ${activeNode === node.id ? "bg-secondary/5" : ""}
                `}
              >
                {/* Dossier Header */}
                <div className="mb-10 pl-4 md:pl-0">
                  <div className="text-[14px] text-foreground tracking-widest mb-3">
                    {node.stars}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold uppercase tracking-tight text-foreground">
                    {node.name}
                  </h3>
                </div>

                {/* Dossier Body */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 pl-4 md:pl-0">
                  
                  {/* Left Column */}
                  <div>
                    <div className="mb-8">
                      <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
                        Role
                      </h4>
                      <p className="text-[14px] font-medium text-foreground">
                        {node.role}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
                        Contribution
                      </h4>
                      <p className="text-[14px] leading-relaxed text-muted-foreground">
                        {node.contribution}
                      </p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <div className="mb-8">
                      <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
                        Key Outcomes
                      </h4>
                      <ul className="space-y-1.5">
                        {node.outcomes.map((outcome, i) => (
                          <li key={i} className="text-[13px] text-foreground flex items-start gap-2">
                            <span className="text-foreground/40 mt-[1px]">•</span> {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
                        Related Works
                      </h4>
                      <ul className="space-y-3">
                        {node.links.map((link, i) => (
                          <li key={i}>
                            <Link 
                              href={link.href}
                              className="text-[13px] font-medium text-foreground hover:text-muted-foreground transition-colors flex items-center gap-2 group"
                            >
                              <span className="text-muted-foreground transition-transform group-hover:translate-x-1">→</span> 
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>
        </RevealOnScroll>

      </div>
    </main>
  );
}


"use client";

import { useState } from "react";
import Link from "next/link";
import { Network, Database } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";

// --- DOSSIER DATA WITH HIERARCHY & INTERNAL LINKS ---
const ecosystemData = [
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
      { label: "Case File #02: TumaNow", href: "/case-files/tumanow" }
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
      { label: "Case File #02: TumaNow", href: "/case-files/tumanow" }
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
      { label: "Case File #02: TumaNow", href: "/case-files/tumanow" }
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
      { label: "Case File #01: BLMS", href: "/case-files/blms" }
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
      { label: "Case File #01: BLMS", href: "/case-files/blms" }
    ]
  }
];

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
      className={`cursor-pointer transition-all duration-300 font-semibold rounded-sm inline-block
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
      <div className="max-w-4xl mx-auto px-8 py-16 lg:px-16 lg:py-24 w-full">
        
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

        {/* ASCII CHRONOLOGICAL KNOWLEDGE GRAPH */}
        <RevealOnScroll delay={200}>
        <section className="mb-32">
          <div className="font-mono text-[12px] sm:text-[13px] leading-[2.5] bg-card/5 border border-border/20 py-12 px-4 flex justify-center w-full rounded-xl overflow-x-auto no-scrollbar">
            
            <pre className="text-left w-fit mx-auto">
              <span className="block">
{`                                      `}<Node id="isatu" activeNode={activeNode} setActiveNode={setActiveNode}>○ ISAT U</Node>{`\n`}
                <span className="text-muted-foreground/30">{`                                         │`}</span>
              </span>
              
              <span className="block">
                <span className="text-muted-foreground/30">{`                           ┌─────────────┼─────────────┐\n`}</span>
                <span className="text-muted-foreground/30">{`                           │             │             │`}</span>
              </span>
              
              <span className="block">
{`\n                      `}<Node id="leadership" activeNode={activeNode} setActiveNode={setActiveNode}>○ Leadership</Node>{`  `}<Node id="kwadra" activeNode={activeNode} setActiveNode={setActiveNode}>□ Internship</Node>{`  `}<Node id="wadhwani" activeNode={activeNode} setActiveNode={setActiveNode}>○ Program Support</Node>
{`\n                     `}<Node id="leadership" activeNode={activeNode} setActiveNode={setActiveNode}>(Class Mayor)</Node>{`    `}<Node id="kwadra" activeNode={activeNode} setActiveNode={setActiveNode}>(KWADRA)</Node>{`      `}<Node id="wadhwani" activeNode={activeNode} setActiveNode={setActiveNode}>(Wadhwani)</Node>{`\n`}
                <span className="text-muted-foreground/30">{`                                         │\n`}</span>
                <span className="text-muted-foreground/30">{`                                         ▼`}</span>
              </span>
              
              <span className="block">
{`\n                                 `}<Node id="tumanow" activeNode={activeNode} setActiveNode={setActiveNode}>□ Startup Journey</Node>
{`\n                                     `}<Node id="tumanow" activeNode={activeNode} setActiveNode={setActiveNode}>(TumaNow)</Node>{`\n`}
                <span className="text-muted-foreground/30">{`                                         │\n`}</span>
                <span className="text-muted-foreground/30">{`                              ┌──────────┴──────────┐\n`}</span>
                <span className="text-muted-foreground/30">{`                              ▼                     ▼`}</span>
              </span>
              
              <span className="block">
{`\n                     `}<Node id="tumanow" activeNode={activeNode} setActiveNode={setActiveNode}>□ Startup Champion</Node>{`       `}<Node id="ppdo" activeNode={activeNode} setActiveNode={setActiveNode}>◇ Provincial Planning &</Node>
{`\n                                                  `}<Node id="ppdo" activeNode={activeNode} setActiveNode={setActiveNode}>Development Office</Node>
{`\n                                                       `}<Node id="ppdo" activeNode={activeNode} setActiveNode={setActiveNode}>(Client)</Node>{`\n`}
                <span className="text-muted-foreground/30">{`                                                          │\n`}</span>
                <span className="text-muted-foreground/30">{`                                                          ▼`}</span>
              </span>
              
              <span className="block">
{`\n                                             `}<Node id="san-miguel" activeNode={activeNode} setActiveNode={setActiveNode}>◇ Municipality of San Miguel</Node>
{`\n                                                       `}<Node id="san-miguel" activeNode={activeNode} setActiveNode={setActiveNode}>(Client)</Node>{`\n`}
                <span className="text-muted-foreground/30">{`                                                          │\n`}</span>
                <span className="text-muted-foreground/30">{`                                                          ▼`}</span>
              </span>

              <span className="block">
{`\n                                                   `}<Node id="blms" activeNode={activeNode} setActiveNode={setActiveNode}>○ BLMS Capstone</Node>{`\n`}
                <span className="text-muted-foreground/30">{`                                                          │\n`}</span>
                <span className="text-muted-foreground/30">{`                                                          ▼`}</span>
              </span>

              <span className="block">
{`\n                                           `}<Node id="isatu" activeNode={activeNode} setActiveNode={setActiveNode}>○ Information Systems Graduate</Node>
              </span>
            </pre>
            
          </div>
          <div className="text-[10px] text-muted-foreground mt-6 text-center uppercase tracking-widest font-mono">
            Professional Evolution // Hover to trace operational paths // Click to view dossier
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
                        Related Nodes
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

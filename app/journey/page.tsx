"use client";

import { 
  GraduationCap, 
  Lightbulb, 
  Users, 
  Rocket, 
  Briefcase, 
  Terminal, 
  Trophy, 
  Building2, 
  Handshake,
  CheckCircle2,
  BookOpen,
  Target
} from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { journeyProgressNodes, foundationSkills, classMayorSkills, tumanowResponsibilities, auditorSkills, kwadraResponsibilities, wadhwaniResponsibilities, blmsResponsibilities, learningExperiences } from "@/lib/data/journey";

export default function ProfessionalJourney() {
  return (
    <main className="flex-1 min-h-screen overflow-y-auto bg-background selection:bg-foreground selection:text-background pb-32">
      <div className="max-w-4xl mx-auto w-full px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24">
        
        {/* HEADER */}
        <RevealOnScroll delay={0}>
          <header className="mb-20">
            <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground mb-8">
              <span className="text-foreground">About</span>
              <span>/</span>
              <span>Professional Journey</span>
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight text-foreground mb-6">
              Professional Journey
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-2xl">
              A timeline of the experiences, leadership roles, projects, internships, and learning milestones that shaped my growth as an Information Systems graduate.
            </p>
          </header>
        </RevealOnScroll>

        {/* PROGRESS INDICATOR */}
        <RevealOnScroll delay={100}>
          <div className="mb-24 hidden sm:block">
            <div className="relative pt-4 pb-4">
              {/* FIXED: The Horizontal Line shifted to exactly 49px to strike through the dots */}
              <div className="absolute left-0 right-0 h-px bg-border/60 top-[49px] z-0"></div>
              
              {/* The Nodes */}
              <div className="relative z-10 flex items-center justify-between">
                {journeyProgressNodes.map((node, i) => (
                  <div key={i} className="flex flex-col items-center bg-background px-2 md:px-4">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase h-4 mb-3 block">{node.top}</span>
                    <div className="w-2.5 h-2.5 rounded-full bg-foreground ring-4 ring-background mb-4"></div>
                    <span className="text-[10px] font-mono text-foreground uppercase block">{node.bottom}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* TIMELINE CONTAINER */}
        <div className="relative border-l border-border/40 ml-2 md:ml-4 space-y-24 pb-12">
          
          {/* 2022: Beginning */}
          <RevealOnScroll delay={200}>
            <div className="relative pl-8 md:pl-12">
              <div className="absolute w-2.5 h-2.5 bg-foreground rounded-full -left-[5.5px] top-3 ring-4 ring-background"></div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-light text-foreground tracking-tight">2022</h2>
                <div className="w-full h-px bg-border/40 mt-4"></div>
              </div>
              
              <div className="border border-border/40 p-6 md:p-8 bg-card/30 hover:bg-secondary/5 hover:border-foreground/30 transition-colors">
                <div className="flex gap-3 items-start mb-4">
                  <GraduationCap className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Starting My Information Systems Journey</h3>
                    <p className="text-[12px] font-mono uppercase tracking-widest text-muted-foreground mt-1">
                      BS Information Systems • Iloilo Science and Technology University - Iloilo City Campus
                    </p>
                  </div>
                </div>
                <p className="text-[14px] leading-relaxed text-muted-foreground">
                  Started my journey in Information Systems and began learning how technology can help solve real-world problems.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* 2023: Systems & Organizations */}
          <RevealOnScroll delay={100}>
            <div className="relative pl-8 md:pl-12">
              <div className="absolute w-2.5 h-2.5 bg-foreground rounded-full -left-[5.5px] top-3 ring-4 ring-background"></div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-light text-foreground tracking-tight">2023</h2>
                <div className="w-full h-px bg-border/40 mt-4"></div>
              </div>
              
              <div className="border border-border/40 p-6 md:p-8 bg-card/30 hover:bg-secondary/5 hover:border-foreground/30 transition-colors">
                <div className="flex gap-3 items-start mb-4">
                  <Lightbulb className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <h3 className="text-lg font-medium text-foreground">Understanding Systems and Organizations</h3>
                </div>
                <p className="text-[14px] leading-relaxed text-muted-foreground mb-6">
                  As I progressed in the program, I realized that technology is more than writing code—it is about understanding how organizations work and using digital solutions to improve processes. During this stage, I developed my understanding of:
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {foundationSkills.map((skill, i) => (
                    <span key={i} className="text-[11px] font-mono text-foreground border border-border/40 px-2.5 py-1 bg-background">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <p className="text-[13px] text-muted-foreground italic border-l-2 border-border/40 pl-4">
                  This became the foundation of how I approach projects today: understanding the problem before designing the solution.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* AY 2024-2025: Class Mayor */}
          <RevealOnScroll delay={100}>
            <div className="relative pl-8 md:pl-12">
              <div className="absolute w-2.5 h-2.5 bg-foreground rounded-full -left-[5.5px] top-3 ring-4 ring-background"></div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-light text-foreground tracking-tight uppercase">AY 2024–2025</h2>
                <div className="w-full h-px bg-border/40 mt-4"></div>
              </div>
              
              <div className="border border-border/40 p-6 md:p-8 bg-card/30 hover:bg-secondary/5 hover:border-foreground/30 transition-colors">
                <div className="flex gap-3 items-start mb-4">
                  <Users className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Class Mayor</h3>
                    <p className="text-[12px] font-mono uppercase tracking-widest text-muted-foreground mt-1">
                      BS Information Systems
                    </p>
                  </div>
                </div>
                <p className="text-[14px] leading-relaxed text-muted-foreground mb-6">
                  Served as the elected Class Mayor during my third year, representing the class in academic and student-related activities. My responsibilities included coordinating with faculty members, organizing class concerns, communicating announcements, and helping ensure smooth coordination between students and instructors.
                </p>
                <div className="pt-6 border-t border-border/40">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-foreground mb-3">Skills Developed</h4>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {classMayorSkills.map((skill, i) => (
                      <span key={i} className="text-[12px] text-muted-foreground flex items-center gap-1.5">
                        <span className="text-foreground/30 font-mono">↳</span> {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* 2025: TumaNow */}
          <RevealOnScroll delay={100}>
            <div className="relative pl-8 md:pl-12">
              <div className="absolute w-2.5 h-2.5 bg-foreground rounded-full -left-[5.5px] top-3 ring-4 ring-background"></div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-light text-foreground tracking-tight">2025</h2>
                <div className="w-full h-px bg-foreground mt-4"></div>
              </div>
              
              <div className="border border-border/40 p-6 md:p-8 bg-card/30 hover:bg-secondary/5 hover:border-foreground/30 transition-colors">
                <div className="flex gap-3 items-start mb-4">
                  <Rocket className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-medium text-foreground">TumaNow Startup</h3>
                    <p className="text-[12px] font-mono uppercase tracking-widest text-muted-foreground mt-1">
                      Co-Founder • Business Analyst • Chief Financial Officer
                    </p>
                  </div>
                </div>
                <p className="text-[14px] leading-relaxed text-muted-foreground mb-8">
                  Co-founded TumaNow, a startup that developed a digital monitoring platform for local government infrastructure projects. The project began during the 2025 Iloilo Province Startup Hackathon, where our team identified a real problem faced by the Provincial Planning and Development Office (PPDO). Through stakeholder interviews and client consultations, we designed a system to improve project monitoring, reporting, and transparency.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-foreground mb-4">My Responsibilities</h4>
                    <ul className="space-y-2">
                      {tumanowResponsibilities.map((resp, i) => (
                        <li key={i} className="text-[13px] text-muted-foreground flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-foreground/40 shrink-0 mt-[3px]" />
                          <span className="leading-snug">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-foreground mb-4">Milestones</h4>
                    <ul className="space-y-4">
                      <li className="text-[13px] text-foreground font-medium flex items-start gap-3">
                        <Trophy className="w-4 h-4 text-muted-foreground shrink-0 mt-[2px]" />
                        <span className="leading-snug">Champion — 2025 Iloilo Province Startup Hackathon</span>
                      </li>
                      <li className="text-[13px] text-foreground flex items-start gap-3">
                        <Building2 className="w-4 h-4 text-muted-foreground shrink-0 mt-[2px]" />
                        <span className="leading-snug text-muted-foreground">Incubated under ISAT U–KWADRA Technology Business Incubator (KWADRA TBI)</span>
                      </li>
                      <li className="text-[13px] text-foreground flex items-start gap-3">
                        <Handshake className="w-4 h-4 text-muted-foreground shrink-0 mt-[2px]" />
                        <span className="leading-snug text-muted-foreground">Potential system adoption under evaluation by the PPDO, Iloilo Province</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-[13px] text-muted-foreground italic border-t border-border/40 pt-4">
                  This experience strengthened my skills in business analysis, client engagement, teamwork, startup development, and solution validation.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* AY 2025-2026: Vice Mayor & Auditor */}
          <RevealOnScroll delay={100}>
            <div className="relative pl-8 md:pl-12">
              <div className="absolute w-2.5 h-2.5 bg-foreground rounded-full -left-[5.5px] top-3 ring-4 ring-background"></div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-light text-foreground tracking-tight uppercase">AY 2025–2026</h2>
                <div className="w-full h-px bg-border/40 mt-4"></div>
              </div>
              
              <div className="border border-border/40 bg-card/30 hover:bg-secondary/5 hover:border-foreground/30 transition-colors divide-y divide-border/40">
                
                {/* Role 1 */}
                <div className="p-6 md:p-8">
                  <div className="flex gap-3 items-start mb-4">
                    <Users className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-medium text-foreground">Class Vice Mayor</h3>
                      <p className="text-[12px] font-mono uppercase tracking-widest text-muted-foreground mt-1">BS Information Systems</p>
                    </div>
                  </div>
                  <p className="text-[14px] leading-relaxed text-muted-foreground mb-4">
                    Served as Class Vice Mayor during my fourth year, assisting in coordinating class activities, supporting student concerns, and working closely with faculty members and classmates.
                  </p>
                  <p className="text-[13px] text-muted-foreground/80 font-medium">
                    Strengthened collaboration, communication, and leadership skills.
                  </p>
                </div>

                {/* Role 2 */}
                <div className="p-6 md:p-8">
                  <div className="flex gap-3 items-start mb-3">
                    <Briefcase className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-medium text-foreground">Auditor</h3>
                      <p className="text-[12px] font-mono uppercase tracking-widest text-muted-foreground mt-1">ISAT U ANALYTICA</p>
                    </div>
                  </div>
                  <p className="text-[14px] leading-relaxed text-muted-foreground mb-6">
                    Served as Auditor of ISAT U ANALYTICA, the Information Systems student organization. Managed organizational records, assisted in planning activities, and supported organizational operations while ensuring accountability and proper documentation.
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-foreground mr-2 mt-[2px]">Skills:</span>
                    {auditorSkills.map((skill, i) => (
                      <span key={i} className="text-[12px] text-muted-foreground">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Jan-May 2026: Internships */}
          <RevealOnScroll delay={100}>
            <div className="relative pl-8 md:pl-12">
              <div className="absolute w-2.5 h-2.5 bg-foreground rounded-full -left-[5.5px] top-3 ring-4 ring-background"></div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-light text-foreground tracking-tight uppercase">January – May 2026</h2>
                <div className="w-full h-px bg-border/40 mt-4"></div>
              </div>
              
              <div className="border border-border/40 bg-card/30 hover:bg-secondary/5 hover:border-foreground/30 transition-colors divide-y divide-border/40">
                
                {/* Internship 1 */}
                <div className="p-6 md:p-8">
                  <div className="flex gap-3 items-start mb-4">
                    <Briefcase className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-medium text-foreground">Student Intern</h3>
                      <p className="text-[12px] font-mono uppercase tracking-widest text-muted-foreground mt-1">ISAT U – KWADRA Technology Business Incubator</p>
                    </div>
                  </div>
                  <p className="text-[14px] leading-relaxed text-muted-foreground mb-6">
                    Completed a 600-hour internship supporting innovation, entrepreneurship, and startup development initiatives.
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-foreground mb-3">Responsibilities</h4>
                    <ul className="space-y-2">
                      {kwadraResponsibilities.map((resp, i) => (
                        <li key={i} className="text-[13px] text-muted-foreground flex items-start gap-2">
                          <span className="text-foreground/30 font-mono mt-[-1px]">↳</span> {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-foreground mb-3">Achievement</h4>
                    <div className="inline-flex items-center gap-3 bg-background border border-border/40 px-4 py-3 text-[13px] text-foreground font-medium">
                      <Trophy className="w-4 h-4 text-foreground shrink-0" />
                      Outstanding Intern Award
                    </div>
                  </div>

                  <p className="text-[13px] text-muted-foreground italic border-l-2 border-border/40 pl-4">
                    Strengthened project coordination, professional communication, documentation, and organizational skills.
                  </p>
                </div>
                {/* Internship 2 */}
                <div className="p-6 md:p-8">
                  <div className="flex gap-3 items-start mb-3">
                    <Briefcase className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-medium text-foreground">Student Intern</h3>
                      <p className="text-[12px] font-mono uppercase tracking-widest text-muted-foreground mt-1">Wadhwani Foundation Philippines</p>
                    </div>
                  </div>
                  <p className="text-[14px] leading-relaxed text-muted-foreground mb-6">
                    Supported the implementation of Wadhwani Foundation programs by coordinating with faculty members from different universities and monitoring their progress on the Wadhwani platform.
                  </p>
                  <div className="mb-6">
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-foreground mb-3">Responsibilities</h4>
                    <ul className="space-y-2">
                      {wadhwaniResponsibilities.map((resp, i) => (
                        <li key={i} className="text-[13px] text-muted-foreground flex items-start gap-2">
                          <span className="text-foreground/30 font-mono mt-[-1px]">↳</span> {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-[13px] text-muted-foreground italic border-l-2 border-border/40 pl-4">
                    Strengthened stakeholder communication, coordination, relationship management, and organizational skills while working with educators from different universities.
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* 2026: BLMS Capstone & Graduation */}
          <RevealOnScroll delay={100}>
            <div className="relative pl-8 md:pl-12">
              <div className="absolute w-2.5 h-2.5 bg-foreground rounded-full -left-[5.5px] top-3 ring-4 ring-background"></div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-light text-foreground tracking-tight">2026</h2>
                <div className="w-full h-px bg-border/40 mt-4"></div>
              </div>
              
              <div className="flex flex-col gap-10">
                {/* Capstone */}
                <div className="border border-border/40 p-6 md:p-8 bg-card/30 hover:bg-secondary/5 hover:border-foreground/30 transition-colors">
                  <div className="flex gap-3 items-start mb-4">
                    <Terminal className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-medium text-foreground">Backyard Livestock Monitoring System (BLMS)</h3>
                      <p className="text-[12px] font-mono uppercase tracking-widest text-muted-foreground mt-1">Project Manager & System Analyst</p>
                    </div>
                  </div>
                  <p className="text-[14px] leading-relaxed text-muted-foreground mb-8">
                    Led the system designing of the Backyard Livestock Monitoring System (BLMS), a capstone project created for the Municipality of San Miguel – Department of Agriculture. The system was designed to improve livestock monitoring, health reporting, and agricultural data management.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-[10px] font-mono uppercase tracking-widest text-foreground mb-4">Responsibilities</h4>
                      <ul className="space-y-2">
                        {blmsResponsibilities.map((resp, i) => (
                          <li key={i} className="text-[13px] text-muted-foreground flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-foreground/40 shrink-0 mt-[3px]" />
                            <span className="leading-snug">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-mono uppercase tracking-widest text-foreground mb-4">Achievement</h4>
                      <div className="text-[13px] text-foreground font-medium flex items-center gap-3 bg-background border border-border/40 px-4 py-3">
                        <Trophy className="w-4 h-4 text-foreground shrink-0" />
                        Best Capstone Project Award
                      </div>
                    </div>
                  </div>

                  <p className="text-[13px] text-muted-foreground italic border-t border-border/40 pt-4">
                    This project strengthened my ability to translate stakeholder requirements into practical digital solutions while leading a multidisciplinary development team.
                  </p>
                </div>

                {/* Graduation */}
                <div className="border border-border/40 p-6 md:p-8 bg-foreground text-background">
                  <div className="flex gap-3 items-start mb-4">
                    <GraduationCap className="w-6 h-6 text-background shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold">Bachelor of Science in Information Systems</h3>
                      <p className="text-[12px] font-mono uppercase tracking-widest text-background/80 mt-1">Iloilo Science and Technology University</p>
                    </div>
                  </div>
                  <p className="text-[15px] leading-relaxed text-background/90 mt-4 border-t border-background/20 pt-4 font-medium">
                    Graduated <span className="font-bold underline decoration-background/50 underline-offset-4">Magna Cum Laude</span>, recognizing consistent academic excellence, leadership, and active participation in innovation and technology initiatives throughout the program.
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Continuous Learning */}
          <RevealOnScroll delay={100}>
            <div className="relative pl-8 md:pl-12">
              <div className="absolute w-2.5 h-2.5 bg-foreground rounded-full -left-[5.5px] top-3 ring-4 ring-background"></div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-light text-foreground tracking-tight uppercase">Continuous Learning</h2>
                <div className="w-full h-px bg-border/40 mt-4"></div>
              </div>
              
              <div className="border border-border/40 p-6 md:p-8 bg-card/30 hover:bg-secondary/5 hover:border-foreground/30 transition-colors">
                <div className="flex gap-3 items-start mb-4">
                  <BookOpen className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <h3 className="text-lg font-medium text-foreground">Beyond Academic Coursework</h3>
                </div>
                <p className="text-[14px] leading-relaxed text-muted-foreground mb-8">
                  I actively participate in conferences, innovation programs, leadership training, and technical workshops to continuously improve my knowledge and professional skills.
                </p>

                <h4 className="text-[10px] font-mono uppercase tracking-widest text-foreground mb-4">Selected Learning Experiences</h4>
                <ul className="space-y-4 mb-8">
                  {learningExperiences.map((item, i) => (
                    <li key={i} className="text-[13px] text-foreground flex items-start gap-3">
                      <span className="text-muted-foreground/50 font-mono mt-[-2px]">—</span>
                      {typeof item === "string" ? (
                        <span className="leading-snug">{item}</span>
                      ) : (
                        <div className="flex flex-col gap-1">
                          <span className="font-medium">{item.title}</span>
                          <span className="text-[12px] text-muted-foreground leading-relaxed">{item.desc}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
                
                <div className="bg-secondary/10 p-4 border border-border/40 flex items-start gap-3">
                  <Target className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                  <p className="text-[12px] text-muted-foreground leading-relaxed">
                    Rather than listing every technical certificate here, detailed certifications such as Cisco Networking Academy and DataCamp are presented in the <strong className="text-foreground font-medium">Verified Credentials</strong> section of this portfolio.
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Today: Confident Ending */}
          <RevealOnScroll delay={100}>
            <div className="relative pl-8 md:pl-12">
              <div className="absolute w-2.5 h-2.5 bg-foreground rounded-full -left-[5.5px] top-3 ring-4 ring-background"></div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-light text-foreground tracking-tight uppercase">Today</h2>
                <div className="w-full h-px bg-border/40 mt-4"></div>
              </div>
              
              <div className="py-4">
                <h3 className="text-2xl md:text-[28px] leading-[1.4] text-foreground font-medium tracking-tight">
                  &quot;I believe technology creates the greatest impact when it solves real problems for people. I look forward to contributing through analysis, collaboration, and continuous learning.&quot;
                </h3>
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </main>
  );
}



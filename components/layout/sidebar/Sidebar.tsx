"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderGit2,
  Briefcase,
  GraduationCap,
  Network,
  Wrench,
  FileText,
  Mail,
  MapPin,
  Medal,
  Trophy,
  Award,
  Star,
  Rocket,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import ThemeToggle from "@/components/layout/ThemeToggle";

const workspaceLinks = [
  { name: "Overview", href: "/", icon: LayoutDashboard },
  { name: "Case Files", href: "/case-files", icon: FolderGit2 },
  { name: "Professional Journey", href: "/journey", icon: Briefcase },
  { name: "Verified Credentials", href: "/credentials", icon: GraduationCap },
  { name: "Professional Ecosystem", href: "/ecosystem", icon: Network },
  { name: "Capabilities", href: "/capabilities", icon: Wrench },
  { name: "Documents", href: "/documents", icon: FileText },
  { name: "Let's Connect", href: "/contact", icon: Mail },
];

const currentFocus = [
  "Entry-Level Opportunities",
  "Business Process Analysis",
  "Data Analytics",
  "Systems Thinking",
  "Continuous Learning",
];

const highlights = [
  { label: "Magna Cum Laude", icon: Medal },
  { label: "Startup Hackathon Champion", icon: Trophy },
  { label: "Best Capstone Project", icon: Award },
  { label: "Outstanding Intern", icon: Star },
  { label: "Startup Co-Founder", icon: Rocket },
];

const ecosystem = [
  { category: "Academic", name: "ISAT U" },
  { category: "Innovation", name: "KWADRA TBI" },
  { category: "Industry", name: "Wadhwani Foundation" },
  { category: "Learning", name: "Cisco Networking Academy" },
  { category: "Learning", name: "DataCamp" },
  { category: "Startup", name: "TumaNow" },
];

const networkLinks = [
  { name: "GitHub", href: "https://github.com", icon: SiGithub },
  { name: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
  { name: "Email", href: "mailto:your.email@example.com", icon: Mail },
  { name: "Resume", href: "/documents", icon: FileText },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-80 sticky top-0 h-screen border-r border-border/40 bg-background/95 backdrop-blur-md p-6 flex-col hidden md:flex overflow-y-auto [&::-webkit-scrollbar]:hidden">
      <div className="flex flex-col items-center text-center mb-8 mt-2">
        <div className="relative w-20 h-20 rounded-full overflow-hidden border border-border/50 shadow-sm mb-4">
          <Image
            src="/badges/Agapolo1x1forBIR.png"
            alt="John Rodmar Agapolo"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        <h1 className="font-bold text-lg tracking-tight text-foreground">John Rodmar Agapolo</h1>
        <h2 className="text-sm font-medium text-muted-foreground mt-0.5">Information Systems Graduate</h2>

        <p className="text-xs text-muted-foreground mt-4 leading-relaxed max-w-[220px]">
          Passionate about using technology to solve real-world problems.
        </p>
      </div>

      <div className="flex flex-col items-center gap-2.5 mb-10 pb-8 border-b border-border/40">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-secondary/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-700 dark:bg-zinc-300"></span>
          </span>
          <span className="text-xs font-medium text-foreground">Available for Opportunities</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="w-3.5 h-3.5 stroke-[1.5]" />
          Iloilo City, Philippines
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4 px-2">
          Workspace
        </h3>
        <nav className="flex flex-col gap-0.5">
          {workspaceLinks.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-all ${
                  isActive
                    ? "bg-foreground text-background font-medium shadow-sm"
                    : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                }`}
              >
                <Icon className={`w-4 h-4 stroke-[1.5] ${isActive ? "text-background" : "text-muted-foreground group-hover:text-foreground"}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mb-8 border-t border-border/40 pt-8">
        <h3 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4 px-2">
          Current Focus
        </h3>
        <ul className="flex flex-col gap-2.5 px-2">
          {currentFocus.map((focus, i) => (
            <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-muted-foreground/40"></span>
              <span className="hover:text-foreground transition-colors">{focus}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8 border-t border-border/40 pt-8">
        <h3 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4 px-2">
          Highlights
        </h3>
        <ul className="flex flex-col gap-3 px-2">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <li key={i} className="flex items-center gap-3 text-xs text-muted-foreground group">
                <Icon className="w-4 h-4 stroke-[1.5] group-hover:text-foreground transition-colors" />
                <span className="group-hover:text-foreground transition-colors">{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mb-8 border-t border-border/40 pt-8">
        <h3 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4 px-2">
          Ecosystem
        </h3>
        <ul className="flex flex-col gap-3.5 px-2">
          {ecosystem.map((item, i) => (
            <li key={i} className="flex flex-col">
              <span className="text-[9px] uppercase tracking-wider text-muted-foreground/60 font-medium mb-0.5">
                {item.category}
              </span>
              <span className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-default">
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-8 border-t border-border/40">
        <h3 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4 px-2">
          Network
        </h3>
        <div className="flex flex-col gap-2.5 px-2 mb-8">
          {networkLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link key={link.name} href={link.href} target={link.name !== "Resume" ? "_blank" : "_self"} rel={link.name !== "Resume" ? "noreferrer" : undefined} className="text-xs flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Icon className="w-4 h-4 stroke-[1.5]" />
                {link.name}
              </Link>
            );
          })}
        </div>

        <ThemeToggle />

        <div className="flex items-center justify-between px-2 text-[10px] text-muted-foreground font-mono">
          <div className="flex flex-col gap-1">
            <span>Workspace v1.0</span>
            <span>Built with Next.js</span>
          </div>
          <span>© 2026</span>
        </div>
      </div>

    </aside>
  );
}

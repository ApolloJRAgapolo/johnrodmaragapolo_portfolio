import {
  Award,
  Briefcase,
  FileText,
  FolderGit2,
  GraduationCap,
  LayoutDashboard,
  Mail,
  Medal,
  Network,
  Rocket,
  Star,
  Trophy,
  Wrench,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import type { IconComponent } from "@/lib/types";

type SidebarLink = { name: string; href: string; icon: IconComponent };

export const workspaceLinks: SidebarLink[] = [
  { name: "Overview", href: "/", icon: LayoutDashboard },
  { name: "Case Files", href: "/case-files", icon: FolderGit2 },
  { name: "Professional Journey", href: "/journey", icon: Briefcase },
  { name: "Verified Credentials", href: "/credentials", icon: GraduationCap },
  { name: "Professional Ecosystem", href: "/ecosystem", icon: Network },
  { name: "Capabilities", href: "/capabilities", icon: Wrench },
  { name: "Documents", href: "/documents", icon: FileText },
  { name: "Let's Connect", href: "/contact", icon: Mail },
];

export const currentFocus = ["Entry-Level Opportunities", "Business Process Analysis", "Data Analytics", "Systems Thinking", "Continuous Learning"];

export const highlights: { label: string; icon: IconComponent }[] = [
  { label: "Magna Cum Laude", icon: Medal },
  { label: "Startup Hackathon Champion", icon: Trophy },
  { label: "Best Capstone Project", icon: Award },
  { label: "Outstanding Intern", icon: Star },
  { label: "Startup Co-Founder", icon: Rocket },
];

export const ecosystem = [
  { category: "Academic", name: "ISAT U" }, { category: "Innovation", name: "KWADRA TBI" },
  { category: "Industry", name: "Wadhwani Foundation" }, { category: "Learning", name: "Cisco Networking Academy" },
  { category: "Learning", name: "DataCamp" }, { category: "Startup", name: "TumaNow" },
];

export const networkLinks: SidebarLink[] = [
  { name: "GitHub", href: "https://github.com", icon: SiGithub },
  { name: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
  { name: "Email", href: "mailto:your.email@example.com", icon: Mail },
  { name: "Resume", href: "/documents", icon: FileText },
];

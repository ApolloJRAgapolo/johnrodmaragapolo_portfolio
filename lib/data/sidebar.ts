import {
  Briefcase,
  Award,
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

export const highlights: { label: string; icon: IconComponent }[] = [
  { label: "Magna Cum Laude", icon: Medal },
  { label: "Startup Hackathon Champion", icon: Trophy },
  { label: "Best Capstone Project", icon: Award },
  { label: "Outstanding Intern", icon: Star },
  { label: "Startup Co-Founder", icon: Rocket },
];

export const networkLinks: SidebarLink[] = [
  { name: "GitHub", href: "https://github.com/ApolloJRAgapolo", icon: SiGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/john-rodmar-agapolo-9492602b2/", icon: FaLinkedinIn },
  { name: "Email", href: "mailto:johnrodmaragapolo@gmail.com", icon: Mail },
  { name: "Resume", href: "/documents#resume", icon: FileText },
];

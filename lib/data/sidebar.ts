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
  Star,
  Trophy,
  Wrench,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import type { IconComponent } from "@/lib/types";

type SidebarLink = { name: string; href: string; icon: IconComponent };
type WorkspaceLink = SidebarLink & { priority: "primary" | "supporting" };

export const workspaceLinks: WorkspaceLink[] = [
  { name: "Overview", href: "/", icon: LayoutDashboard, priority: "primary" },
  { name: "Case Files / Projects", href: "/case-files", icon: FolderGit2, priority: "primary" },
  { name: "Professional Journey", href: "/journey", icon: Briefcase, priority: "primary" },
  { name: "Let's Connect", href: "/contact", icon: Mail, priority: "primary" },
  { name: "Capabilities", href: "/capabilities", icon: Wrench, priority: "supporting" },
  { name: "Verified Credentials", href: "/credentials", icon: GraduationCap, priority: "supporting" },
  { name: "Documents", href: "/documents", icon: FileText, priority: "supporting" },
  { name: "Professional Ecosystem", href: "/ecosystem", icon: Network, priority: "supporting" },
];

export const highlights: { label: string; icon: IconComponent }[] = [
  { label: "Magna Cum Laude", icon: Medal },
  { label: "Startup Hackathon Champion", icon: Trophy },
  { label: "Best Capstone Project", icon: Award },
  { label: "Outstanding Intern", icon: Star },
];

export const networkLinks: SidebarLink[] = [
  { name: "GitHub", href: "https://github.com/ApolloJRAgapolo", icon: SiGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/john-rodmar-agapolo-9492602b2/", icon: FaLinkedinIn },
  { name: "Email", href: "mailto:johnrodmaragapolo@gmail.com", icon: Mail },
  { name: "Resume", href: "/documents#resume", icon: FileText },
];

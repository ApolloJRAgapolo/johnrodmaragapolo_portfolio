import {
  Award,
  BadgeCheck,
  Blocks,
  FileText,
  FileDown,
  FolderKanban,
  House,
  Mail,
  Medal,
  Network,
  Route,
  Star,
  Trophy,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import type { IconComponent } from "@/lib/types";

type SidebarLink = { name: string; href: string; icon: IconComponent };
type WorkspaceLink = SidebarLink & { priority: "primary" | "supporting" };

export const workspaceLinks: WorkspaceLink[] = [
  { name: "Home", href: "/", icon: House, priority: "primary" },
  { name: "Projects", href: "/case-files", icon: FolderKanban, priority: "primary" },
  { name: "Journey", href: "/journey", icon: Route, priority: "primary" },
  { name: "Contact", href: "/contact", icon: Mail, priority: "primary" },
  { name: "Capabilities", href: "/capabilities", icon: Blocks, priority: "supporting" },
  { name: "Credentials", href: "/credentials", icon: BadgeCheck, priority: "supporting" },
  { name: "Documents", href: "/documents", icon: FileText, priority: "supporting" },
  { name: "Ecosystem", href: "/ecosystem", icon: Network, priority: "supporting" },
];

export const highlights: { label: string; icon: IconComponent }[] = [
  { label: "Magna Cum Laude", icon: Medal },
  { label: "Hackathon Champion", icon: Trophy },
  { label: "Best Capstone", icon: Award },
  { label: "Outstanding Intern", icon: Star },
];

export const networkLinks: SidebarLink[] = [
  { name: "GitHub", href: "https://github.com/ApolloJRAgapolo", icon: SiGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/john-rodmar-agapolo-9492602b2/", icon: FaLinkedinIn },
  { name: "Email", href: "mailto:johnrodmaragapolo@gmail.com", icon: Mail },
  { name: "Resume", href: "/documents#resume", icon: FileDown },
];

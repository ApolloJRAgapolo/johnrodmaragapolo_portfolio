import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { SiGithub, SiIndeed } from "react-icons/si";
import { Mail } from "lucide-react";
import type { Social } from "@/lib/types";

export const contactMethods: Social[] = [
  { label: "Email", value: "johnrodmar@example.com", href: "mailto:johnrodmaragapolo@gmail.com", icon: Mail },
  { label: "LinkedIn", value: "linkedin.com/in/...", href: "https://linkedin.com/in/yourprofile", icon: FaLinkedinIn },
  { label: "Indeed", value: "indeed.com/...", href: "https://indeed.com/yourprofile", icon: SiIndeed },
  { label: "GitHub", value: "github.com/...", href: "https://github.com/yourprofile", icon: SiGithub },
  { label: "Facebook", value: "facebook.com/...", href: "https://facebook.com/yourprofile", icon: FaFacebookF },
];

export const profileLinks: Social[] = [
  { label: "GitHub", description: "View repositories", href: "https://github.com/yourprofile", icon: SiGithub },
  { label: "LinkedIn", description: "Professional profile", href: "https://linkedin.com/in/yourprofile", icon: FaLinkedinIn },
  { label: "Indeed", description: "Professional profile", href: "#", icon: SiIndeed },
  { label: "Facebook", description: "Social profile", href: "#", icon: FaFacebookF },
];

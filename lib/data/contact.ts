import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { Briefcase, Mail } from "lucide-react";
import type { Social } from "@/lib/types";

export const contactMethods: Social[] = [
  { label: "Email", value: "johnrodmaragapolo@gmail.com", href: "mailto:johnrodmaragapolo@gmail.com", icon: Mail },
  { label: "LinkedIn", value: "Professional Profile", href: "https://www.linkedin.com/in/john-rodmar-agapolo-9492602b2/", icon: FaLinkedinIn },
  { label: "JobStreet", value: "Career Profile", href: "https://ph.jobstreet.com/profiles/johnrodmar-agapolo-2m77k807cq", icon: Briefcase },
  { label: "GitHub", value: "Portfolio Repository", href: "https://github.com/ApolloJRAgapolo", icon: SiGithub },
  { label: "Facebook", value: "Personal Profile", href: "https://www.facebook.com/ApolloSgr", icon: FaFacebookF },
];

export const profileLinks: Social[] = [
  { label: "GitHub", description: "View repositories", href: "https://github.com/ApolloJRAgapolo/johnrodmaragapolo_portfolio", icon: SiGithub },
  { label: "LinkedIn", description: "Professional profile", href: "https://www.linkedin.com/in/john-rodmar-agapolo-9492602b2/", icon: FaLinkedinIn },
  { label: "JobStreet", description: "Professional profile", href: "https://ph.jobstreet.com/profiles/johnrodmar-agapolo-2m77k807cq", icon: Briefcase },
  { label: "Facebook", description: "Social profile", href: "https://www.facebook.com/ApolloSgr", icon: FaFacebookF },
];

"use client";

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  User,
  FolderGit2,
  Briefcase,
  GraduationCap,
  Users,
  Wrench,
  FileText,
  Mail,
} from "lucide-react";

const navItems = [
  { name: "Profile", href: "/", icon: User },
  { name: "Projects", href: "/projects", icon: FolderGit2 },
  { name: "Career", href: "/career", icon: Briefcase },
  { name: "Learning", href: "/learning", icon: GraduationCap },
  { name: "Communities", href: "/communities", icon: Users },
  { name: "Toolkit", href: "/toolkit", icon: Wrench },
  { name: "Resume", href: "/resume", icon: FileText },
  { name: "Contact", href: "/contact", icon: Mail },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="flex-1">
      <h4 className="mb-3 px-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        Workspace
      </h4>
      <nav className="flex flex-col gap-1 text-sm font-medium">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center gap-3 rounded-md border-l-2 px-3 py-2 transition-all ${
                isActive
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-transparent text-foreground/70 hover:bg-secondary/80 hover:text-foreground"
              }`}
            >
              <Icon
                className={`h-4 w-4 stroke-[1.5] transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground group-hover:text-foreground"
                }`}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
"use client";

import * as React from "react";

import { useRouter } from "next/navigation";
import {
  Calculator,
  Calendar,
  Code,
  Database,
  FileText,
  Layout,
  Search,
  Terminal,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useCommandContext } from "@/components/ui/command";

type CommandEntry = {
  label: string;
  href: string;
  icon: React.ReactNode;
  keywords?: string[];
};

const dataCommands: CommandEntry[] = [
  {
    label: "Python Workflows",
    href: "/toolkit#python",
    icon: <Terminal className="mr-2 h-4 w-4" />,
    keywords: ["python", "data analysis"],
  },
  {
    label: "Data Visualization & Modeling",
    href: "/toolkit#data-viz",
    icon: <Database className="mr-2 h-4 w-4" />,
    keywords: ["data visualization", "modeling"],
  },
];

const projectCommands: CommandEntry[] = [
  {
    label: "Backyard Livestock Monitoring System (BLMS)",
    href: "/projects/backyard-livestock-monitoring-system",
    icon: <Layout className="mr-2 h-4 w-4" />,
    keywords: ["blms", "livestock", "system architecture"],
  },
  {
    label: "View All Projects",
    href: "/projects",
    icon: <FileText className="mr-2 h-4 w-4" />,
    keywords: ["projects"],
  },
];

const workspaceCommands: CommandEntry[] = [
  {
    label: "Executive Profile",
    href: "/",
    icon: <Code className="mr-2 h-4 w-4" />,
    keywords: ["profile", "home"],
  },
  {
    label: "Resume & Certifications",
    href: "/resume",
    icon: <Calculator className="mr-2 h-4 w-4" />,
    keywords: ["resume", "certifications"],
  },
  {
    label: "Contact & Scheduling",
    href: "/contact",
    icon: <Calendar className="mr-2 h-4 w-4" />,
    keywords: ["contact", "schedule"],
  },
];

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((current) => !current);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  function CommandMenuContent() {
    const { inputValue } = useCommandContext();
    const searchQuery = inputValue.trim().toLowerCase();

    const renderCommandGroup = (heading: string, commands: CommandEntry[]) => {
      const filteredCommands = commands.filter((command) => {
        if (!searchQuery) {
          return true;
        }

        const haystack = [command.label, ...(command.keywords ?? [])].join(" ").toLowerCase();
        return haystack.includes(searchQuery);
      });

      if (!filteredCommands.length) {
        return null;
      }

      return (
        <CommandGroup heading={heading}>
          {filteredCommands.map((command) => (
            <CommandItem key={command.href} onSelect={() => runCommand(() => router.push(command.href))}>
              {command.icon}
              <span>{command.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      );
    };

    const hasResults = [...dataCommands, ...projectCommands, ...workspaceCommands].some((command) => {
      if (!searchQuery) {
        return true;
      }

      const haystack = [command.label, ...(command.keywords ?? [])].join(" ").toLowerCase();
      return haystack.includes(searchQuery);
    });

    return (
      <CommandList>
        {!hasResults ? (
          <CommandEmpty>No results found.</CommandEmpty>
        ) : (
          <>
            {renderCommandGroup("Data Analysis & Python", dataCommands)}
            <CommandSeparator />
            {renderCommandGroup("System Architecture Case Studies", projectCommands)}
            <CommandSeparator />
            {renderCommandGroup("Workspace Navigation", workspaceCommands)}
          </>
        )}
      </CommandList>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex w-full items-center gap-2 rounded-lg border border-border bg-muted/50 px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted lg:w-auto"
      >
        <Search className="h-4 w-4" />
        <span>Search workspace...</span>
        <kbd className="ml-auto hidden h-5 items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground lg:inline-flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandMenuContent />
      </CommandDialog>
    </>
  );
}
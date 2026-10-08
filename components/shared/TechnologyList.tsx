import { focusIcons, technologyIcons } from "@/lib/data/technology-icons";
import { cn } from "@/lib/utils";

export default function TechnologyList({ items, label = "Technology stack", className }: { items: string[]; label?: string; className?: string }) {
  return (
    <ul aria-label={label} className={cn("flex flex-wrap gap-x-5 gap-y-3", className)}>
      {items.map((name) => {
        const Icon = technologyIcons[name] ?? focusIcons[name];
        return <li key={name} className="inline-flex min-w-0 items-center gap-2 text-sm leading-snug text-foreground/90">
          {Icon && <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />}
          <span>{name}</span>
        </li>;
      })}
    </ul>
  );
}

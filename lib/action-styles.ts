import { cva } from "class-variance-authority";

/** Shared treatment for links and buttons that perform a named action. */
export const actionStyles = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium leading-snug transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none",
  {
    variants: {
      variant: {
        primary: "border-foreground bg-foreground text-background hover:bg-foreground/80",
        secondary: "border-border bg-card text-foreground hover:border-muted-foreground/50 hover:bg-secondary",
        quiet: "border-transparent text-muted-foreground hover:bg-secondary hover:text-foreground",
      },
    },
    defaultVariants: { variant: "secondary" },
  },
);

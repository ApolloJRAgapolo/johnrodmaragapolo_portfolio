export default function Status() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="rounded-sm border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
          Magna Cum Laude
        </span>
        <span className="text-[11px] font-medium text-muted-foreground">
          BS Info Systems
        </span>
      </div>

      <div className="mt-1 flex items-center gap-2 rounded-md border border-border/50 bg-secondary/50 px-2 py-1.5">
        <span className="relative ml-1 flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
        </span>
        <span className="text-xs font-medium text-foreground/80">
          Available for Opportunities
        </span>
      </div>

      <div className="mt-0.5 pl-1 text-[11px] text-muted-foreground">
        Iloilo City, Philippines
      </div>
    </div>
  );
}

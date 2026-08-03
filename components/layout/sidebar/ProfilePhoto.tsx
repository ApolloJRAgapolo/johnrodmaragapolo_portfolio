import Image from "next/image";

export default function ProfilePhoto() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-border shadow-sm">
        <Image
          src="/badges/Agapolo1x1forBIR.png"
          alt="John Rodmar Agapolo"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-sm font-semibold leading-tight tracking-tight">
          John Rodmar Agapolo
        </h1>
        <span className="text-xs text-muted-foreground">
          Business Analyst Aspirant
        </span>
      </div>
    </div>
  );
}

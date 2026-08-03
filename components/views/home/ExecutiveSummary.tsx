import { profileData } from "@/lib/data/profile";

export function ExecutiveSummary() {
  return (
    <section className="mb-12 flex flex-col gap-4">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        Executive Summary
      </h2>
      <div className="prose prose-slate max-w-none dark:prose-invert">
        <p className="text-base leading-loose text-foreground">
          {profileData.bio}
        </p>
      </div>
    </section>
  );
}
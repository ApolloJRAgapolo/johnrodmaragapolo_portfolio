export default function PageHeader({ title, description, eyebrow }: { title: string; description: string; eyebrow?: string }) {
  return <header className="mb-10 sm:mb-12">
    {eyebrow && <p className="mb-3 text-sm text-muted-foreground">{eyebrow}</p>}
    <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h1>
    <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{description}</p>
  </header>;
}

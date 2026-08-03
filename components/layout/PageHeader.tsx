interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="mb-10 flex flex-col gap-2">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        {title}
      </h1>
      <p className="text-lg leading-relaxed text-muted-foreground">
        {description}
      </p>
      <hr className="mt-4 border-border" />
    </header>
  );
}
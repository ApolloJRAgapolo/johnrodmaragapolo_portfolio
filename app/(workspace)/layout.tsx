import Sidebar from "@/components/layout/sidebar/Sidebar";

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background lg:flex-row">
      <Sidebar />

      <main className="flex-1 px-6 py-8 md:px-12 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-4xl">{children}</div>
      </main>
    </div>
  );
}
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/layout/Sidebar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : process.env.VERCEL_PROJECT_PRODUCTION_URL ? new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) : new URL("https://johnrodmaragapolo-portfolio.vercel.app"),
  title: "John Rodmar Agapolo | Software & Systems Portfolio",
  description: "Information Systems graduate building web applications, designing systems, and exploring data. View projects, experience, and credentials.",
  alternates: { canonical: "/" },
  openGraph: { url: "/", title: "John Rodmar Agapolo | Software & Systems Portfolio", description: "Projects, professional experience, and credentials in software, systems, and data.", type: "website" },
  twitter: { card: "summary_large_image", title: "John Rodmar Agapolo | Software & Systems Portfolio", description: "Projects, professional experience, and credentials in software, systems, and data." },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var theme=localStorage.getItem('portfolio-theme')||'system';var isDark=theme==='dark'||(theme==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',isDark);document.documentElement.style.colorScheme=isDark?'dark':'light'}catch(e){}})();`,
          }}
        />
      </head>
      <body className="flex min-h-screen overflow-x-hidden bg-background text-foreground antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-background focus:p-4 focus:text-foreground">Skip to content</a>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}

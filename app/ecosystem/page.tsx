import PageHeader from "@/components/shared/PageHeader";
import Link from "next/link";
import { ecosystemData, ecosystemGroups } from "@/lib/data/ecosystem";

const linkStyle = "inline-flex min-h-11 items-center text-sm font-medium underline underline-offset-4 transition-colors hover:text-muted-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-offset-4";

export default function ProfessionalEcosystem() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 min-h-screen overflow-y-auto bg-background selection:bg-foreground selection:text-background pb-24">
      <div className="page-shell">
        <PageHeader title={"Professional Ecosystem"} description={"The institutions, teams, and stakeholders behind my experience. Explore their connections to my journey and projects."} eyebrow={"Professional relationships"} />

        <div className="space-y-12 sm:space-y-14">
          {ecosystemGroups.map((group, index) => (
            <section key={group} aria-labelledby={`ecosystem-group-${index}`}>
              <h2 id={`ecosystem-group-${index}`} className="mb-6 text-xl font-semibold tracking-tight">{group}</h2>
              <div className="divide-y divide-border/40 border-y border-border/40">
                {ecosystemData.filter((node) => node.group === group).map((node) => (
                  <article id={node.id} key={node.id} className="scroll-mt-24 py-6">
                    <p className="mb-2 text-xs text-muted-foreground">{node.relationship}</p>
                    <h3 className="text-lg font-medium">{node.name}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{node.context}</p>
                    <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-1">
                      {node.links.map((link) => (
                        <li key={link.href}><Link href={link.href} className={linkStyle}>{link.label}</Link></li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          ))}

          <section aria-labelledby="learning-communities-heading">
            <h2 id="learning-communities-heading" className="mb-6 text-xl font-semibold tracking-tight">Learning communities</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Cisco Networking Academy, DataCamp, AI Ready ASEAN, and AWS Community Day are part of my technical learning and community participation. Course completion and event participation records are kept in the credential archive.
            </p>
            <Link href="/credentials" className={`mt-3 ${linkStyle}`}>View learning and participation records</Link>
          </section>
        </div>
      </div>
    </main>
  );
}

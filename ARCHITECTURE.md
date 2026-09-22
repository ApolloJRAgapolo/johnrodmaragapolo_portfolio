# Portfolio architecture and refactor report

## Scope and audit

This refactor preserves the existing working-tree design, content, route paths,
document URLs, and download policies. Existing user edits were the baseline, not
the last Git commit. No dependencies were added and no Git commits were made.

The application has 11 page routes, 59 certificate records, one resume, and 79
public assets. App Router owns the routes and root layout. There are no existing
route groups, config/, content/, styles/, hooks/, or utilities/ directories that
need migration. Root configuration and app/globals.css remain appropriate here.
The installed animation implementation uses CSS and IntersectionObserver; the
README's Framer Motion mention does not match the installed dependencies.

Problems identified before migration:

- Shared visual wrappers and the portfolio document viewer occupied the same
  components/ root without a responsibility boundary.
- layout/sidebar/ contained only Sidebar.tsx and added a redundant folder level.
- The document page contained a title-based URL repair table. Its data records
  stored obsolete /docs/ placeholders even though the UI served /certificates/.
- Overview, Credentials and Documents independently calculated credential totals.
- The document row was declared inside its page render, alongside search state,
  collection rendering, URL resolution and modal state.
- PDF rendering and modal/protection responsibilities shared one component file.
- Credential and case-file cards were substantial components embedded in routes;
  the overview combined its hero, status, three project cards and profile sections.
- Capability props repeated an existing domain type. PreviewDocument lived in a
  component module despite being consumed across features. The type module also
  retained unused types from an older entity-oriented model.
- PageHeader and overviewStats had no consumers. The latter duplicated counts
  independently of the actual document collection.
- The 508-line Journey and long narrative case studies remain readability
  candidates, but splitting every static section would introduce fragmentation.
- Public filenames are inconsistent (spaces, punctuation, capitalization), and
  the profile photo lives in badges/. These are deployed URL contracts, so
  cosmetic moves would have more cost than value.
- The Gift-Giving Outreach PDFs in Community Engagement and Research & Conferences
  have identical SHA-256 hashes. Both are retained for potential external links.
- A temporary Python count utility remains at the repository root. Its purpose is
  understood; it may still be part of the owner's manual workflow.

## Target and conventions

Keep route composition in app/, reusable visual behavior in components/shared/,
layout controls in components/layout/, and substantial domain components in
components/features/. Keep the small data modules and shared types together;
avoid new service layers, empty feature folders, or barrels for every component.
No route group is needed because the root layout already supplies the shared shell.

- Authored React components: PascalCase.tsx.
- Keep the generated shadcn components/ui/button.tsx lowercase as the explicit
  generator-convention exception. It remains a generic primitive.
- Data filenames and folders: kebab-case (single-word names already comply).
- Future hooks: useSomething.ts; utilities: descriptive camelCase.ts.
- Preserve Next.js special filenames and stable public asset paths.
- lib/utils.ts remains a single small module; a utils/ wrapper has no value yet.
- lib/types/index.ts remains the direct shared type module, not a barrel tree.

## Final important structure

```text
app/
  layout.tsx
  globals.css
  page.tsx
  capabilities/page.tsx
  case-files/
    page.tsx
    blms/page.tsx
    tumanow/page.tsx
    portfolio-workspace/page.tsx
  contact/page.tsx
  credentials/page.tsx
  documents/page.tsx
  ecosystem/page.tsx
  journey/page.tsx
components/
  layout/
    Sidebar.tsx
    ThemeToggle.tsx
  shared/
    GlowingCard.tsx
    RevealOnScroll.tsx
  features/
    case-files/CaseFileCard.tsx
    credentials/CredentialCard.tsx
    documents/
      DocumentRow.tsx
      DocumentViewer.tsx
      PdfPreview.tsx
    overview/FeaturedCaseFiles.tsx
  ui/button.tsx
lib/
  data/
    capabilities.ts
    case-files.ts
    contact.ts
    credentials.ts
    documents.ts
    ecosystem.ts
    journey.ts
    sidebar.ts
  types/index.ts
  utils.ts
public/
  badges/
  certificates/  (existing category names preserved)
  images/
  resume/
  ...existing SVG assets
ARCHITECTURE.md
README.md
tmp_verify_document_counts.py
...existing root configuration and package files
```

## Migration inventory

| Original location | Result |
| --- | --- |
| components/layout/sidebar/Sidebar.tsx | components/layout/Sidebar.tsx; content unchanged |
| components/GlowingCard.tsx | components/shared/GlowingCard.tsx; content unchanged |
| components/RevealOnScroll.tsx | components/shared/RevealOnScroll.tsx; content unchanged |
| components/DocumentViewer.tsx | components/features/documents/DocumentViewer.tsx; PDF renderer extracted to PdfPreview.tsx; PreviewDocument moved to lib/types/index.ts |
| app/documents/page.tsx inner DocumentItem | components/features/documents/DocumentRow.tsx; explicit onPreview callback |
| app/credentials/page.tsx CredentialItem | components/features/credentials/CredentialCard.tsx |
| app/case-files/page.tsx DossierCard | components/features/case-files/CaseFileCard.tsx |
| app/page.tsx featured project section | components/features/overview/FeaturedCaseFiles.tsx |

No standalone file was renamed only for cosmetics. The three extracted card/row
components received responsibility-based names. No JSX styling or visible text
was intentionally changed by extraction.

Deleted source files:

- components/layout/PageHeader.tsx: no imports or runtime references; current
  pages have their own distinct headers. Not substituted into those pages.
- lib/data/overview.ts: unreferenced hardcoded overviewStats; displayed totals
  now come from the active document records instead.

Removed folder: components/layout/sidebar/, after moving its only file.
Created folders: components/shared/ and components/features/{case-files,
credentials,documents,overview}/, each housing actual extracted components.
Deleted source files remain recoverable from Git. No public asset was deleted.

Imports were updated in root layout and all 11 page modules as applicable.
New document and credential components import PreviewDocument from lib/types;
the PDF renderer owns the existing pdfjs-dist dynamic import and worker URL.
No alias, package, test-path, route, or public asset configuration change was needed.
The existing Tailwind components glob already covers the new feature locations.

## Data and types

- Replaced placeholder fileUrl values in documents.ts with exactly the encoded
  URLs previously produced by the page's resolver; removed the resolver entirely.
- Added allCertificates, verifiedCredentialCount and pendingCredentialCount as
  derived exports. Overview, Credentials and Documents share these calculations.
- Applied the existing ProfessionalDocument type to professionalDocs.
- Centralized PreviewDocument in lib/types and reused IconComponent and
  CapabilityGroup rather than repeated component prop shapes.
- Removed unused EntityId, RelatedEntity, Profile, Timeline, Project, Community,
  Achievement, ToolkitItem and OverviewStats types after reference inspection.
  The active CaseFile type remains the project-card model.
- Retained the existing shared GCI/AWS metadata derivation. Credential ledger
  presentation differs intentionally from document-library presentation for some
  awards and internships; these strings were not collapsed into one display value.
- Social profile and repository URLs have intentional differences. No destinations
  were changed to make similarly named links identical.

## Kept cleanup candidates

- All public assets, including duplicate outreach PDFs, starter SVGs,
  images/profile.svg, unreferenced badges, and certificates without internal links.
  Internal import searches cannot establish whether deployed URLs are unused.
- components/ui/button.tsx and lib/utils.ts: currently unused by portfolio pages,
  but form the configured shadcn foundation; not obsolete solely for lacking callers.
- tmp_verify_document_counts.py: retained manual helper, not an application module.
- Existing desktop sidebar CSS includes selectors for historical wrappers. This
  refactor leaves styles intact; investigate separately with visual regression checks.
- Theme initialization has an inline pre-hydration script as well as client logic.
  Consolidation needs care to avoid a theme flash; it was not moved for aesthetics.
- Long static Journey/case-study content could be split when those sections are
  edited, without creating a file per small markup block.
- README dependency wording and generated shadcn naming may be revisited separately.

## Verification

- npm run lint (through npm.cmd on Windows): PASS.
- No type-check script exists. npx.cmd tsc --noEmit: PASS.
- npm run build (through npm.cmd): PASS, including Next's TypeScript validation.
- Production HTTP checks: all 11 portfolio routes return 200 and contain the
  portfolio identity; all 60 document/resume URLs return 200 with a PDF signature.
  These include GCI World April 2026 and AWS Community Day Philippines 2026.
- Before/after comparison: all 59 complete document records using effective URLs,
  credential ledger arrays, resume data, download settings, navigation/social data,
  11 route filenames and all 79 public asset hashes are unchanged.
- No stale imports to old component paths or /docs/ placeholders remain in source.
- git diff --check: PASS (Windows line-ending notices only).
- No public asset paths or route paths changed. PDF contents were not edited, and
  existing viewer keyboard/context-menu protections and download gates were retained.
- Browser discovery returned no available browser. Mobile-menu interactions,
  theme switching, search/expand interactions and canvas preview rendering were
  not exercised in a live browser. HTTP and data checks do not prove those behaviors.
  External destinations were compared with baseline, not contacted.

The temporary baseline/check harness was kept outside the repository under
C:/Projects/portfolio-refactor-*; it is verification evidence, not an app dependency.
No commit, push, history rewrite, branch operation or remote change was performed.

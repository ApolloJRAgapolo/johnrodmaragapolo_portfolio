# John Rodmar E. Agapolo - Professional Portfolio

My personal portfolio brings together my projects, internships, education, skills, and supporting documents. I am an Information Systems graduate from Iloilo Science and Technology University, pursuing web development and software engineering opportunities.

[Visit the portfolio](https://johnrodmaragapolo-portfolio.vercel.app/) · [LinkedIn](https://www.linkedin.com/in/john-rodmar-agapolo-9492602b2/) · [GitHub](https://github.com/ApolloJRAgapolo) · [Email](mailto:johnrodmaragapolo@gmail.com)

## Explore the portfolio

| Page | What you will find |
| --- | --- |
| Overview | Selected projects, a short experience and education summary, four technical strengths, selected awards, and a way to get in touch. |
| Professional Journey | Internships and startup work, independent projects, education and leadership, and learning milestones. Expand an entry for more details. |
| Capabilities | Tools I have used, areas I am learning, and links to projects that demonstrate those skills. Systems analysis is organized into discovery and requirements, design and modeling, and documentation and collaboration. |
| Case Files | Project case studies explaining the problem, my role, the work completed, and supporting screenshots or diagrams. |
| Professional Ecosystem | An interactive map showing how institutions, organizations, projects, and learning experiences connect to my professional development. |
| Credentials | Selected recognition and certifications, followed by records grouped by topic. Preview a document or follow its verification link when one is available. |
| Documents | My resume and a searchable certificate archive, with category filters and document previews. Downloads are shown for records that allow them. |
| Contact | Email, LinkedIn, GitHub, other profile links, and access to my resume. |

## Featured project work

- **CareerTrack:** A personal workspace for job applications, hiring stages, interviews, offers, private documents, and career history. I built its screens, behind-the-scenes service, database, and sign-in system. It is online for review, with the final v1.0 release still pending.
- **PricePulse PH:** A web application for exploring historical Philippine commodity prices, comparing locations, and estimating household basket costs. These are historical observations and estimates, not live shop quotes.
- **Backyard Livestock Monitoring System (BLMS):** An Information Systems capstone prototype for livestock monitoring and reporting. My work focused on requirements, process analysis, project coordination, and system design. It received the Best Capstone Project Award.
- **TumaNow:** A startup project for local government project monitoring. My contributions cover business analysis and financial planning. Potential adoption remains under evaluation by the Provincial Planning and Development Office; it is not presented as a completed government rollout.
- **How I Built This Portfolio:** A case study explaining the organization, design decisions, and document-viewing features of this website.

CareerTrack includes eight mockups showing desktop and phone screens together, and PricePulse includes five. Their galleries support swiping, mouse dragging, arrows, and keyboard navigation. Visitors can open a larger image to inspect the interface. TumaNow has separate web and mobile galleries with private details removed from screenshots; BLMS includes system diagrams.

## Design and interaction

The portfolio uses a restrained layout, light and dark themes, and layouts that adapt to available screen space. Longer explanations stay on the detailed pages so the Overview remains easy to scan.

The Professional Ecosystem places organization and project cards inside a dotted canvas. Gray connection lines and moving dots show the paths between them. Selecting a card reveals its context and related links. On narrow screens, the map becomes grouped paths. A clearly marked, unfilled card represents my first professional role; connections to it describe preparation for that role, not an employer or organizational endorsement.

Visitors can pause the ecosystem animation. It also respects the device's reduced-motion setting and pauses when it is not visible. Galleries likewise respect reduced-motion preferences.

Documents open in a shared viewer with document details and PDF controls. Preview and download availability depend on the individual record.

## Run it locally

Use **Node.js 24** and npm. The site is built with Next.js, React, TypeScript, and Tailwind CSS. PDF.js handles PDF previews; Lucide and React Icons supply icons.

```bash
git clone https://github.com/ApolloJRAgapolo/johnrodmaragapolo_portfolio.git
cd johnrodmaragapolo_portfolio
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Next.js may select a different port if 3000 is already in use; use the address printed in the terminal.

To build the site and run the production version locally:

```bash
npm run build
npm start
```

## Check changes before publishing

Run the code checks and automated tests:

```bash
npm run lint
npx tsc --noEmit --incremental false
node --test tests/*.test.mjs
npm run build
```

Check certificate thumbnails and project mockups without regenerating them:

```bash
npm run previews:check
node scripts/generate-careertrack-mockups.mjs --check
node scripts/generate-pricepulse-mockups.mjs --check
```

Review dependency security findings separately:

```bash
npm audit
npm audit --omit=dev
```

Dependency review on **12 October 2026**: after the security updates, `npm audit --omit=dev` reports no findings. The full check still reports seven high-severity findings linked to one unpatched package used by development tools to match filenames. Those tools use project-owned filename patterns. There is currently no compatible published fix for that package; the remaining findings are still recorded and should be reviewed when a fix becomes available.

These commands check different things. A successful build does not prove that every screen looks correct. Before publishing, also review phone and desktop layouts, keyboard access, document previews, and gallery interactions in a browser.

## Where to make updates

| Folder | Purpose |
| --- | --- |
| `app/` | Page content, layouts, and page-specific styles. |
| `components/features/` | Features such as project galleries, the ecosystem map, and the document viewer. |
| `components/shared/` | Elements reused across pages. |
| `lib/data/` | Project descriptions, skills, journey records, credentials, and asset lists. |
| `public/` | Images, logos, PDFs, diagrams, and project mockups. |
| `scripts/` | Helpers for preparing and checking document thumbnails and project images. |
| `tests/` | Automated checks for galleries, PDF rendering, credentials, diagrams, and theme changes. |

After changing credential records or their PDFs, use `npm run previews:generate` to update thumbnails, then run `npm run previews:check`. Keep original records and project images consistent with their descriptions, and review screenshots for personal or private information before adding them.

### Social sharing address

When building outside Vercel, set `NEXT_PUBLIC_SITE_URL` to the public website address, such as `https://your-domain.example`. If that setting is absent, the site uses `VERCEL_PROJECT_PRODUCTION_URL` when available, then falls back to `https://johnrodmaragapolo-portfolio.vercel.app`. This keeps shared-page and social-image links pointed at the public site.

## Content and reuse

This repository is my personal professional portfolio. Certificates, personal information, project materials, and organization logos are included in the context of my work and experience. Please ask permission before reusing my content or personal documents.

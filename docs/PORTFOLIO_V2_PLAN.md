
- Chromium/Linux was tested; Firefox, Safari/WebKit, physical touch devices,
  browser UI zoom, and manual assistive-technology navigation were not exercised.
- The three existing GitHub destinations returned HTTP 200. LinkedIn's external
  page remains unverified because the environment proxy rejects CONNECT with
  403; this is not evidence of a broken profile. Email intent was inspected;
  no email was sent and mailbox delivery was not tested.
- Chromium's separate implicit `/favicon.ico` lookup produced one console 404.
  A real favicon is still an unsupplied branding asset. All explicitly referenced
  application/font assets loaded; no fake favicon was generated to conceal it.
- Full case studies, screenshots, resume, employment facts, other branding
  assets, and final project completion states remain the previously documented
  content inputs. Their absence was not filled with invented data.
- The managed relay itself remains unavailable. Local rendered testing succeeded
  through the authorized fallback; this QA did not establish production hosting
  behavior beyond the static root/subdirectory simulation.

Stop after Phase 3.5 verification. No further redesign or content development was
performed.

## Phase 4 — Professional content and project verification

Completed **2026-11-10** under the Phase 4 owner brief. All preceding plan content
is preserved verbatim. Repository: `AbidsTent/Portfolio-Website`, branch `work`,
HEAD `329eac1b7236f437fb0d4772ee10ec11d73478d3`. The working tree already contained
the uncommitted Phases 1–3.5 implementation. A source snapshot and copy of this
plan were saved under `/workspace/work/portfolio-phase4/` before editing; prior
work was neither reset nor discarded.

### Content changes

- Updated the hero introduction, structured About paragraphs, and contact copy
  for SQL workflows, data quality, reporting, and the target data roles. Preserved
  the approved headline and visual design. Biography now reflects the owner's
  BSc in Computer Science from TMU, graduation in 2026, and operations background.
- Added four-plus years of restaurant operations with supervisory responsibilities
  as business operations experience. No employer, formal title, dates, paid data
  role, or performance results were invented.
- Replaced unsupported homepage project claims with source-checked project
  records and concise case studies using the existing `problem` and
  `caseStudy.sections` fields. No new content framework or dependency was needed.
- Featured order is explicitly **SQL Server Data Warehouse → E-commerce Power BI
  Analytics → Urban Mobility Data Platform**. The first two are completed within
  their delivered learning/report scope; Urban remains **In Progress**.
- Finmate is additional work, with **Status unconfirmed** and a source-supported
  React/Node/Express/MongoDB description replacing the obsolete static-web copy.
- Customer & Product Analytics Platform and Canadian Job Copilot are omitted:
  available repository inventory and searches did not establish their links or
  scope. DWH customer/product queries do not prove a separate platform exists.
- Original project IDs/slugs remain stable. The three old unverified project
  URLs display verification notices without unsupported stacks or actions. The
  Portfolio Website route remains available but is not listed on the homepage.
- Reorganized skills into languages/analysis, BI/reporting, databases, data
  engineering, and development. PostgreSQL, ELT, and Spark SQL are explicitly
  foundations; no expert ratings or production experience are implied.

### Verification and scope

`docs/CONTENT_VERIFICATION.md` records pinned source revisions, linked evidence,
status rationale, owner-supplied facts, limitations, missing inputs, and stronger
case-study recommendations. Public metadata, README files, trees, SQL, notebook,
and application source were reviewed through the GitHub connector. The real
Power BI source screenshot was inspected. Selected project runtimes were not
executed; the portfolio's own runtime was tested separately below.

Notable limitations carried into the public case studies:

1. DWH is guided learning work; source paths need local configuration, and SQL
   quality checks were not executed here. Its README and actual paths differ.
2. Power BI has a real PBIX and screenshot; exact embedded measures, relationship
   settings, refresh, and slicer denominator behavior need Power BI Desktop.
3. Urban's notebook contains profiling code with no saved execution outputs, and
   its progress/profile documents conflict. Planned pipelines, Delta tables,
   quality gates, and reporting are not presented as delivered.
4. Finmate's README contains merge conflicts and contradictory claims. Its code
   supports the scoped description, but runtime, completion, and individual
   contribution remain unverified. No live market-price integration is claimed.

All demo fields remain null. Resume/photo/favicon/social-preview slots remain
null, and screenshot arrays remain empty until approved real assets are imported.
The source Power BI image and DWH diagram are available upstream for later media
selection; no fake assets or broken controls were introduced.

### Files and architecture

Phase 4 changes are limited to these **15 files**:

- `src/content/profile.js`, `experience.js`, `projects.js`, `skills.js`, and
  `site.js`: professional copy, verified project content, selection, skills,
  experience, and metadata.
- `src/sections/About.jsx`, `Projects.jsx`, `Skills.jsx`,
  `ExperienceEducation.jsx`, and `Contact.jsx`: render structured copy,
  featured/additional lists, qualified familiarity, and operations experience.
- `src/pages/ProjectPage.jsx`: omit the technology list on archived notices
  that deliberately make no verified stack claims.
- `src/styles/index.css`: four small content-support rules for the three-card
  featured grid, single additional card, additional heading spacing, and skill
  foundation notes. Palette, typography, tokens, and existing breakpoints stay
  unchanged. No section was redesigned.
- `tests/content-and-routes.test.js`: retain the original checks and add contract
  coverage for featured priority, qualified statuses, and legacy IDs/routes.
- `docs/CONTENT_VERIFICATION.md` (new) and this appended Phase 4 record.

Optional `listed: false` keeps existing routes accessible while excluding them
from project selection. Featured/additional exports filter the same centralized
records; case-study rendering, hash parsing, static-host strategy, app shell,
keyboard navigation, and reduced-motion implementation remain intact.

Compared with the Phase 4 snapshot, package manifests/lockfile, deployment
workflow, Vite configuration, design tokens, assets, and all other previous files
are unchanged. No dependency installation or upgrade was needed in this phase.
The existing Phase 3.5 gallery, screenshots, and ZIP were not modified.

### Validation results

| Check | Result |
| --- | --- |
| `npm run check` | **8/8 passed**, including the six existing contracts and two selection/compatibility contracts. |
| `npm run build` | **Passed**, Vite 5.4.21, 1,896 modules, 3.07s, no build warning. |
| Output | HTML 1.49 kB; CSS 28.08 kB (gzip 6.20); JS 292.44 kB (gzip 94.17); local Inter 352.24 kB. |
| Browser regressions | **38/38 passed** in local Chromium 156.0.8078.79 against production `dist`, served over loopback HTTP. |
| Actual viewports | **375 × 812, 768 × 1024, 1024 × 768, 1440 × 900**. |
| Accessibility | Four homepages and four warehouse detail layouts: **zero axe violations and zero incomplete items**. |
| Whitespace | `git diff --check` passed; Phase 4 changes also checked against the saved source snapshot. |

Browser checks covered text/card containment, fonts, first-fold actions, actual
case-study links, all eight project direct-load hashes (including preserved
bookmarks), browser back/forward/reload, keyboard skip/focus, desktop section
navigation, mobile/tablet menu behavior, contact/source link intent, reduced
motion and live preference changes, and missing/placeholder controls. Additional
320px containment and 200% root-text-sizing checks passed; this is not a physical
device or browser-UI-zoom claim. No page exceptions, failed page requests, or bad
responses for explicitly referenced resources occurred.

The implicit `/favicon.ico` request still returns 404 because no real favicon has
been supplied. It caused one console message; all referenced application assets
loaded. No fabricated branding asset was added to hide this known limitation.

Fresh browser evidence is scratch output under
`/workspace/work/portfolio-phase4/browser-review/`: **38 screenshots** and
`browser-results.json`. The adapted runner and log are beside that directory.
Representative phone/tablet/desktop project grids, skills, experience, full-home,
and warehouse-detail captures were visually inspected; no confirmed new overlap,
clipping, overflow, or spacing defect required correction. These artifacts are
outside the repository and are not committed. This test used a local static
server; it does not claim that the managed relay or production hosting was tested
again. Prior subdirectory-hosting evidence remains in Phase 3.5.

### Remaining inputs and next work

1. Supply/approve the resume, professional photo, branding, and selected real
   project media; optional UI continues to degrade cleanly until then.
2. Confirm Finmate contribution/completion and the two unverified project links.
3. Run DWH with configured paths, verify the PBIX in Power BI Desktop, and retain
   reproducible Urban profiling outputs before stronger runtime/result claims.
4. Reconcile upstream project documentation; those repositories were read only
   during this phase. No changes were made to them.
5. Firefox/WebKit, physical devices, manual assistive-technology review, LinkedIn
   availability, and actual hosted demos remain outside this verification.

Phase 4 stops here. No commit, push, merge, publication, or deployment was made.

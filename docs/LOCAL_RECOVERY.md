# Portfolio V2 local recovery

This repair starts from `76bc9cc` on `feature/portfolio-v2`. The local Git
history contains the V2 app shell and some components. The missing modules
listed below had no local Git history. The portfolio content comes from the
checked-in [content verification notes](CONTENT_VERIFICATION.md),
[V2 plan](PORTFOLIO_V2_PLAN.md), and legacy data.

## Imports and assets repaired

| Importing file | Finding and repair |
| --- | --- |
| `src/App.jsx` | Imports pointed above `src`. Switched to paths under `src` and restored `pages/HomePage.jsx`, `pages/ProjectPage.jsx`, `pages/NotFoundPage.jsx`, `content/projects.js`, `content/site.js`, and `utils/routes.js`. The existing layout components were already under `components/layout/`. |
| `src/components/layout/SiteHeader.jsx`, `SiteFooter.jsx` | Reused both along with `Container.jsx`. Restored their shared profile and navigation data in `content/profile.js` and `content/site.js`. |
| `src/components/projects/ProjectCard.jsx` | Reused the card and restored `components/ui/Reveal.jsx`, `components/ui/AssetImage.jsx`, and `components/projects/ProjectStatus.jsx`. |
| `src/components/projects/ProjectLinks.jsx` | Reused the link component and restored `components/ui/ExternalLink.jsx`, `utils/links.js`, and the shared route helper. |
| `index.html` and asset documentation | Removed the broken Vite favicon reference and the README's missing screenshot reference. Typography uses installed Inter or a system sans-serif. The historical Inter license is checked in, and the font binary is absent. |

## Architecture

- `src/main.jsx` mounts the React app. The existing app shell owns hash changes,
  focus, scrolling, and page metadata. Section anchors such as `#projects`
  open the homepage, and project links use `#/projects/<slug>`. The router
  also accepts the singular `#/project/<slug>` form. Unknown fragments or
  project slugs show a page with a link back to the project list.
- The homepage reuses the Hero, Skills, and Contact components and the V2
  layout and cards. V2 uses the centralized project records for both cards
  and detail pages. The legacy project records in `portfolioData.jsx` support
  archive routes and the Finmate source link.
- The homepage features SQL Server Data Warehouse, E-commerce Power BI
  Analytics, and Urban Mobility Data Platform, with Finmate under additional
  work. Statuses and source links follow the documented evidence and scope.
  The older unverified project entries remain addressable by slug as archive
  notices. The Portfolio Website overview also remains directly addressable.
  Media and demo links render only when supplied.
- The restored styles use the approved V2 colors and short motion effects that
  respect reduced-motion preferences. GitHub Pages still builds and uploads
  `dist/` using the existing workflow. Added `.nvmrc` with Node 24 for
  `actions/setup-node` and retained Vite's relative `base: './'`.

## Validation

- `npm ci` passed with Node 24.12.0 and npm 11.6.2. It reported nine existing
  audit findings (one low, three moderate, five high).
- `npm run build` passed with Vite 5.4.21. It emitted the expected HTML, JS,
  and CSS with relative asset URLs. Browserslist reported stale browser data.
- This checkout contains no test suite or test script. Five local checks
  passed for section hashes, project routes, invalid fragments and links,
  project and contact records, and relative imports and build assets.
- The Vite development server rendered the homepage in the browser. Checked a
  case-study link and its focus/title, reload and back navigation, an archive
  entry, 404 recovery, and the 375 px menu with Escape and section navigation.
  The browser reported no console errors during those checks.

## Remaining work

- Review the restored copy, project slugs, and current skills list. Approve
  media and supply a resume, headshot, and branding assets before adding them
  to the site. The content notes record the project evidence still needed.
- Review npm audit findings and Browserslist data in a dependency maintenance
  task. The lockfile is unchanged.
- After review, add persistent routing and content regression tests before
  expanding case studies or media. The Pages workflow was reviewed locally
  and has not been run for this repair.

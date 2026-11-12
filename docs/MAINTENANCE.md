# Portfolio maintenance guide

Open the local [Portfolio-Website repository](https://github.com/AbidsTent/Portfolio-Website) in Codex Desktop. Use a branch for each update and review the diff and the local preview before publishing. The [README](../README.md) covers initial setup, the [asset guide](../src/assets/README.md) records media sources, and the [content verification notes](CONTENT_VERIFICATION.md) explain what the project evidence supports.

## A. Project architecture

This is a React site built with Vite and hosted as static files on GitHub Pages. Start with the data files for routine content edits.

| Path | What it controls |
| --- | --- |
| [src/content/projects.js](../src/content/projects.js) | The project catalog, homepage placement, case-study text, and imported project media. |
| [src/content/skills.js](../src/content/skills.js) | The ordered skill groups and the entries shown in each group. |
| [src/content/profile.js](../src/content/profile.js) | Hero copy, About paragraphs, education and experience, social links, portrait metadata, and the résumé URL. |
| [src/content/site.js](../src/content/site.js) | Site name, default title and description, and homepage section IDs and labels. |
| [src/assets/projects/](../src/assets/projects/) | Local screenshots and diagrams grouped by project slug. Vite bundles these when imported. |
| [src/pages/ProjectPage.jsx](../src/pages/ProjectPage.jsx) | The layout for all project detail pages. It renders the summary, status, links, full stack, and case-study sections from the selected record. |
| [src/components/projects/](../src/components/projects/) | Shared project cards, figures, links, status, and artwork icons. |
| [src/utils/routes.js](../src/utils/routes.js) | Builds project links and interprets hash routes. [App.jsx](../src/App.jsx) looks up the slug in the catalog and renders the in-app 404 when needed. |
| [tests/](../tests/) | Node regression tests for routing and URLs, plus Vite-rendered tests for the homepage, case studies, résumé, and branding. |
| [public/resume/](../public/resume/) | The public résumé PDF. Vite copies it to the build under the same filename. |
| [public/branding/](../public/branding/) | The favicon SVG, PNG fallback, and 1200 × 630 social preview referenced by [index.html](../index.html). |

Preserve [src/data/portfolioData.jsx](../src/data/portfolioData.jsx). The current catalog reads Finmate’s GitHub link from legacy ID 1 and the archived titles for IDs 2–4. Those archive cards are hidden, but their original slugs still resolve. The route parser also accepts older singular links such as `#/project/finmate`. Keep existing IDs and slugs stable so published links continue to work.

## B. Add a project

1. **Verify the source.** Open the actual project repository and confirm its owner, URL, and public visibility. Read the README and inspect the relevant code, outputs, and assets at a known commit. Record the revision, supported claims, and open questions in the [content verification notes](CONTENT_VERIFICATION.md). For private work, use evidence you are authorized to share and leave the public source link empty if needed. Check a demo link signed out before publishing it.
2. **Add one record to `records` in [projects.js](../src/content/projects.js).** Choose an unused numeric `id` and a unique, lowercase, hyphenated `slug`. Set `title`, `category`, `summary`, `stack`, and `status`. The card shows the first three stack entries; the detail page shows the full list. Use `cardSummary` only if the card needs a shorter version of the summary. Use a verified full HTTP(S) URL for `githubUrl` or `demoUrl`, or omit either field. Both default to `null`.
3. **Choose placement.** Set `featured: true` for **Featured projects** and the hero shortcuts. Omit `featured` or set it to `false` for **Additional work**. Order within each group follows the catalog order. Set `listed: false` to hide the card; anyone with its hash link can still open it. Keep unpublished material out of the catalog and assets.
4. **Set status from evidence.** Use the established labels `Completed` when the stated scope is demonstrably complete, `In Progress` when verified work is still underway, or `Status unconfirmed` when the evidence is inconclusive. Verify deployment, performance, and individual contributions separately before claiming them.
5. **Add the case study in the record.** Use `caseStudy: { sections: [...] }` with a unique `title` and plain-text `body` for each section. Explain what the project does, what was verified, and any limits or planned work. Attach optional media as described in section D. The existing page renders the record automatically at `#/projects/<slug>`. A record without sections still has an overview.
6. **Check the regressions.** In [tests/portfolio.test.js](../tests/portfolio.test.js), update the expected featured order, repository links, and media assertions only if those expectations changed. The current media loop assumes a figure and caption for each current featured entry; keep those assertions for the media that should exist and cover a new media-free project separately if needed. For Additional Work, check the card and detail route and adjust existing expectations if the group changes. [tests/routes.test.js](../tests/routes.test.js) covers general hash parsing and URL validation, so ordinary project additions do not need changes there.

This excerpt uses the existing Finmate record to show the fields. Give a new record its own ID, slug, and verified details.

```js
{
  id: 1,
  slug: 'finmate',
  title: 'Finmate',
  category: 'Application development',
  summary: 'A personal finance application with expense and investment tracking, charts, and browser-stored budgets.',
  stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
  status: 'Status unconfirmed',
  githubUrl: 'https://github.com/AbidsTent/finmate',
  caseStudy: {
    sections: [
      {
        title: 'Source overview',
        body: 'The repository contains a React frontend and Express routes for user-scoped expense and investment records. Completion, deployment, and individual contribution remain unconfirmed.',
      },
    ],
  },
}
```

The catalog currently resolves that GitHub URL through the legacy record. Omitting `featured` keeps Finmate in Additional Work.

## C. Update skills

Edit `skillGroups` in [skills.js](../src/content/skills.js). Each group has a `name` and a `skills` array of display strings. Groups and entries render in array order. Check the existing Languages, Databases, Business Intelligence, Data Engineering, and Development Tools groups before creating a category. Search the whole file for the skill and alternate spellings, then add it to the best fit once. Use consistent names such as `Power BI` or `PySpark` and list skills you can describe from experience.

## D. Add project artifacts

1. **Choose and review the file.** Use a real screenshot, an authorized diagram, or a reproducible export from the source. Check that it contains no credentials, private customer data, or personal information. Keep approved files under `src/assets/projects/<project-slug>/` with descriptive lowercase, hyphenated filenames. PNG works well for screenshots with fine text; SVG works well for exported diagrams. Keep SVGs self-contained and remove any unnecessary remote dependencies before using them.
2. **Import it in [projects.js](../src/content/projects.js).** For example, the current dashboard import is:

   ```js
   import olistOverviewImage from '../assets/projects/ecommerce-power-bi-analytics/olist-executive-overview.png';
   ```

   Define an object like the existing `olistOverview`. Set `src` to the import, `width` and `height` to the image’s intrinsic pixel dimensions or the SVG viewBox dimensions, and `alt` to a concise description of the visual. Add a `caption` that explains what it shows, a verified `sourceUrl` (prefer a file link pinned to the source commit), and a meaningful `sourceLabel`. Credit tutorials, collaborators, and third-party material where applicable. Record provenance or export changes in the [asset guide](../src/assets/README.md).
3. **Attach the object.** Use `cover: olistOverview` on the record to show it on the homepage, or `media: olistOverview` on a case-study section to render a figure and attribution. The same object can serve both roles. Each section supports one figure; add a second section if it needs another. Set `diagram: true` for a diagram so readers can expand and scroll it. Screenshots have a full-size link. A repository, notebook, or report that is not an image can be linked as the figure source or documented in the verification notes; do not use it as the image `src`.
4. **Check how it reads.** Keep the shared image component’s lazy loading and intrinsic dimensions. Check the cover crop, image legibility, and whether a full-size diagram scrolls inside its frame on mobile without widening the page. Use the title, body, caption, and alt text to mark planned designs as **proposed**. Include only verified outputs, and identify screenshot filters, data scope, and run limits where they affect interpretation.

## E. Update profile and résumé

- Edit [profile.js](../src/content/profile.js) for `heroData`, `about`, `background`, and `socialLinks`. Verify titles, dates, and claims before editing. For a new portrait, use [src/assets/profile/](../src/assets/profile/), strip location metadata, and update the import, alt text, and intrinsic dimensions.
- Edit [site.js](../src/content/site.js) for the name and default page metadata. Update the matching static title, description, Open Graph, or X card fields in [index.html](../index.html) when the public wording changes. The static metadata is what crawlers receive before React runs. Keep the canonical and social image URLs pointed at the public Pages site.
- Replace [public/resume/Abid_Sharier.pdf](../public/resume/Abid_Sharier.pdf) with the approved public version. Keeping the filename preserves the link. If the filename changes, update `resumeUrl` in [profile.js](../src/content/profile.js) and the expected path in [portfolio.test.js](../tests/portfolio.test.js). Keep the `import.meta.env.BASE_URL` prefix so the link resolves under the Pages repository path.
- Review the PDF’s visible text, links, and metadata before committing. Anything in the public repository or the Pages build can be downloaded, and removing a file later does not erase Git history or cached copies. Open the résumé from the local homepage to confirm the link and file.

## F. Test locally

Use Node 24 as specified in [.nvmrc](../.nvmrc). In the repository root, run:

```sh
npm ci
npm test
npm run build
npm audit --omit=dev
```

`npm ci` installs the committed lockfile, `npm test` runs the route and rendered-markup checks, `npm run build` generates `dist/`, and `npm audit --omit=dev` checks production dependencies. Read any findings before publishing. If Windows reports a locked esbuild binary during install, stop your own running dev or preview server and retry, or validate in a clean checkout.

For quick edits, use `npm run dev` and open the URL Vite prints. After a build, run `npm run preview -- --base /Portfolio-Website/` and open [the local Pages-style preview](http://localhost:4173/Portfolio-Website/) or use the port Vite prints. Check at about 375 px and 1440 px, and use a tablet width such as 768 px when changing media. Verify:

- The homepage placement and links, the changed detail page, and direct refresh of its hash URL.
- The mobile menu with a keyboard, image and diagram controls, and any résumé or external links you changed.
- No horizontal page overflow or unexpected console errors.

## G. Publish through GitHub

1. Open the local repo in Codex Desktop. In the terminal, run `git status --short --branch` and `git remote -v`. Confirm `origin` points to `AbidsTent/Portfolio-Website`. If the tree has work in progress, handle it before switching branches.
2. With a clean tree, update local `main` and create a short-lived branch. Replace `content/update-portfolio` with a branch name that describes your update.

   ```sh
   git switch main
   git pull --ff-only origin main
   git switch -c content/update-portfolio
   ```

3. Make the change in Codex Desktop using a template below. Review the changed files in `git diff` and run the checks in section F.
4. After review, stage the files you intend to publish. For example, for a skills-only change:

   ```sh
   git add -- src/content/skills.js
   git diff --cached
   git commit -m "Update portfolio technical skills"
   git push -u origin content/update-portfolio
   ```

5. Open a pull request on GitHub with base `main` and your branch as the head. Describe the change, include the evidence and test results, and review **Files changed** before merging. Merge only after review and approval.
6. After the merge, find **Deploy to GitHub Pages** in the [Actions tab](https://github.com/AbidsTent/Portfolio-Website/actions/workflows/deploy.yml). Check that the run for the new commit on `main` succeeds. The [workflow](../.github/workflows/deploy.yml) is triggered by pushes to `main` or `master` and by manual dispatch. The `github-pages` deployment environment currently allows `main`, and Pages uses **GitHub Actions** as its publishing source. Opening a PR does not run this deployment workflow.
7. Open the [live portfolio](https://abidstent.github.io/Portfolio-Website/), reload it, and check the changed content, direct case-study links, and any assets or résumé links that changed. If the workflow fails, inspect the failed step before making a follow-up branch.

## H. Copy-ready Codex prompts

### Add a new portfolio project

```text
Add [project name] to AbidsTent/Portfolio-Website on the current content branch.
Source repository: [URL]. Requested placement: [Featured or Additional Work].
Read docs/MAINTENANCE.md and verify the repo, the work actually implemented,
and the completion status against source files at a known revision. Use a unique
ID and slug, preserve existing routes and design, and write the case study in
src/content/projects.js. Omit unsupported claims and links. Update affected
regression expectations. Run npm ci, npm test, npm run build, and
npm audit --omit=dev. Check the card and detail route on mobile and desktop.
Show the changes and validation results, then stop before committing, pushing,
or deploying.
```

### Update technical skills or professional information

```text
Update [skills, profile, or professional information] using [approved wording
and sources]. Read docs/MAINTENANCE.md, verify the source and any dates or claims,
and ask me about material facts that the evidence does not support. Keep skill
entries unique. Preserve the existing design and routes. Review any replacement
résumé before publishing, and update the PDF link and test if its filename changes.
Run npm ci, npm test, npm run build, and npm audit --omit=dev. Preview the changed
section on mobile and desktop. Show the diff and results, then stop before
committing, pushing, or deploying.
```

### Add project screenshots, diagrams, or evidence

```text
Add [asset names or links] to [project slug]. Read docs/MAINTENANCE.md and verify
the files, their source revision, permission to share, and what each asset
actually demonstrates. Preserve the existing design and routes. Use local image
imports with dimensions, alt text, captions, and attribution. Clearly label
proposed designs and omit private data. Update affected media assertions.
Run npm ci, npm test, npm run build, and npm audit --omit=dev. Check crop,
legibility, links, and diagram controls on mobile and desktop. Show the diff and
results, then stop before committing, pushing, or deploying.
```

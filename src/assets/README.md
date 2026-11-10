# Portfolio assets

Keep only approved, real assets here. No profile photo, project screenshot, or
architecture diagram has been supplied in Phase 2.

- `profile/`: professional profile photo.
- `projects/`: project screenshots, organized into project-slug subdirectories when supplied.
- `diagrams/`: architecture and data-flow diagrams.

Import these files into content modules so Vite fingerprints them and resolves
them correctly under the hosting base. Project screenshots use `{ src, alt,
caption? }` records in `content/projects.js`; optional media is omitted when empty.
`AssetImage` also removes a failed image rather than leaving a broken-image icon.
Supply image dimensions/responsive variants with the real assets during Phase 3.

Put a public resume PDF in `public/resume/` and favicon/social-preview assets in
`public/branding/`. Those files retain their filenames; links must use Vite's
`import.meta.env.BASE_URL` rather than an absolute `/resume/...` or `/branding/...`
path. `content/site.js` records optional asset slots as `null` until supplied.
Do not create download links or image metadata for missing files. Add the final
favicon/social-image metadata only after supplying the actual files and confirming
the public site URL. A social image URL must be absolute for sharing crawlers.

## Local typography

Phase 3 bundles `fonts/InterVariable.woff2` from the official
[Inter repository, tag v4.1](https://github.com/rsms/inter/tree/v4.1).
Source file: `docs/font-files/InterVariable.woff2`. The accompanying
`fonts/OFL.txt` preserves the SIL Open Font License. The font is served locally
with `font-display: swap` and preloaded through Vite; Google Fonts requests are
no longer required. No package dependency was added.

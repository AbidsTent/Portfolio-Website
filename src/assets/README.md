# Portfolio assets

Keep approved project media in `projects/<project-slug>/`. Import it from
`src/content/projects.js` so Vite fingerprints the file and resolves its URL
under the hosting base. Use `cover` for a homepage image and `media` on a
case-study section for a figure. Record the source, intrinsic dimensions,
caption, and descriptive alt text with each figure.

## Project media

- `projects/ecommerce-power-bi-analytics/olist-executive-overview.png` is a
  byte-for-byte copy of the [upstream Executive Overview screenshot](https://github.com/AbidsTent/ecommerce-powerbi-analytics/blob/cb0bbf1e114faed20269d029df4c223fa6202c76/screenshots/executive_overview.png).
- `projects/sql-server-data-warehouse/warehouse-architecture.svg` comes from
  the [upstream draw.io export](https://github.com/AbidsTent/DWH-Project/blob/e47ee27631ea8b90b074e42e1932c58c9213a8d8/docs/Architecture%20diagram.svg).
  The export references three diagrams.net icons. The local copy embeds the
  original folder, file, and gear icons as data URLs. The project follows the
  Data With Baraa warehouse guide. [Project README](https://github.com/AbidsTent/DWH-Project/blob/e47ee27631ea8b90b074e42e1932c58c9213a8d8/README.md)
- `projects/urban-mobility-data-platform/proposed-architecture.svg` renders
  the original [P0 Mermaid flowchart](https://github.com/AbidsTent/urban-mobility-data-platform/blob/811af309b917548f25b5b6a59c2bc812beec2327/docs/architecture.md)
  with native SVG text. The one-time export used Mermaid CLI 11.4.2 with
  Mermaid 11.17.2. The figure depicts the planned architecture.

## Profile and branding

Use `profile/` for an approved professional photo, `public/resume/` for a
public résumé PDF, and `public/branding/` for a favicon or social preview
image. Public files keep their filenames. Use Vite's `import.meta.env.BASE_URL`
for local links and an absolute public URL for social preview metadata.

## Local typography

The V2 recovery uses Inter when installed on the visitor's device, with a system
sans-serif fallback. The Inter font binary is absent from this checkout.
`fonts/OFL.txt` preserves the SIL Open Font License for a future local import.

| Existing direct route only | [Portfolio Website](https://github.com/AbidsTent/Portfolio-Website) | In progress | Local V2 changes exist and remain unpublished; the remote repository is not claimed to contain this uncommitted implementation. |

No verified hosted dashboard/demo URL was found for the selected projects. All
`demoUrl` values stay null; repository and real case-study links are the available
actions. No inferred GitHub Pages, Power BI Service, or hosted application URL is
used.

### SQL Server Data Warehouse

Reviewed revision: `e47ee27631ea8b90b074e42e1932c58c9213a8d8`.

Sources:

- [README and guided-project context](https://github.com/AbidsTent/DWH-Project/blob/e47ee27631ea8b90b074e42e1932c58c9213a8d8/README.md).
- [Bronze DDL/load script](https://github.com/AbidsTent/DWH-Project/blob/e47ee27631ea8b90b074e42e1932c58c9213a8d8/scripts/bronze/ddl_load_data.sql),
  [Silver procedure](https://github.com/AbidsTent/DWH-Project/blob/e47ee27631ea8b90b074e42e1932c58c9213a8d8/scripts/silver/proc_silver_data),
  [Gold views](https://github.com/AbidsTent/DWH-Project/blob/e47ee27631ea8b90b074e42e1932c58c9213a8d8/scripts/gold/gold_ddl).
- [Gold quality checks](https://github.com/AbidsTent/DWH-Project/blob/e47ee27631ea8b90b074e42e1932c58c9213a8d8/tests/gold_quality_check),
  [sales analysis](https://github.com/AbidsTent/DWH-Project/blob/e47ee27631ea8b90b074e42e1932c58c9213a8d8/analytics/sales-analytics.sql),
  [customer analysis](https://github.com/AbidsTent/DWH-Project/blob/e47ee27631ea8b90b074e42e1932c58c9213a8d8/analytics/customer_analysis.sql),
  [product analysis](https://github.com/AbidsTent/DWH-Project/blob/e47ee27631ea8b90b074e42e1932c58c9213a8d8/analytics/product_analysis.sql).

Verified: SQL Server/T-SQL, CRM/ERP CSVs, Bronze/Silver/Gold organization,
`BULK INSERT`, full reloads, customer deduplication, value/date cleaning,
customer/product dimensions and sales fact views, window functions for sales
comparisons and rankings, and quality-check queries. The checks cover customer
key uniqueness, missing dimensional references, and sales arithmetic. Their
presence does not establish that they passed in a live SQL Server environment.

Deliverables include datasets, SQL, analysis queries, and
`docs/Architecture diagram.svg`. A `sales_dashboard.pbix` file is also present,
although the README describes Power BI as future work. Its behavior was not
inspected and is not used to support the portfolio's dashboard claims.

Limits: guided learning work following the Data With Baraa project, not an
independently invented production platform. Source paths are hard-coded Windows
paths. No verified incremental ingestion, orchestration, deployment, CDC,
production monitoring, or runtime/performance results. Several README file paths
do not match the actual tree; source links above use the real filenames, including
extensionless SQL files.

### E-commerce Power BI Analytics

Reviewed revision: `cb0bbf1e114faed20269d029df4c223fa6202c76`.

Sources:

- [README](https://github.com/AbidsTent/ecommerce-powerbi-analytics/blob/cb0bbf1e114faed20269d029df4c223fa6202c76/README.md),
  [model](https://github.com/AbidsTent/ecommerce-powerbi-analytics/blob/cb0bbf1e114faed20269d029df4c223fa6202c76/docs/data_model.md),
  [metric/DAX documentation](https://github.com/AbidsTent/ecommerce-powerbi-analytics/blob/cb0bbf1e114faed20269d029df4c223fa6202c76/docs/metrics_and_dax.md).
- [Data quality](https://github.com/AbidsTent/ecommerce-powerbi-analytics/blob/cb0bbf1e114faed20269d029df4c223fa6202c76/docs/data_quality.md),
  [insights](https://github.com/AbidsTent/ecommerce-powerbi-analytics/blob/cb0bbf1e114faed20269d029df4c223fa6202c76/docs/insights.md),
  [inspected Executive Overview image](https://github.com/AbidsTent/ecommerce-powerbi-analytics/blob/cb0bbf1e114faed20269d029df4c223fa6202c76/screenshots/executive_overview.png).
- [Saved PBIX artifact](https://github.com/AbidsTent/ecommerce-powerbi-analytics/blob/cb0bbf1e114faed20269d029df4c223fa6202c76/Olist_Ecommerce_Analytics.pbix) (presence verified, not executed).

Verified: historical Brazilian Olist marketplace data; order and item grain;
orders, items, customers, products, category translations, and date table;
documented Power Query preparation and unmatched-category handling. The source
image visibly contains KPI cards, monthly trend, state comparison, top categories,
and Year/Category slicers. The documentation describes a separate validation page.
Deliverables include the PBIX, source screenshot, data dictionary, model, metric,
data-quality, and insight documents.

Limits: delivered item revenue sums delivered item prices, excludes freight, and
is not accounting revenue or a claimed business improvement. Exact embedded DAX,
active relationships/cross-filter directions, category-contribution denominator
under slicers, and refresh remain unverified in Desktop. The repository's DAX
examples are conceptual; specific functions are not asserted as recovered PBIX
expressions. CSV checks documented by the repository were not rerun here.
Static insight text does not dynamically update with slicers. No financial KPI
numbers are copied into the portfolio as personal achievements.

### Urban Mobility Data Platform

Reviewed revision: `811af309b917548f25b5b6a59c2bc812beec2327`.

Sources:

- [README](https://github.com/AbidsTent/urban-mobility-data-platform/blob/811af309b917548f25b5b6a59c2bc812beec2327/README.md),
  [profiling notebook](https://github.com/AbidsTent/urban-mobility-data-platform/blob/811af309b917548f25b5b6a59c2bc812beec2327/notebooks/01_source_profiling.ipynb).
- [Progress log](https://github.com/AbidsTent/urban-mobility-data-platform/blob/811af309b917548f25b5b6a59c2bc812beec2327/docs/progress.md),
  [source profile](https://github.com/AbidsTent/urban-mobility-data-platform/blob/811af309b917548f25b5b6a59c2bc812beec2327/docs/source_profile_2025_01.md),
  [incremental-ingestion decision](https://github.com/AbidsTent/urban-mobility-data-platform/blob/811af309b917548f25b5b6a59c2bc812beec2327/docs/adr/001-file-level-incremental.md).

Verified: public repository, foundation scaffold, Python/PySpark source-profiling
notebook reading January 2025 yellow taxi Parquet from a Databricks volume.
Notebook code defines null, timestamp/duration, distance, fare/sign, vendor, and
payment checks. Databricks-specific notebook metadata and paths support the
limited “Databricks notebooks” label, not a deployed platform claim.

Limits: code cells have no saved outputs and execution counts are zero. Markdown
findings are not treated as validated profiling results. Progress notes say
profiling has not occurred; the source-profile file mixes unanalysed/TBD text with
filled values. No profiling totals, hashes, timings, or business findings are
claimed. Pipeline directories are mostly scaffolding. Bronze/Silver/Gold,
Delta tables, SHA-256 manifests, monthly publication registry, quality gates,
Power BI reporting, and performance work are plans. Proposed file-level change
detection is not row-level CDC. Status remains **In Progress**.

### Finmate

Reviewed revision: `88b211dd12b3ca28f20bed3e8f0baebc3065ff39`.

Sources:

- [README](https://github.com/AbidsTent/finmate/blob/88b211dd12b3ca28f20bed3e8f0baebc3065ff39/README.md),
  [frontend dependencies](https://github.com/AbidsTent/finmate/blob/88b211dd12b3ca28f20bed3e8f0baebc3065ff39/frontend/package.json),
  [backend entry](https://github.com/AbidsTent/finmate/blob/88b211dd12b3ca28f20bed3e8f0baebc3065ff39/backend/server.js).
- [Expense routes](https://github.com/AbidsTent/finmate/blob/88b211dd12b3ca28f20bed3e8f0baebc3065ff39/backend/routes/expense.js),
  [investment routes](https://github.com/AbidsTent/finmate/blob/88b211dd12b3ca28f20bed3e8f0baebc3065ff39/backend/routes/investment.js),
  [home/charts](https://github.com/AbidsTent/finmate/blob/88b211dd12b3ca28f20bed3e8f0baebc3065ff39/frontend/src/pages/Home.jsx),
  [expense UI](https://github.com/AbidsTent/finmate/blob/88b211dd12b3ca28f20bed3e8f0baebc3065ff39/frontend/src/pages/Expenses.jsx).

Verified in source: React, Node.js/Express, MongoDB/Mongoose, Chart.js,
expense/investment CRUD routes, authentication checks, user-scoped records,
Socket.IO expense updates, and browser-stored budgets. Frontend/backend source,
models, manifests, and routes are the deliverables. Live market prices are not
supported by the checked routes; stored price fields do not prove a market API.

Follow-up review on November 19, 2026 used the same repository revision and the
owner-supplied `review-assets/finmate-demo.mp4`. The owner identifies Finmate as a
completed academic project. The walkthrough supports that scope and shows:

- Approximately 00:00–00:26, login, a populated dashboard, category and trend
  charts, and dashboard summaries.
- Approximately 00:26–01:38, budget changes, expense additions and edits, API
  responses, and synchronized expense updates across two browser windows.
- Approximately 01:38–02:16, investment creation, editing, deletion, and computed
  portfolio summaries. The forms accept a manually entered current price.
- Approximately 02:18–02:44, logout and registration leading to a new dashboard.
- Approximately 02:48–04:06, MongoDB Compass user and expense documents alongside
  the running app, including expense additions, deletion, and editing.

The source corroborates React routes, Express REST endpoints, Mongoose models,
JWT authentication, bcrypt hashing, and user-scoped database queries. Budgets
are stored in browser localStorage. The recording and code support **Completed**
for an academic team prototype. The README discusses collaboration and the
package metadata names another repository owner. Commit-level review supports
the following scoped contributions attributed to Abid Sharier / `AbidsTent`:

- [2120f72](https://github.com/AbidsTent/finmate/commit/2120f72a7f4526da9b6a05b660f2ac01547bf5ad)
  is a non-merge commit adding investment form, table and summary components,
  modifying the React investment CRUD page, and updating its API client.
- [c19f4e2](https://github.com/AbidsTent/finmate/commit/c19f4e2aa004ccde2d0c67a70c0a251f3b339afd)
  is a non-merge commit adding investment routes and seed code, updating the
  investment model and API mounting, and integrating investment requests.
- [cb8e0a8](https://github.com/AbidsTent/finmate/commit/cb8e0a8ea9a82af503548634767901d45a607713)
  is a non-merge commit adding authenticated Socket.IO connections, user-room
  expense events, and the frontend listener and reload flow.

These statements were checked against the file diffs and GitHub author mapping,
not inferred from merge commits or commit messages alone. The case study names
these recorded contributions within the team project. Broader design ownership,
shared or paired work, project leadership, and individual responsibility for
authentication or the home dashboard still require the owner's confirmation.

Limits: the README still contains conflict markers and contradictory older
descriptions. This review inspected source and recorded UI evidence rather than
starting the application against its database. Public deployment, live stock
price feeds, production readiness, and security quality are not validated. The
source contains a fallback JWT signing secret and browser token storage, which
require a separate hardening review before any production claim.

The original recording is 221,909,324 bytes (about 222 MB), 4:06.82 long, with
1920 × 1080 HEVC video at 30 fps and AAC stereo audio. Visual review sampled the
timeline every two seconds and inspected key frames at larger size. It is not
cleared for publication. Email/autofill information appears during login and
registration, and MongoDB Compass exposes user email addresses and password
hashes around 02:48–03:02. Database records and browser context also need privacy
review. Audio was not independently transcribed. The original video and uncropped
review frames stay under the ignored `/review-assets/` directory and are excluded
from website imports and public assets.

Three separately reviewed screenshot crops are now included as lossless WebP
assets in `src/assets/projects/finmate/`. No video is included. The approved crops
were inspected at their final dimensions, with the following bounds in the
1920 × 1080 source frame (x, y, width, height):

| Asset | Timestamp | Crop bounds | What is visible |
| --- | --- | --- | --- |
| `new-account-dashboard.webp` | 02:43.500 | 168, 356, 1010, 598 | Zero totals and empty chart states after new-account registration. |
| `expense-entry.webp` | 01:40.000 | 1402, 482, 500, 372 | The right-hand app's blank expense form and input placeholders. |
| `investment-entry.webp` | 01:40.000 | 28, 222, 612, 458 | The left-hand app's blank investment form and input placeholders. |

The final crops contain no account names, email addresses, credentials, password
hashes, database records, or populated personal transaction or holding data.
Existing-record views were excluded because their status as non-sensitive demo
data is unconfirmed. No fields or metrics were rewritten, masked, composited,
or generated. The published crops contain no EXIF/XMP metadata. Each caption
states the original time and scope; the source link identifies implementation
code, not a public copy of the private recording.

For a later public demo, create a separately reviewed, redacted recording with
captions and H.264/AAC delivery, then obtain the owner's approval for the chosen
external host and URL. Add a video link or player only after an approved URL is
available. Preserve the original. A small poster, controls, no autoplay, and
`preload="none"` are appropriate if a player is later approved.

### Unlisted projects and route compatibility

Public repository inventory and targeted searches did not identify separate
repositories for **Customer & Product Analytics Platform** or **Canadian Job
Copilot**. This does not prove they do not exist (they may be private or named
differently). Neither is listed, and no URL is guessed. DWH contains customer and
product SQL analyses, but that is insufficient to establish a separate platform.
`Database-Project-610` documentation did not establish such a mapping either.

The previous Multi-Channel Sales Intelligence Platform, Sales & Inventory Analysis,
and Restaurant Performance Dashboard lack verified scope/source links. Their
cards and unsupported claims are withdrawn. Their original IDs and hash routes
remain as clear verification notices, with no stack, demo, or source claims.
Finmate and Portfolio Website retain their original IDs/slugs and routes. New
project IDs start at 6. No router or hosting behavior was replaced.

## Skill evidence and wording

- SQL/T-SQL, SQL Server, ETL, warehousing, and dimensional modeling: DWH source.
- Power BI, Power Query, data modeling, and DAX concepts: Power BI artifacts/docs;
  exact embedded DAX still needs Desktop. The skills list does not claim mastery.
- Python and PySpark: authored Urban notebook; execution is unverified.
  Databricks is qualified as notebook experience, not production administration.
- Pandas and Excel: owner-supplied experience, not independently demonstrated by
  the reviewed priority source files.
- PostgreSQL, Spark SQL, and ELT: owner-requested familiarity, explicitly shown as
  **Foundations**, with no independently verified implementation in this review.
- JavaScript/React/Node.js: Finmate source; React/Vite also verified locally.
  Git/GitHub: repository workflows and owner-supplied toolkit. No years of
  technical experience, expert labels, percentages, or paid-role claims are added.

## Assets and remaining questions

Existing nullable slots and asset directories remain suitable for the resume,
profile photo, screenshots, architecture diagrams, favicon, and social preview.
No fake media, remote hotlinks, or broken download controls were introduced.

Still needed:

1. Approved resume PDF and professional headshot; favicon/social preview assets.
2. Selection/approval and local import of real project screenshots/diagrams.
   Power BI already has a real source screenshot; DWH has an architecture SVG.
   They are not “nonexistent”; portfolio media selection/import is deferred.
3. Exact restaurant employer/title/date details if a fuller employment timeline
   is desired; otherwise the generic truthful operations entry can remain.
4. Actual repositories and scope for Customer & Product Analytics Platform and
   Canadian Job Copilot; no confirmation request blocks this phase.
5. Finmate broader individual ownership, resolved README, independent runtime/security
   checks, and an approved redacted demo URL. Academic completion is now supported
   by the owner confirmation and recorded walkthrough described above.

## Recommendations for stronger case studies

- DWH: document how to configure paths and run the SQL in order; capture actual
  quality-check results; distinguish tutorial baseline from personal extensions;
  reconcile the README with file paths and the existing PBIX artifact.
- Power BI: open/refresh in Desktop, export exact measures and model settings,
  check slicer/denominator behavior, and use approved report/model images. Keep
  historical dataset findings distinct from business impact.
- Urban: reconcile progress/profile documents; save reproducible notebook outputs
  with dataset provenance; then implement and test one end-to-end monthly slice
  before promoting planned features or changing status.
- Finmate: resolve README conflicts, confirm individual contribution, and run the
  actual application before claiming working integrations or completion.

Validation results and Phase 4 file scope are recorded in PORTFOLIO_V2_PLAN.md.

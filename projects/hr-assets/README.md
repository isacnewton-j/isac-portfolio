# HR Assets (local only)

Place images, exports, and optional artifacts for the HR Analytics project in this folder on your local machine.

Do NOT commit sensitive data. Keep PBIX files and raw datasets private — copy them here for local preview only.

Recommended filenames:
- `hr-hero.png` — large hero screenshot (1200×675)
- `hr-1.png`, `hr-2.png` — supporting screenshots (1200px wide)
- `Isac-HR-Analysis.pbix` — optional PBIX (do not push publically)

How to preview locally:

```bash
# from workspace root
python -m http.server 8080 --directory .
# open http://127.0.0.1:8080/projects/hr-dashboard.html
```

If you need help creating redacted screenshots, export PNGs from Power BI Desktop and blur or crop sensitive columns before saving.

Quick export & screenshot recommendations (Power BI Desktop)

- Set the report page size to a standard aspect ratio for clean screenshots: in Power BI Desktop go to `View` → `Page view` → select `Actual size` and in `Format` (paint roller) → `Page size` set `Type` to `16:9` and `Width`/`Height` to `1280x720` (or your preferred size).
- Set display scaling to 100% for consistent pixel output (Windows Settings → Display → Scale 100%).
- Use `File` → `Export` → `Export to PDF` to get full-page export, then open the PDF and export the first page as PNG (most image viewers support export or screenshot at high quality).
- Or use the built-in `Copy visual as image` (right-click a visual) for single-chart exports.
- For a full-page screenshot, maximize Power BI Desktop window, set `Page view` → `Fit to width` or `Actual size`, then use a screen capture tool (Snipping Tool, SnagIt) at the native resolution and save as PNG.

Redaction tips

- If your data contains PII, remove or mask columns before exporting, or blur values in the image editor (Photos, GIMP, or an online blur tool).
- Replace sensitive labels with generic terms (`Region A`, `Dept 1`) before capturing.

Suggested image captions (quick copy-paste)

- `hr-hero.png`: HR Dashboard overview — headcount, hiring funnel, and attrition overview.
- `hr-1.png`: Attrition drivers by department and tenure.
- `hr-2.png`: Time-to-hire trend and hiring funnel conversion rates.

Writeup template (paste into `projects/hr-dashboard.html` or supply as plain text)

Title: HR Analytics Dashboard

Short summary (1–2 lines): A concise summary of what the dashboard shows and who it's for.

Problem: Describe the business problem this dashboard solves (2–3 lines).

Role: Your responsibilities (modeling, DAX, ETL, PBIRS deployment, etc.).

Solution: Brief technical approach — star schema, key measures, incremental refresh, UX choices.

Impact: Quantified outcomes if available (e.g., reduced ETL time by X%, improved report adoption by Y%).

How to add images locally

1. Export screenshots from Power BI Desktop as `hr-hero.png`, `hr-1.png`, `hr-2.png` and copy them into this folder on your machine.
2. Open `projects/hr-dashboard.html` in your browser or run a local server to preview.

Local preview command (from repo root):

```bash
python -m http.server 8080 --directory .
# open http://127.0.0.1:8080/projects/hr-dashboard.html
```

If you want, paste the exported screenshot filenames here and I will update the case study comments and captions for you to copy into the page.

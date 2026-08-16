npx http-server -c-1 portfolio# Isac Newton J Portfolio

Static portfolio site (no build tools required).

## Open Locally

Open `index.html` in a browser.

## Customize

- Edit content in `index.html` and `projects/*.html`
- Styling: `assets/styles.css`
- Interactions: `assets/app.js`

## Note

This repo is intended to be public. Only include documents you’re comfortable sharing publicly (resume, redacted screenshots, etc.).

## Deploy

- This is a static site — deploy by publishing the repository to any static host (Netlify, Vercel, GitHub Pages).
- Netlify: connect the repo and set the publish directory to the repository root. The included contact form uses Netlify Forms (`name="contact"`) and requires no server code.
- To preview locally, open `index.html` in a browser or use a static server such as:

```bash
npx http-server -c-1 .
```

Adjust content in `index.html`, `assets/styles.css`, and `assets/app.js`.

# Kunal Bhasin — Portfolio

Dark editorial portfolio built with React + Vite. No UI libraries, no templates — hand-written CSS.

## Edit your content

Everything (name, bio, projects, links, skills) lives in **`src/data.js`**. Edit that one file; the site updates automatically.

**Screenshots:** drop images into `public/projects/` and list them in a project's `images` array in `src/data.js`, e.g. `images: ['projects/drift-1.png']`. They appear as a scrollable strip when the project row is expanded.

## Run locally

```bash
npm install
npm run dev
```

## Deploy free (pick one)

**Vercel (easiest):**
1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → import the repo → Deploy
3. Done — you get a URL like `kunal-portfolio.vercel.app` to put on LinkedIn

**Netlify:** same flow at netlify.com, or drag-and-drop the `dist/` folder after `npm run build`.

**GitHub Pages:**
```bash
npm run build
# push the dist/ folder to a gh-pages branch, or use the gh-pages package
```
(`vite.config.js` already uses `base: './'` so it works on Pages without changes.)

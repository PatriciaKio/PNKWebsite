# Patricia Kio — Research & Teaching Website

A static, accessible academic website for GitHub Pages. No build step, no frameworks: plain HTML, one CSS file, and a tiny optional script for the mobile menu.

## Accessibility target

**WCAG 2.1 Level AA** (WCAG 2.2 AA where practical). This is the standard required for Florida public universities by:

- the **ADA Title II** web rule (U.S. DOJ, 2024), compliance date April 24, 2026 for large public entities;
- **Section 508**, adopted for Florida state IT by **s. 282.603, Florida Statutes**;
- University of Florida digital accessibility policy.

Built in: skip link, landmarks, logical headings, visible focus, 4.5:1+ contrast in light and dark mode, reflow at 320px / 400% zoom, 24px+ touch targets (44px for nav and buttons), reduced-motion support, forced-colors (Windows High Contrast) support, table captions and header cells, and pages that work without JavaScript.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home / about |
| `research.html` | Plain-language summaries of the two articles |
| `papers.html` | Publications list + placeholder slots |
| `posters.html` | Poster gallery + placeholder slots |
| `student-work.html` | Student case studies + placeholder slots |
| `accessibility.html` | Accessibility statement and feedback contact (required) |

## Adding content

Every placeholder in the HTML has a comment above it starting with `PLACEHOLDER` explaining what to do. Search for that word.

### Papers → `assets/papers/`
1. **Make the PDF accessible first** (Acrobat: *Accessibility → Automatically tag PDF*, then *Accessibility Check*; or check with the free PAC tool). It must have tags, a title, document language, reading order, and alt text on figures.
   > Note: `Kio_website.pdf` (the EAAE–ARCC paper) is currently **untagged** and its fonts are not text-extractable, so screen readers cannot read it. Export a fresh PDF from the original Word file with *Create accessible PDF* turned on before uploading it.
2. Name files in lowercase with hyphens, e.g. `kio-2024-eaae-arcc.pdf`.
3. Copy a placeholder `<li>` in `papers.html`, fill it in, include file type and size in the link text, e.g. `Download PDF (PDF, 1.2 MB)`, and remove the `placeholder` class.

### Posters → `assets/posters/`
1. Export a web image about 1600px wide (JPG/WebP) plus the accessible PDF if you have one.
2. Replace the placeholder box with an `<img>` that has short, meaningful `alt` text.
3. Paste **all** poster text (and describe charts in words) into the `<details>` "Full text of poster" section.

### Student work → `assets/student-work/`
1. Get **written permission** from each student before posting names, images, or files (FERPA).
2. Images need alt text; videos need captions; audio needs a transcript.

## Publishing on GitHub Pages

1. In the repository: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, choose `main` and `/ (root)`, then **Save**.
2. After a minute the site is live at `https://patriciakio.github.io/PNKWebsite/`.
3. Every push to `main` republishes the site automatically.

## License

The site's code (HTML, CSS, JavaScript) is under the MIT License in `LICENSE`. Research text, posters, papers, and images are © Patricia Kio, and student work is © its student authors, shared with permission; they are not covered by the MIT License.

## Checking accessibility after edits

- Tab through each page with the keyboard only; every control should be reachable and visibly focused.
- Run **WAVE** (wave.webaim.org) or the **axe DevTools** browser extension on each page.
- Zoom the browser to 400% and confirm nothing needs sideways scrolling.
- Update the "Last reviewed" date in `accessibility.html`.

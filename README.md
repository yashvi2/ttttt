# Yashvi Jain — Portfolio

Static portfolio site for a UX Designer, Service Designer and Design Researcher. Built with React and Three.js loaded from CDNs (cdnjs, jsDelivr), with htm for JSX-like templates, so there is no build step.

## Run locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000. Pages live at `#work`, `#approach`, `#about` and `#contact`; case studies open at `#case-<id>` (for example `#case-pfizer`).

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Page shell and library scripts |
| `assets/data.js` | All project and contact content. Edit copy here. |
| `assets/app.js` | React components, Three.js hero scene, scroll engine, case-study view, anonymised artefact drawings |
| `assets/style.css` | Warm paper theme, Bricolage Grotesque + Figtree (+ Caveat for notes), one type scale, collage and card styles |
| `assets/img/` | Photos, the illustrated portrait, experiment videos (H.264, muted) and posters |

## Before publishing

Search the repo for `CHECK` and confirm each item:

- CV link and portfolio PDF in `assets/data.js` (`SITE`)
- Project images: set `image` on each project in `assets/data.js` (placeholders show until then)
- Case study timeline and tools: set `timeline` and `tools` on each project to show them in the at-a-glance bar
- Talk and hackathon photos: set `src` and captions in `MOMENTS` in `assets/data.js`
- Experiment descriptions in `EXPERIMENTS`, and the travel / reading / baking copy in `assets/app.js`
- Project copy is written in general process language with no invented metrics or findings. Replace it with specifics you can disclose and remove anything that does not match what happened
- Team size and solo/group status for projects 04 and 05
- Research & thinking threads: link real essays, MA papers or talks

Deploys as-is to GitHub Pages, Netlify or Vercel.

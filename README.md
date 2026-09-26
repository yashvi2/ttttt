# Yashvi Jain — Portfolio

Static portfolio site for a UX Designer, Service Designer and Design Researcher. Built with React and Three.js loaded from CDNs (cdnjs, jsDelivr), with htm for JSX-like templates, so there is no build step.

## Run locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000. Case studies open at `#case-<id>` (for example `#case-pfizer`).

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Page shell and library scripts |
| `assets/data.js` | All project and contact content. Edit copy here. |
| `assets/app.js` | React components, Three.js hero scene, scroll engine, case-study view, anonymised artefact drawings |
| `assets/style.css` | Design tokens (dark ground, off-white type, red accent), Poppins + Julius Sans One, layouts and scroll effects |

## Before publishing

Search the repo for `CHECK` and confirm each item:

- LinkedIn URL, CV link, portfolio PDF and portrait image in `assets/data.js` (`SITE`)
- The `30 days → 3 days` outcome in `assets/app.js` (Experience section): confirm the project, the measure and that it can be disclosed
- Project copy is written in general process language with no invented metrics or findings. Replace it with specifics you can disclose and remove anything that does not match what happened
- Team size and solo/group status for projects 04 and 05
- Research & thinking threads: link real essays, MA papers or talks

Deploys as-is to GitHub Pages, Netlify or Vercel.

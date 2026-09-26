# Yashvi Jain — Portfolio

Static portfolio site for a UX Designer, Service Designer and Design Researcher. No build step.

## Run locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000. Case studies open at `#case-<id>` (for example `#case-pfizer`).

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Homepage sections: hero, work, transferability, approach, principles, experience, about, research, skills, contact |
| `assets/data.js` | All project and contact content. Edit copy here. |
| `assets/app.js` | Work grid, filters, case-study view, approach loop, anonymised artefact drawings |
| `assets/style.css` | Design tokens (light and dark), layout and components |

## Before publishing

Search the repo for `CHECK` and confirm each item:

- LinkedIn URL, CV link and portfolio PDF in `assets/data.js` (`SITE`)
- The `30 days → 3 days` outcome in `index.html`: confirm the project, the measure and that it can be disclosed
- Project copy is written in general process language with no invented metrics or findings. Replace it with specifics you can disclose and remove anything that does not match what happened
- Team size and solo/group status for projects 04 and 05
- Research & thinking threads: link real essays, MA papers or talks

Deploys as-is to GitHub Pages, Netlify or Vercel.

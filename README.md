# Yashvi Jain — Portfolio

A React + Vite build of the "Portfolio UI mockups" Claude Design project: the
home page plus four case studies (Move, AVA & Dosing Error, Pfizer, Birdsong).

```bash
npm install
npm run dev      # local dev server
npm run build    # static site in dist/ (relative paths, deploy anywhere)
```

## Layout

- `src/pages/<Screen>.jsx`: each screen's markup (JSX).
- `src/pages/<Screen>.logic.js`: its state, handlers and data (`renderVals()`).
- `src/pages/<Screen>.css` / `.states.css`: screen styles and hover/focus states.
- `src/dc/`: the small runtime the screens share: the `DCLogic` base
  component, `defineScreen`, template helpers and the asset-path map.
- `src/components/ImageSlot.jsx`: the circular/rect photo frames.
- `public/`: images, the design-system stylesheet, Figma token sheets and the CV PDF.

Note: the floating "Ask my portfolio agent" chat calls `window.claude.complete`,
which only exists inside Claude. On a normal host it shows its fallback reply
pointing visitors to email.

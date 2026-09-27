# Design system rules

Rules for keeping this portfolio consistent. Tokens live in `assets/style.css` (`:root`).

## Type
- **Headings:** Bricolage Grotesque. Display 700, section/card headings 600–650, tracking tighter as size grows (−.015em to −.035em).
- **Reading text:** Figtree 400, 17px body, line-height 1.6–1.7. Never lighter than 400.
- **Labels:** Bricolage 600, 11–13px, uppercase, +.14em tracking, red, with a 20px rule before eyebrows.
- **No handwriting fonts.** Warmth comes from colour, photos and motion, not script type.

## Colour
- Paper `--paper`, cards `--card`, ink `--ink` / `--ink-2` / `--ink-3`, hairlines `--line`.
- **Red is for action and emphasis only:** primary button, labels, the active state. One red focal point per view.
- Tints (`--sky`, `--sage`, `--blush`, `--butter`) are for placeholder artwork and thin accent edges, not large backgrounds.

## Layout
- Content width `--maxw` (1320px) with `--gut` side padding.
- Cards in a row share width **and** height (`align-items: stretch`); the call to action sits on the bottom edge.
- No rotation on work, case-study or navigation cards. Tilt is reserved for taped photos on About.
- Surfaces: hairline border plus one soft shadow. No hard offset shadows.

## Motion
- Easing `--ease-out` (cubic-bezier(.2,.8,.2,1)); entrances 0.6–1s; hovers 0.2–0.4s.
- One idea per moment: headlines rise word by word, images clip-reveal, content fades up on scroll.
- Content already on screen is never hidden to animate it in.
- Everything decorative is off under `prefers-reduced-motion`.

## Interaction
- Every hover has a matching focus state.
- Hover previews never cover the text they describe (they sit behind it or beside the cursor).

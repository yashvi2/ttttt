# Design system

The rules every page of the portfolio follows. When you add or change UI,
use these values instead of picking new ones.

## 1. Type

### Fonts
Each page uses at most two typefaces: one **display** face for headings and
big statements, and one **text** face for everything functional.

| Page | Display (H1–H3, statements) | Text (body, labels, nav, buttons) |
|---|---|---|
| Home, Work, About, Contact | Gloock | Geist |
| AVA & Dosing Error | Johnson Display | Johnson Text |
| What It Takes to Move | Source Serif 4 | Source Serif 4 |
| Pfizer.com | Geist | Instrument Sans |
| Birdsong (IME) | Averia Libre | Poppins |

The shared nav, footer and chat button always use Geist. The logo is
"Yashvi Jain" set in Gloock.

### Heading scale
Defined once in `src/styles/type.css` and applied to every `h1`–`h6`
on every page. These rules beat inline styles, so set the right tag and
don't set font size, line height or letter-spacing on headings. Font
family, weight and colour come from the page.

| Level | Use | Size | Line height | Tracking |
|---|---|---|---|---|
| H1 | Page or case-study title, one per screen | clamp(44px, 5.6vw, 88px) | 1.0 | −0.03em |
| H2 | Section heading | clamp(32px, 3.6vw, 56px) | 1.05 | −0.02em |
| H3 | Sub-section, card or project title | clamp(24px, 2.2vw, 34px) | 1.15 | −0.015em |
| H4 | Small heading inside a block | clamp(19px, 1.5vw, 22px) | 1.3 | −0.01em |
| H5 | Minor heading | 16px | 1.4 | 0 |
| H6 | Overline / eyebrow label | 12px, uppercase, weight 500 | 1.4 | 0.14em |

For text that can't be a heading tag (a button or a link), use the
`.yj-h1` … `.yj-h6` classes.

### Body and labels (Geist on the home pages)
- Body: 15–17px, line height 1.5, colour #cfcfcf on black.
- Small uppercase labels, e.g. "(About) — From interfaces to services":
  12–13px, weight 500, tracking 0.14em, colour #999.
- Fact and stat labels: 12px uppercase, tracking 0.14em, colour #8a8a8a.

## 2. Colour

### Home and shared UI (dark)
| Token | Value | Use |
|---|---|---|
| Ink / background | #000000 | Page background |
| Surface | #141414 | Cards, image frames |
| Rule | #262626 | Divider lines |
| Paper / text | #f4f4f4 | Primary text on black |
| Muted text | #999999, #8a8a8a | Labels, secondary text |
| Accent | #b6f23a (`--yj-accent`) | Links, CTAs, highlighted words, the ID card |

The accent is never used for body text on a light background; it fails
contrast there.

### Case studies
Each case sets its own accent through `--yj-accent` while it is open:
- AVA: J&J red
- Move: #c4161c on #fcfbf8 paper
- Pfizer: #0000c9
- CRAY: #b46cf5

Halftone photos on the Move page are printed in the case red by
`scripts/halftone.py`.

## 3. Space and layout
- Content width: max 1600px, side padding `clamp(20px, 7vw, 128px)`.
- Space between home sections: 140px on top (160px before the footer band).
- Inside a section: 24–36px between blocks, 12px between buttons.
- Phones (≤ 640px): the header becomes one row (logo + Work / About /
  Contact), the "What are you building?" pill hides, and nothing may make
  the page wider than the screen (`overflow-x: clip` on html and body).

## 4. Shape
| Element | Radius |
|---|---|
| Pills: nav, buttons, tags | 999px |
| ID card | 14px |
| Photos and image frames | 4px |

## 5. Components
- **Nav pills:** frosted glass (white 8% fill, 14px backdrop blur, 18%
  white border). Over light backgrounds they switch to dark text on white
  glass automatically (`syncTone`).
- **Primary button:** accent fill, black text, 12px × 22px padding, 17px.
- **Secondary button:** transparent, 1.5px #f4f4f4 border, same size.
- **Text links in the hero:** accent colour in square brackets, e.g.
  "[Download CV ↓]".
- **Tags on the ID card:** solid black-with-accent or white-with-black,
  uppercase, hard 3px shadow.
- **Project cards:** #141414 card, cover image, H3 title in Gloock, small
  outlined meta pills, "Get nosy →" button.

## 6. Motion
- Ease: `cubic-bezier(.2,.7,.2,1)` for UI and `cubic-bezier(.3,1.6,.4,1)`
  for playful overshoots.
- Durations: 250–400ms for hovers and colour changes, 500–1100ms for
  reveals.
- Every animation must stop or settle under `prefers-reduced-motion`.
- The hero ID card is the only physics object on the home page. Don't add
  a second one.

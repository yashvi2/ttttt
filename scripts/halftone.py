"""Print editorial photos for the "What It Takes to Move" case as blue halftones.

Each photo becomes a dot screen in one ink colour on a transparent background,
like a newspaper spot-colour print. Dot size follows how dark the photo is at
that point. The grid is turned 45 degrees, as in offset printing.

Writes <name>-ht.webp next to each source. Run from the repo root:
    python3 scripts/halftone.py
"""
import math
import os

from PIL import Image, ImageDraw, ImageEnhance, ImageOps

INK = (196, 22, 28)  # the case's red spot colour (#c4161c), so prints match the page
CELL = 7             # dot pitch in output pixels
SS = 3               # supersampling for smooth dot edges
MAX_W = 1400
ANGLE = 45

PHOTOS = [
    'public/assets/web/assets/ma/postcard-mockup.webp',
    'public/assets/web/assets/ma/iwillgoout.webp',
    'public/assets/web/assets/ma/exhibit-wall-hq.webp',
    'public/assets/web/assets/ma/exhibit-visitor-hq.webp',
    'public/assets/web/assets/ma/exhibit-tags-hq.webp',
    'public/assets/web/assets/focus-group.webp',
    'public/assets/web/assets/ma/expert-interview.webp',
    'public/assets/web/assets/ma/game-family.webp',
    'public/assets/web/assets/ma/game-classroom.webp',
    'public/assets/web/assets/ma/game-a.webp',
    'public/assets/web/assets/ma/game-c.webp',
    'public/assets/web/assets/ma/testing-1.webp',
    'public/assets/web/assets/ma/testing-2.webp',
]


def halftone(path):
    src = Image.open(path).convert('RGB')
    if src.width > MAX_W:
        src = src.resize((MAX_W, round(src.height * MAX_W / src.width)), Image.LANCZOS)
    w, h = src.size
    g = ImageOps.grayscale(src)
    g = ImageOps.autocontrast(g, cutoff=1)
    g = ImageEnhance.Contrast(g).enhance(1.15)

    # Work on a rotated copy so the dot grid ends up at 45 degrees.
    rot = g.rotate(ANGLE, expand=True, fillcolor=255, resample=Image.BICUBIC)
    rw, rh = rot.size
    small = rot.resize((max(1, rw // CELL), max(1, rh // CELL)), Image.BOX)
    mask = Image.new('L', (rw * SS, rh * SS), 0)
    d = ImageDraw.Draw(mask)
    px = small.load()
    rmax = CELL * SS * 0.6  # even the darkest dots leave paper showing, as in newsprint
    for y in range(small.height):
        for x in range(small.width):
            dark = ((1 - px[x, y] / 255) ** 1.35) * 0.92  # lighter mid-tones keep photos readable
            if dark < 0.05:
                continue
            r = rmax * math.sqrt(dark)  # area, not radius, tracks tone
            cx, cy = (x + 0.5) * CELL * SS, (y + 0.5) * CELL * SS
            d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=255)
    mask = mask.resize((rw, rh), Image.LANCZOS)
    mask = mask.rotate(-ANGLE, expand=True, resample=Image.BICUBIC)
    l, t = (mask.width - w) // 2, (mask.height - h) // 2
    mask = mask.crop((l, t, l + w, t + h))

    # 16 alpha levels keep the dot edges smooth and compress far better losslessly
    mask = mask.point(lambda v: (v // 17) * 17)
    out = Image.new('RGBA', (w, h), INK + (0,))
    out.putalpha(mask)
    dst = path.rsplit('.', 1)[0] + '-ht.webp'
    out.save(dst, 'WEBP', lossless=True, quality=100, method=6)
    return dst, os.path.getsize(dst) // 1024


if __name__ == '__main__':
    for p in PHOTOS:
        dst, kb = halftone(p)
        print(f'{kb:5} KB  {dst}')

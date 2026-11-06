"""Cut the portrait out of its plain light background (OpenCV GrabCut).

Writes public/assets/web/assets/yashvi-cutout.webp with a transparent
background. Run from the repo root:  python3 scripts/cutout.py
"""
import cv2
import numpy as np

SRC = 'public/assets/web/assets/yashvi.webp'
DST = 'public/assets/web/assets/yashvi-cutout.webp'

img = cv2.imread(SRC)
h, w = img.shape[:2]
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Seed GrabCut: bright wall connected to the frame edge is background,
# very dark areas (dress, hair, chair) are foreground, the rest is unknown.
bright = (gray > 205).astype(np.uint8)
n, lab = cv2.connectedComponents(bright)
edge = set(np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))) - {0}
wall = np.isin(lab, list(edge))
mask = np.full((h, w), cv2.GC_PR_FGD, np.uint8)
mask[wall] = cv2.GC_PR_BGD
mask[cv2.erode(wall.astype(np.uint8), np.ones((25, 25), np.uint8)) > 0] = cv2.GC_BGD
mask[gray < 55] = cv2.GC_FGD
# Wall that shows through gaps (e.g. between the arm and the chair) is not
# connected to the edge, so mark large, flat, very bright pockets as background too.
pockets = (gray > 228).astype(np.uint8)
n2, lab2, st2, _ = cv2.connectedComponentsWithStats(pockets)
for i in range(1, n2):
    if st2[i, cv2.CC_STAT_AREA] > 1500 and not np.isin(i, list(edge)):
        reg = lab2 == i
        if gray[reg].std() < 9:
            mask[cv2.dilate(reg.astype(np.uint8), np.ones((5, 5), np.uint8)) > 0] = cv2.GC_BGD

bgd, fgd = np.zeros((1, 65), np.float64), np.zeros((1, 65), np.float64)
cv2.grabCut(img, mask, None, bgd, fgd, 6, cv2.GC_INIT_WITH_MASK)
fg = np.where((mask == cv2.GC_FGD) | (mask == cv2.GC_PR_FGD), 255, 0).astype(np.uint8)

# Keep the largest shape (the person), fill holes, then soften the edge.
n, lab, stats, _ = cv2.connectedComponentsWithStats(fg)
keep = 1 + np.argmax(stats[1:, cv2.CC_STAT_AREA])
fg = np.where(lab == keep, 255, 0).astype(np.uint8)
fg = cv2.morphologyEx(fg, cv2.MORPH_CLOSE, np.ones((9, 9), np.uint8))
alpha = cv2.GaussianBlur(fg, (0, 0), 1.4)

rgba = cv2.cvtColor(img, cv2.COLOR_BGR2BGRA)
rgba[:, :, 3] = alpha
ys, xs = np.where(alpha > 8)
pad = 12
y0, y1 = max(0, ys.min() - pad), min(h, ys.max() + pad)
x0, x1 = max(0, xs.min() - pad), min(w, xs.max() + pad)
cv2.imwrite(DST, rgba[y0:y1, x0:x1], [cv2.IMWRITE_WEBP_QUALITY, 90])
print('wrote', DST, (x1 - x0, y1 - y0))

"""Find the region of a source image shown in a mockup crop, and export it as a high-resolution crop.

Usage: python3 scripts/match-crop.py <mockup.png> x0,y0,x1,y1 <source> <output> [scale_factor]
The mockup box is matched against the source resized at many scales (multi-scale template matching);
the matching source region is then saved at `scale_factor` times the mockup size (default 2).
"""
import sys
import cv2
import numpy as np

mock_path, box, src_path, out_path = sys.argv[1:5]
factor = float(sys.argv[5]) if len(sys.argv) > 5 else 2.0
x0, y0, x1, y1 = (int(v) for v in box.split(','))
mock = cv2.imread(mock_path, cv2.IMREAD_COLOR)[y0:y1, x0:x1]
src = cv2.imread(src_path, cv2.IMREAD_UNCHANGED)
if src.ndim == 3 and src.shape[2] == 4:  # flatten transparency on the mockup background
    alpha = src[:, :, 3:4] / 255.0
    bg = mock[2, 2].astype(float)
    src = (src[:, :, :3] * alpha + bg * (1 - alpha)).astype(np.uint8)
th, tw = mock.shape[:2]
best = (-1, None, None)
for s in np.geomspace(max(tw / src.shape[1], th / src.shape[0]), 1.2, 120):
    scaled = cv2.resize(src, None, fx=s, fy=s, interpolation=cv2.INTER_AREA)
    if scaled.shape[0] < th or scaled.shape[1] < tw:
        continue
    res = cv2.matchTemplate(scaled, mock, cv2.TM_CCOEFF_NORMED)
    _, score, _, loc = cv2.minMaxLoc(res)
    if score > best[0]:
        best = (score, s, loc)
score, s, (lx, ly) = best
sx, sy, sw, sh = lx / s, ly / s, tw / s, th / s
print(f'score {score:.3f} scale {s:.4f} source box {sx:.0f},{sy:.0f},{sx + sw:.0f},{sy + sh:.0f}')
crop = src[round(sy):round(sy + sh), round(sx):round(sx + sw)]
out = cv2.resize(crop, (round(tw * factor), round(th * factor)), interpolation=cv2.INTER_AREA)
cv2.imwrite(out_path, out, [cv2.IMWRITE_JPEG_QUALITY, 92])

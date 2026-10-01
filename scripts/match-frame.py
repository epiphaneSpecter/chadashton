"""Pick the frame of a video/GIF that best matches a mockup crop and save it as a poster image.

Usage: python3 scripts/match-frame.py <mockup.png> x0,y0,x1,y1 <video-or-gif> <output.jpg> [fps]
Frames are sampled with ffmpeg (default 4 fps), compared at low resolution with the mockup crop,
and the best one is exported at full resolution.
"""
import subprocess
import sys
import tempfile
from pathlib import Path

import numpy as np
from PIL import Image

mock_path, box, media, out = sys.argv[1:5]
fps = sys.argv[5] if len(sys.argv) > 5 else '4'
x0, y0, x1, y1 = (int(v) for v in box.split(','))
mock = Image.open(mock_path).convert('RGB').crop((x0, y0, x1, y1)).resize((64, 64))
target = np.asarray(mock, dtype=float)
with tempfile.TemporaryDirectory() as tmp:
    subprocess.run(
        ['ffmpeg', '-v', 'error', '-i', media, '-vf', f'fps={fps}', f'{tmp}/f%05d.png'],
        check=True,
    )
    frames = sorted(Path(tmp).glob('f*.png'))
    scores = [
        np.mean((np.asarray(Image.open(f).convert('RGB').resize((64, 64)), dtype=float) - target) ** 2)
        for f in frames
    ]
    best = int(np.argmin(scores))
    Image.open(frames[best]).convert('RGB').save(out, quality=90)
    print(f'{Path(media).name}: frame {best} of {len(frames)} (t={best / float(fps):.2f}s), mse {scores[best]:.0f}')

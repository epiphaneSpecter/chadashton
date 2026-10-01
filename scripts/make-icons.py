"""Favicon in high definition: the "A" of the provided 16x16 favicon (assets-source/Font/favicon.png),
redrawn from the same glyph of the CA Scholar V2 Italic font, same colors.
Writes public/favicon.svg, public/apple-touch-icon.png (180) and public/icon-512.png."""
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.boundsPen import BoundsPen
from PIL import Image, ImageDraw, ImageFont

FONT = 'assets-source/Font/CAScholarV2-Italic.otf'
src = Image.open('assets-source/Font/favicon.png').convert('RGB')
# Background = most common color, letter = lightest pixel of the original favicon.
pixels = [src.getpixel((x, y)) for y in range(src.height) for x in range(src.width)]
bg = max(set(pixels), key=pixels.count)
fg = max(pixels, key=sum)
hexa = lambda c: '#%02x%02x%02x' % c

font = TTFont(FONT)
glyphs = font.getGlyphSet()
pen = SVGPathPen(glyphs)
glyphs['A'].draw(pen)
bounds = BoundsPen(glyphs)
glyphs['A'].draw(bounds)
x0, y0, x1, y1 = bounds.bounds
w, h = x1 - x0, y1 - y0
size = max(w, h) / 0.72  # the letter fills about 72% of the square, as in the 16 px favicon
tx, ty = (size - w) / 2 - x0, (size - h) / 2 + y1
svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size:.0f} {size:.0f}">
<rect width="100%" height="100%" fill="{hexa(bg)}"/>
<path fill="{hexa(fg)}" transform="translate({tx:.0f} {ty:.0f}) scale(1 -1)" d="{pen.getCommands()}"/>
</svg>
'''
open('public/favicon.svg', 'w').write(svg)

for px, name in [(180, 'apple-touch-icon.png'), (512, 'icon-512.png')]:
    im = Image.new('RGB', (px, px), bg)
    f = ImageFont.truetype(FONT, int(px * 0.72 / (h / font['head'].unitsPerEm)))
    d = ImageDraw.Draw(im)
    l, t, r, b = d.textbbox((0, 0), 'A', font=f)
    d.text(((px - (r - l)) / 2 - l, (px - (b - t)) / 2 - t), 'A', font=f, fill=fg)
    im.save(f'public/{name}')
print('bg', hexa(bg), 'fg', hexa(fg))

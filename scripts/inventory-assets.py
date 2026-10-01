"""Walk assets-source/ and dump name, type, size, dimensions and media info as JSON.

Usage: python3 scripts/inventory-assets.py out.json
"""
import os, json, subprocess, sys
from PIL import Image
Image.MAX_IMAGE_PIXELS=None
try:
    import pillow_heif; pillow_heif.register_heif_opener()
except Exception: pass
root='assets-source'; rows=[]
for d,_,fs in os.walk(root):
    for f in sorted(fs):
        if f=='README.md': continue
        p=os.path.join(d,f); rel=os.path.relpath(p,root); ext=f.rsplit('.',1)[-1].lower(); size=os.path.getsize(p); dims=''; extra=''
        try:
            if ext in ('png','jpg','jpeg','gif','heic'):
                im=Image.open(p); dims=f'{im.width}×{im.height}'
                if ext=='gif': extra=f'{getattr(im,"n_frames",1)} frames'
            if ext in ('mp4','mov','gif'):
                o=json.loads(subprocess.run(['ffprobe','-v','quiet','-print_format','json','-show_format','-show_streams',p],capture_output=True,text=True).stdout)
                v=[s for s in o['streams'] if s['codec_type']=='video'][0]
                dims=dims or f"{v['width']}×{v['height']}"
                dur=float(o['format'].get('duration',0)); a=any(s['codec_type']=='audio' for s in o['streams'])
                extra=(extra+' ' if extra else '')+f"{dur:.1f}s {v['codec_name']}{' +audio' if a else ''}"
        except Exception as e: extra=f'err {e}'
        rows.append((rel,ext,size,dims,extra))
json.dump(rows,open(sys.argv[1],'w'),ensure_ascii=False)
print(len(rows))

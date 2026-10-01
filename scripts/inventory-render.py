"""Render the JSON produced by inventory-assets.py as a Markdown table."""
import json, sys

HEAVY_IMAGE = 2 * 1024 * 1024
HEAVY_MEDIA = 5 * 1024 * 1024

rows = json.load(open(sys.argv[1]))
print("| Fichier | Type | Poids | Dimensions | Détails | Flag |")
print("|---|---|---:|---|---|---|")
for rel, ext, size, dims, extra in rows:
    limit = HEAVY_MEDIA if ext in ("mp4", "gif", "psd", "ai", "pdf") else HEAVY_IMAGE
    flags = []
    if size > limit:
        flags.append("lourd")
    if " " in rel or "'" in rel or "&" in rel:
        flags.append("renommer")
    if ext in ("psd", "ai", "pdf", "heic"):
        flags.append("source")
    kb = size / 1024
    weight = f"{kb / 1024:.1f} Mo" if kb > 1024 else f"{kb:.0f} Ko"
    print(f"| `{rel}` | {ext} | {weight} | {dims} | {extra} | {', '.join(flags)} |")

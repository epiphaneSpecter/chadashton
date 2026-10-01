#!/usr/bin/env bash
# Converts the source animations (GIF / MP4 in assets-source/, never modified) into web videos:
# public/videos/<name>.webm (VP9) + <name>.mp4 (H.264, faststart), plus <name>-m.* for small screens.
# Usage: scripts/encode-videos.sh [name ...]   (no argument = every video of the table below)
set -euo pipefail
cd "$(dirname "$0")/.."

SRC=assets-source/Animation
OUT=public/videos
mkdir -p "$OUT"

# Bit rate capped at <width> kbit/s (1920 px = 1.9 Mbit/s), grainy animations stay light.
# name | source | width | mobile width (0 = none) | audio (yes/no) | extra filter before scaling
TABLE=$(
  cat <<'EOF'
animation-hero|Dog_animation_footage.mp4|1920|960|no|
portfolio-evening|Animation.mp4|1920|960|yes|
cyclist|cyclist_GIF_B&W.gif|800|0|no|
geometrical-animation|01_grenier_ch_AT1.mp4|800|0|no|
vanderberg-magazine-cover|Vanderburg_mag_cover.gif|834|0|no|
record-player-cinemagraph|02_grenier_ch_AT3_A.gif|1000|0|no|
la-rue-sanime|_grenier_ch_introweb.mp4|1920|960|no|
the-ball-and-box|1st_animation_ig.mp4|1920|960|no|
a-classic-european-dinner|classic_european dinner.mp4|1200|0|no|
reflect-your-ambitions|1_Reflect_your_ambitions.mp4|1920|960|yes|
embrace-every-moment|2_Embrace_every_moment.mp4|1920|960|yes|
yarha-caleche|Caleche_1.gif|1446|0|no|crop=2689:996:401:479,
EOF
)

encode() {
  local input=$1 output=$2 width=$3 audio=$4 filter=$5
  local vf="${filter}scale=${width}:-2:flags=lanczos,format=yuv420p"
  local a_mp4=(-an) a_webm=(-an)
  if [[ $audio == yes ]]; then
    a_mp4=(-c:a aac -b:a 128k)
    a_webm=(-c:a libopus -b:a 96k)
  fi
  ffmpeg -nostdin -v error -y -i "$input" -vf "$vf" -c:v libx264 -preset slow -crf 27 -profile:v high \
    -maxrate "${width}k" -bufsize "$((width * 2))k" -movflags +faststart "${a_mp4[@]}" "$output.mp4"
  ffmpeg -nostdin -v error -y -i "$input" -vf "$vf" -c:v libvpx-vp9 -crf 38 -b:v "${width}k" -row-mt 1 \
    -deadline good -cpu-used 2 "${a_webm[@]}" "$output.webm"
  echo "$output: $(du -h "$output.mp4" | cut -f1) mp4, $(du -h "$output.webm" | cut -f1) webm"
}

while IFS='|' read -r name source width mobile audio filter; do
  if [[ $# -gt 0 ]] && [[ ! " $* " == *" $name "* ]]; then continue; fi
  encode "$SRC/$source" "$OUT/$name" "$width" "$audio" "$filter"
  if [[ $mobile != 0 ]]; then encode "$SRC/$source" "$OUT/$name-m" "$mobile" "$audio" "$filter"; fi
done <<<"$TABLE"

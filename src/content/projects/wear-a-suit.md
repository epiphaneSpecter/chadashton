---
title: Wear a Suit
cardLabel: WEAR A SUIT
category: animation
order: 1
header:
  text: WEAR A SUIT - personal animated advertisement project
  mobileText: Personal project for SURMESUR
  exitColor: '#454545'
  left: 140
  right: 139
background: '#f7f7f7'
mobileBackground: '#ffffff'
height: 3781
mobilePaddingTop: 118
mobilePaddingBottom: 30
blocks:
  - kind: video
    src: ../../assets/projects/wear-a-suit/reflect-your-ambitions.jpg
    alt: 'Reflect Your Ambitions: animated advertisement for Surmesur suits (first frame, blank)'
    source: assets-source/Animation/1_Reflect_your_ambitions.mp4
    video: reflect-your-ambitions
    mode: toggle
    box: [144, 158, 1632, 918]
    m: { w: 350, align: left, gap: 0 }
  - kind: video
    src: ../../assets/projects/wear-a-suit/embrace-every-moment.jpg
    alt: 'Embrace Every Moment: a couple dining in a restaurant, the man wearing a suit'
    source: assets-source/Animation/2_Embrace_every_moment.mp4
    video: embrace-every-moment
    mode: toggle
    box: [140, 1189, 1640, 922]
    m: { w: 350, align: left, gap: 42 }
  # PLACEHOLDER: the third video (Look Good In Any Situation) is not in assets-source; still cropped
  # from the desktop mockup.
  - kind: video
    src: ../../assets/projects/wear-a-suit/look-good-in-any-situation-from-mockup.png
    alt: 'Look Good In Any Situation: grey buildings, an elevated train and the sun'
    placeholder: true
    box: [133, 2224, 1647, 916]
    m: { w: 350, align: left, gap: 38 }
  # Desktop centered on one line (left-aligned from its measured start), mobile left-aligned on 2 lines.
  - kind: text
    text: Vector animations designed in Adobe Illustrator, put togheter After Effects.
    mobileText: "Vectors designed in Adobe Illustrator,\nput togheter After Effects."
    # Mobile 16 px (not 15) with no tracking: same line widths as the mockup, desktop needs no tracking.
    size: [32, 16]
    align: left
    lineHeight: 1.1
    box: [419, 3603, 1200, 40]
    m: { align: left, gap: 40 }
---

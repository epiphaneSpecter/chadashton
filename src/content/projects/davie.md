---
title: Davie
category: design
order: 2
thumbnail: ../../assets/projects/davie/thumbnail.jpg
thumbnailAlt: Davie Chantier Maritime logo with three illustrated ships
header:
  text: Rebranding, website, magazine, illustrations, and animation (an academic project)
  mobileText: "Rebranding, website, magazine,\nillustrations, and animation\nacademic project"
background: '#ffffff'
height: 6931
mobilePaddingTop: 188
mobilePaddingBottom: 106
blocks:
  # Crops of assets-source/Design/davie_behance/ matched on the mockups (scripts/match-crop.py).
  - kind: image
    src: ../../assets/projects/davie/logo-ships.jpg
    alt: Davie Chantier Maritime, est. 1825 logo above three illustrated ships
    box: [361, 366, 1198, 469]
    m: { w: 248, gap: 0 }
  - kind: image
    src: ../../assets/projects/davie/website-macbook.jpg
    alt: Davie website home page on a MacBook Pro
    box: [307, 1151, 1306, 822]
    m: { w: 269, gap: 80 }
  # Same crop on both layouts: desktop shows its left part, mobile its lower part (edge to edge).
  - kind: image
    src: ../../assets/projects/davie/website-iphone.jpg
    alt: Davie mobile website on an iPhone
    position: left bottom
    box: [136, 2115, 854, 1133]
    m: { w: bleed, h: 444, gap: 73 }
  - kind: image
    src: ../../assets/projects/davie/illustrations.jpg
    alt: Illustrations, a set of hand-drawn ships, oil platforms and industry icons
    box: [1037, 2374, 592, 521]
    m: { w: 341, gap: 28 }
  # Magazine: the mobile mockup frames each mockup differently (bigger, off-centre), hence
  # desktop-only crops (m.hidden) and mobile-only full-width crops (desktopHidden).
  - kind: image
    src: ../../assets/projects/davie/magazine-cover.jpg
    alt: Davie magazine cover
    box: [346, 3376, 337, 467]
    m: { hidden: true }
  - kind: image
    src: ../../assets/projects/davie/magazine-cover-mobile.jpg
    alt: Davie magazine cover
    desktopHidden: true
    m: { w: bleed, gap: 80 }
  - kind: image
    src: ../../assets/projects/davie/magazine-2-3.jpg
    alt: 'Magazine spread: Bâtisseurs depuis 1825'
    box: [1074, 3354, 663, 553]
    m: { hidden: true }
  - kind: image
    src: ../../assets/projects/davie/magazine-2-3-mobile.jpg
    alt: 'Magazine spread: Bâtisseurs depuis 1825'
    desktopHidden: true
    m: { w: bleed, gap: 48 }
  - kind: image
    src: ../../assets/projects/davie/magazine-4-5.jpg
    alt: 'Open magazine: On relève des défis depuis toujours'
    box: [137, 4073, 693, 515]
    m: { hidden: true }
  - kind: image
    src: ../../assets/projects/davie/magazine-4-5-mobile.jpg
    alt: 'Open magazine: On relève des défis depuis toujours'
    desktopHidden: true
    m: { w: bleed, gap: 63 }
  - kind: image
    src: ../../assets/projects/davie/magazine-6-7.jpg
    alt: 'Magazine spread: Construction de navires'
    box: [1081, 4065, 670, 559]
    m: { hidden: true }
  - kind: image
    src: ../../assets/projects/davie/magazine-6-7-mobile.jpg
    alt: 'Magazine spread: Construction de navires'
    desktopHidden: true
    m: { w: bleed, gap: 63 }
  - kind: image
    src: ../../assets/projects/davie/magazine-8-9.jpg
    alt: 'Open magazine: Davie en chiffres'
    box: [137, 4787, 693, 515]
    m: { hidden: true }
  - kind: image
    src: ../../assets/projects/davie/magazine-8-9-mobile.jpg
    alt: 'Open magazine: Davie en chiffres'
    desktopHidden: true
    m: { w: bleed, gap: 45 }
  - kind: image
    src: ../../assets/projects/davie/magazine-10-11.jpg
    alt: 'Magazine spread: Rétrospective des 3 derniers exercices'
    box: [1113, 4786, 650, 543]
    m: { hidden: true }
  - kind: image
    src: ../../assets/projects/davie/magazine-10-11-mobile.jpg
    alt: 'Magazine spread: Rétrospective des 3 derniers exercices'
    desktopHidden: true
    m: { w: bleed, gap: 64 }
  # Poster = frame at 12.7 s of the animation; the iframe code written on the mockup is a designer note.
  - kind: video
    src: ../../assets/projects/davie/video-poster.jpg
    alt: Davie animation, a red ship sailing on black waves
    youtube: cA5gXrh74H0
    source: assets-source/Animation/2_grenier_ch_p2.mp4
    border: '#707070'
    box: [137, 5563, 1646, 926]
    m: { w: 350, gap: 108 }
  - kind: image
    src: ../../assets/projects/davie/logo-footer.jpg
    alt: Davie, est. 1825, Chantier Maritime logo
    box: [846, 6676, 228, 107]
    m: { w: 155, gap: 136 }
---

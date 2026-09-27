---
title: Miscelaneous Print Works
category: design
order: 8
mobileOrder: 5
thumbnail: ../../assets/projects/miscellaneous-print-works/thumbnail.jpg
thumbnailAlt: Newspaper article layout about Jeff Koons
# Mockup texts kept verbatim: "projectac", "panphlet", "Cofee" (typos to confirm with the client).
header:
  text: Jeff Koons article, academic project
  mobileText: "Jeff Koons article\nacademic projectac"
  color: '#f7f7f7'
  exitColor: '#b2b2b2'
  mobileExitColor: '#f7f7f7'
  right: 141
  top: 55
background: '#ffffff'
height: 8378
mobilePaddingTop: 0
mobilePaddingBottom: 62
blocks:
  # Black band behind the Jeff Koons section (page background area, not a placeholder).
  - kind: swatch
    color: '#000000'
    label: Black background of the Jeff Koons section
    placeholder: false
    box: [0, 0, 1920, 1370]
    m: { w: bleed, h: 400, gap: 0 }
  - kind: image
    src: ../../assets/projects/miscellaneous-print-works/jeff-koons-article.jpg
    alt: "Newspaper spread: À Hong Kong, Jeff Koons parle d'argent, du risque et de l'acceptation"
    box: [137, 142, 1643, 1070]
    m: { w: 350, align: left, gap: -277 }
  - kind: text
    text: Musée de la Civilisation booklet, academic project
    mobileText: "Musée de la Civilisation booklet\nacademic project"
    size: [32, 16]
    align: left
    box: [137, 1470.8, 1000, 40]
    m: { align: left, gap: 80 }
  # Japon booklet (Musée de la Civilisation): assets-source/Design/Japon Mag/.
  - kind: image
    src: ../../assets/projects/miscellaneous-print-works/japon-cover.jpg
    alt: 'Cover of the booklet Japon, culture et traditions'
    box: [759, 1610, 422, 585]
    m: { w: 213, gap: 44 }
  - kind: image
    src: ../../assets/projects/miscellaneous-print-works/japon-2-3.jpg
    alt: "Booklet spread: L'art de vivre japonais and Origami"
    box: [255, 2334, 589, 493]
    m: { w: 297, gap: 90 }
  - kind: image
    src: ../../assets/projects/miscellaneous-print-works/japon-4-5.jpg
    alt: 'Booklet spread: Shodô'
    box: [1076, 2332, 591, 494]
    m: { w: 297, gap: 57 }
  - kind: image
    src: ../../assets/projects/miscellaneous-print-works/japon-6-7.jpg
    alt: "Booklet spread: Quatre valeurs spirituelles de l'art du thé"
    box: [255, 2991, 589, 492]
    m: { w: 297, gap: 59 }
  - kind: image
    src: ../../assets/projects/miscellaneous-print-works/japon-8-9.jpg
    alt: "Booklet spread: L'esthétique japonaise en quatre concepts"
    box: [1076, 2990, 590, 493]
    m: { w: 297, gap: 59 }
  - kind: image
    src: ../../assets/projects/miscellaneous-print-works/japon-back-and-front-cover.jpg
    alt: Back and front covers of the Japon booklet
    box: [667, 3645, 597, 505]
    m: { w: 299, gap: 59 }
  - kind: swatch
    color: '#000000'
    label: Separator line
    placeholder: false
    box: [0, 4278, 1920, 2]
    m: { hidden: true }
  - kind: swatch
    color: '#404040'
    label: Separator line
    placeholder: false
    desktopHidden: true
    m: { w: bleed, h: 2, gap: 65 }
  - kind: text
    text: Poster/panphlet for C2 conference, academic project
    mobileText: "Poster/panphlet for C2 conference\nacademic project"
    size: [32, 16]
    align: left
    box: [137, 4343.8, 1000, 40]
    m: { align: left, gap: 18 }
  # C2 conference: poster and brochure panels rendered from
  # assets-source/Design/1937793_Grenier_C_affiche-brochure_V2.pdf (page 1, and page 2 panels rotated).
  - kind: image
    src: ../../assets/projects/miscellaneous-print-works/c2-poster.jpg
    alt: C2 conference poster, 3-7 May 2021 programme
    box: [478, 4483, 966, 1279]
    m: { w: 350, align: left, gap: 45 }
  - kind: image
    src: ../../assets/projects/miscellaneous-print-works/c2-resilience-cover.jpg
    alt: 'C2 brochure: Résilience cover, 3-7 May 2021, online, Montréal'
    box: [138, 5979, 741, 561]
    m: { w: 350, align: left, gap: 44 }
  - kind: image
    src: ../../assets/projects/miscellaneous-print-works/c2-resilience-text.jpg
    alt: 'C2 brochure: Résilience introduction text'
    box: [138, 6623, 741, 561]
    m: { w: 350, align: left, gap: 13 }
  - kind: image
    src: ../../assets/projects/miscellaneous-print-works/c2-speakers.jpg
    alt: 'C2 brochure: Conférenciers, speaker portraits'
    box: [1042, 5979, 741, 561]
    m: { w: 350, align: left, gap: 13 }
  - kind: image
    src: ../../assets/projects/miscellaneous-print-works/c2-speakers-triangles.jpg
    alt: 'C2 brochure: speaker portraits in triangles'
    box: [1042, 6623, 741, 561]
    m: { w: 350, align: left, gap: 14 }
  - kind: swatch
    color: '#000000'
    label: Separator line
    placeholder: false
    box: [0, 7266.5, 1920, 2]
    m: { hidden: true }
  - kind: swatch
    color: '#404040'
    label: Separator line
    placeholder: false
    desktopHidden: true
    m: { w: bleed, h: 2, gap: 50 }
  - kind: text
    text: Cofee Crisp Rebrand
    mobileText: "Cofee Crisp Rebrand\nacademic project"
    size: [32, 16]
    align: left
    box: [139, 7331.8, 800, 40]
    m: { align: left, gap: 18 }
  # Coffee Crisp: assets-source/Design/1_Grenier_ch_Atelier_1_Palette_choco_Haut_gamme.jpg (1000 px, low resolution).
  - kind: image
    src: ../../assets/projects/miscellaneous-print-works/coffee-crisp.jpg
    alt: Coffee Crisp rebrand, red and gold chocolate boxes
    box: [416, 7473, 1088, 692]
    m: { w: 350, gap: 23 }
---

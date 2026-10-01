---
title: Mind-bogglers
category: design
order: 7
thumbnail: ../../assets/projects/mind-bogglers/thumbnail.jpg
thumbnailAlt: Cover of the pamphlet Logical Philosophy About Rock Paper Scissors
header:
  text: Digital pamphlet design, vector illustrations and text composition, personal project
  mobileText: "Digital pamphlet design,\nvector illustrations and text composition\npersonal project"
  color: '#f7f7f7'
  exitColor: '#b2b2b2'
  mobileExitColor: '#f7f7f7'
  right: 100
background: '#000000'
height: 2386
mobilePaddingTop: 144
mobilePaddingBottom: 76
blocks:
  # The 10 pages of the pamphlet: horizontal carousel on mobile. On desktop the mockup shows only
  # pages 1-2 and the left part of page 3 (cut by the right edge): pages 3-10 are mobile only
  # and page 3 is shown by the desktop-only crop below.
  - kind: group
    layout: carousel
    gap: 0
    m: { w: bleed, gap: 0 }
    items:
      - kind: image
        src: ../../assets/projects/mind-bogglers/page-01.jpg
        alt: 'Pamphlet cover: Logical Philosophy About Rock Paper Scissors, designed and developed by Chad Ashton'
        box: [0, 141, 744, 930]
        m: { w: 382 }
      - kind: image
        src: ../../assets/projects/mind-bogglers/page-02.jpg
        alt: 'Pamphlet page 2: Rock paper scissors is more strategic than chess, with a chess pawn'
        box: [745, 141, 743, 929]
        m: { w: 382 }
      - kind: image
        src: ../../assets/projects/mind-bogglers/page-03.jpg
        alt: 'Pamphlet page 3: text about chess and rock paper scissors next to a chess king'
        desktopHidden: true
        m: { w: 382 }
      - kind: image
        src: ../../assets/projects/mind-bogglers/page-04.jpg
        alt: 'Pamphlet Logical Philosophy About Rock Paper Scissors, page 4'
        desktopHidden: true
        m: { w: 382 }
      - kind: image
        src: ../../assets/projects/mind-bogglers/page-05.jpg
        alt: 'Pamphlet Logical Philosophy About Rock Paper Scissors, page 5'
        desktopHidden: true
        m: { w: 382 }
      - kind: image
        src: ../../assets/projects/mind-bogglers/page-06.jpg
        alt: 'Pamphlet Logical Philosophy About Rock Paper Scissors, page 6'
        desktopHidden: true
        m: { w: 382 }
      - kind: image
        src: ../../assets/projects/mind-bogglers/page-07.jpg
        alt: 'Pamphlet Logical Philosophy About Rock Paper Scissors, page 7'
        desktopHidden: true
        m: { w: 382 }
      - kind: image
        src: ../../assets/projects/mind-bogglers/page-08.jpg
        alt: 'Pamphlet Logical Philosophy About Rock Paper Scissors, page 8'
        desktopHidden: true
        m: { w: 382 }
      - kind: image
        src: ../../assets/projects/mind-bogglers/page-09.jpg
        alt: 'Pamphlet Logical Philosophy About Rock Paper Scissors, page 9'
        desktopHidden: true
        m: { w: 382 }
      - kind: image
        src: ../../assets/projects/mind-bogglers/page-10.jpg
        alt: 'Pamphlet Logical Philosophy About Rock Paper Scissors, page 10'
        desktopHidden: true
        m: { w: 382 }
  - kind: image
    src: ../../assets/projects/mind-bogglers/page-03-desktop-crop.jpg
    alt: 'Pamphlet page 3: text about chess and rock paper scissors next to a chess king'
    box: [1488, 141, 432, 928]
    m: { hidden: true }
  # Mobile only.
  - kind: text
    text: SCROLL→
    size: [16, 16]
    color: '#f7f7f7'
    align: right
    desktopHidden: true
    m: { w: 352, align: left, gap: 15 }
  # Mobile only: grey divider.
  - kind: swatch
    color: '#b9b9b9'
    label: Divider
    placeholder: false
    desktopHidden: true
    m: { w: bleed, h: 2, align: left, gap: 13 }
  - kind: text
    text: Think inside the box design
    mobileText: "Think inside the box design\npersonal project"
    # Mobile 16 px (not 15) with no tracking: same line widths as the mockup, desktop needs no tracking.
    size: [32, 16]
    color: '#f7f7f7'
    align: left
    lineHeight: 1.1
    box: [138, 1154, 900, 40]
    m: { align: left, gap: 15 }
  - kind: image
    src: ../../assets/projects/mind-bogglers/think-inside-the-box.jpg
    alt: "Think inside the box: For decades, we have been told to think outside the box... to the extent that we've actually forgotten that great possibilities still lie inside the box"
    box: [481, 1272, 960, 962]
    m: { w: 350, align: left, gap: 28 }
---

---
title: L'erreur inspire
cardLabel: L'erreur Inspire
category: design
order: 6
thumbnail: ../../assets/projects/lerreur-inspire/thumbnail.jpg
thumbnailAlt: "L'erreur inspire: illustration of a pink leaning tower"
header:
  text: Advertising campaign for an event by Fail Camp, an academic project
  mobileText: "Advertising campaign for an event\nby Fail Camp\nacademic project"
  exitColor: '#000000'
  exitUnderline: true
  mobileExitColor: '#000000'
  mobileExitUnderline: false
  left: 137
  right: 99
background: '#ffffff'
height: 3214
mobilePaddingTop: 190
mobilePaddingBottom: 0
blocks:
  # The three campaign posters: one row on desktop, horizontal carousel on mobile.
  - kind: group
    layout: carousel
    gap: 20
    m: { w: bleed, gap: 0, align: left }
    items:
      - kind: image
        src: ../../assets/projects/lerreur-inspire/originality.jpg
        alt: "Poster L'erreur inspire l'originalité: pink leaning tower of Pisa"
        box: [1, 250, 635, 635]
        m: { w: 301 }
      - kind: image
        src: ../../assets/projects/lerreur-inspire/innovation.jpg
        alt: "Poster L'innovation: pink biplane"
        box: [612, 251, 633, 634]
        m: { w: 301 }
      - kind: image
        src: ../../assets/projects/lerreur-inspire/discovery.jpg
        alt: 'Poster La découverte: pink caravel sailing towards an island'
        box: [1285, 250, 635, 635]
        m: { w: 301 }
  - kind: image
    src: ../../assets/projects/lerreur-inspire/event-program.jpg
    alt: 'FailCamp event program: presentation, 29 janvier 2021 at Le District, list of speakers, quote by Lysandre Nadeau and contacts'
    box: [0, 921, 1920, 1374]
    m: { w: bleed, gap: 40, align: left }
  # Black band with the FailCamp logo (desktop: full-width black area behind the logo).
  - kind: swatch
    color: '#000000'
    label: Black band
    box: [0, 2628, 1920, 586]
    m: { hidden: true }
  - kind: image
    src: ../../assets/projects/lerreur-inspire/failcamp-logo.jpg
    alt: "FailCamp QC logo with the tagline L'erreur inspire, white on black"
    box: [433, 2628, 1054, 586]
    m: { w: bleed, gap: 21, align: left }
  - kind: image
    src: ../../assets/projects/lerreur-inspire/lerreur-inspire-tower.jpg
    alt: "L'erreur inspire visual with the pink leaning tower of Pisa"
    # Source cropped (blank margins) so it does not overlap the black band on desktop.
    box: [591, 2134, 739, 478]
    m: { w: bleed, gap: 0, align: left }
---

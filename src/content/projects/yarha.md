---
title: Yarha'
category: design
order: 5
mobileOrder: 8
thumbnail: ../../assets/projects/yarha/thumbnail-from-mockup.png
thumbnailAlt: Yarha' Formations logo with an owl
thumbnailPlaceholder: true
header:
  text: Yarha' - First employment
  mobileText: "Yarha'\nPremier emploi"
  color: '#000000'
  exitColor: '#c5a58a'
  exitUnderline: true
  mobileExitColor: '#000000'
  mobileExitUnderline: false
  right: 98
background: '#ffffff'
mobileBackground: '#f7f7f7'
height: 12082
mobilePaddingTop: 130
mobilePaddingBottom: 0
blocks:
  - kind: text
    text: LOGO ANIMATIONS
    mobileText: ANIMATIONS DE LOGO
    size: [32, 16]
    box: [460, 1144, 1000, 32]
    m: { gap: 0, w: 330, align: right }
  # PLACEHOLDERS (videos not provided): plain colors of the mockup. XD prototype, to wire when the files
  # are provided (encode-videos.sh row + `kind: video`, `video: <name>`):
  # - hero: Logo_V9.mp4, poster Logo_V9_PosterImage.png, autoplay, no loop, audio -> `mode: once`;
  # - black box: Animation_Logo_3.mp4, blue box: Logo_Yarha.mp4 (posters *_PosterImage.png), no autoplay,
  #   audio, play / pause on tap -> `mode: toggle`. Downloadable from the XD share (Assets panel).
  - kind: swatch
    color: '#3a5a75'
    label: Yarha' video (not provided)
    box: [0, 0, 1920, 1080]
    m: { w: bleed, h: 221, gap: 13, align: left }
  - kind: group
    layout: row
    gap: 10
    m: { gap: 19 }
    items:
      - kind: swatch
        color: '#000000'
        label: Yarha' logo animation, black version (not provided)
        box: [137, 1230, 741, 417]
        m: { w: 170, h: 96 }
      - kind: swatch
        color: '#3f63d2'
        label: Yarha' logo animation, blue version (not provided)
        box: [1041, 1230, 732, 412]
        m: { w: 170, h: 96 }
  # Poster = first frame of the GIF, cropped around the carriage (GIF x 401-3090, y 479-1475).
  - kind: video
    src: ../../assets/projects/yarha/caleche-poster.png
    alt: Animated illustration of a horse pulling a carriage
    fit: contain
    source: assets-source/Animation/Caleche_1.gif
    video: yarha-caleche
    box: [647, 3560, 723, 268]
    m: { w: 338, gap: 102 }
  - kind: text
    text: Formations sur la gestion d'une classe
    size: [32, 16]
    box: [458, 2375, 1000, 32]
    m: { gap: 147, w: 326, align: left }
  - kind: group
    layout: grid
    gap: 13
    m: { gap: 22 }
    items:
      - kind: image
        src: ../../assets/projects/yarha/class-1-from-mockup.jpg
        alt: Illustration of a teacher thinking in her classroom
        placeholder: true
        box: [200, 2480, 728, 410]
        m: { w: 168, h: 95, align: left }
      - kind: image
        src: ../../assets/projects/yarha/class-2-from-mockup.jpg
        alt: Illustration of a green board covered with sticky notes
        placeholder: true
        box: [995, 2482, 724, 408]
        m: { w: 168, h: 95, align: right }
      - kind: image
        src: ../../assets/projects/yarha/class-3-from-mockup.jpg
        alt: Close-up illustration of yellow and beige shapes on a green background
        placeholder: true
        box: [200, 2961, 728, 410]
        m: { w: 168, h: 95, align: left }
      - kind: image
        src: ../../assets/projects/yarha/class-4-from-mockup.jpg
        alt: Illustration of a teacher holding a child in a classroom
        placeholder: true
        box: [991, 2961, 725, 407]
        m: { w: 168, h: 95, align: right }
  - kind: text
    text: 'Animation: Le tipi'
    size: [32, 16]
    box: [460, 1757, 1000, 32]
    m: { gap: 83 }
  # PLACEHOLDER: crop of the mockup until the XD image "Tipi_Final" (a still image, not a video) is provided.
  - kind: video
    src: ../../assets/projects/yarha/tipi-from-mockup.jpg
    alt: Parchment background of the animation Le tipi
    placeholder: true
    box: [590, 1843, 741, 417]
    m: { w: bleed, h: 221, gap: 12, align: left }
  # Storyboards: desktop only.
  - kind: image
    src: ../../assets/projects/yarha/storyboards-from-mockup.jpg
    alt: Black and white storyboard sketches of classrooms and offices
    placeholder: true
    box: [14, 3990, 1906, 446]
    m: { hidden: true }
  - kind: text
    text: Formations sur la gestion de projet
    size: [32, 16]
    box: [460, 4551, 1000, 32]
    m: { gap: 86, w: 327, align: left }
  - kind: image
    src: ../../assets/projects/yarha/project-1-from-mockup.jpg
    alt: Illustration of an elderly man in front of the sea
    placeholder: true
    box: [201, 4655, 733, 412]
    m: { w: 350, h: 197, align: left, gap: 11 }
  - kind: image
    src: ../../assets/projects/yarha/project-2-from-mockup.jpg
    alt: PERT network diagram with tasks A to I
    placeholder: true
    box: [992, 4657, 728, 410]
    m: { w: 350, h: 197, align: left, gap: 24 }
  - kind: image
    src: ../../assets/projects/yarha/project-4-from-mockup.jpg
    alt: Task list next to a laptop on an orange desk
    placeholder: true
    box: [998, 5155, 722, 410]
    m: { w: 350, h: 197, align: left, gap: 23 }
  - kind: image
    src: ../../assets/projects/yarha/project-3-from-mockup.jpg
    alt: Illustration of a brick house with a swimming pool
    placeholder: true
    box: [201, 5155, 728, 410]
    m: { w: 350, h: 197, align: left, gap: 24 }
  - kind: image
    src: ../../assets/projects/yarha/delivery-man-from-mockup.png
    alt: Running delivery man carrying a printer and papers
    fit: contain
    placeholder: true
    box: [130, 5788, 194, 432]
    m: { w: 58, align: left, gap: 63 }
  # Office supplies: the mobile mockup uses another layout of the same objects.
  - kind: image
    src: ../../assets/projects/yarha/office-supplies-from-mockup.png
    alt: Filing cabinet, clipboard, calendar and calculator
    fit: contain
    placeholder: true
    box: [1175, 5727, 480, 262]
    m: { hidden: true }
  - kind: image
    src: ../../assets/projects/yarha/office-supplies-mobile-from-mockup.png
    alt: Filing cabinet, clipboard, calendar and calculator
    placeholder: true
    desktopHidden: true
    m: { w: 350, h: 197, align: left, gap: 48 }
  - kind: image
    src: ../../assets/projects/yarha/montreal-4-from-mockup.jpg
    alt: Employee collapsed on a desk covered with papers
    placeholder: true
    box: [963, 6780, 707, 386]
    m: { w: 350, h: 191, align: left, gap: 16 }
  - kind: image
    src: ../../assets/projects/yarha/montreal-3-from-mockup.jpg
    alt: Illustration of a canal lined with trees in Montreal
    placeholder: true
    box: [251, 6786, 685, 374]
    m: { w: 350, h: 190, align: left, gap: 12 }
  - kind: image
    src: ../../assets/projects/yarha/montreal-2-from-mockup.jpg
    alt: Illustration of Habitat 67 in Montreal
    placeholder: true
    box: [963, 6375, 707, 386]
    m: { w: 350, h: 192, align: left, gap: 12 }
  - kind: image
    src: ../../assets/projects/yarha/montreal-1-from-mockup.jpg
    alt: Aerial illustration of the Montreal islands and bridges
    placeholder: true
    box: [251, 6375, 685, 386]
    m: { w: 350, h: 198, align: left, gap: 12 }
  - kind: group
    layout: row
    gap: 21
    m: { gap: 50 }
    items:
      - kind: image
        src: ../../assets/projects/yarha/polaroid-1-from-mockup.png
        alt: Polaroid of cats playing on a cat tree, dated 2023/08/08
        fit: contain
        placeholder: true
        box: [307, 7329, 378, 427]
        m: { w: 101 }
      - kind: image
        src: ../../assets/projects/yarha/polaroid-2-from-mockup.png
        alt: Polaroid of sleeping cats named Félix, Gaston, Bandit, Matisse and Guilaine, dated 2020/08/08
        fit: contain
        placeholder: true
        box: [769, 7322, 378, 432]
        m: { w: 101 }
      - kind: image
        src: ../../assets/projects/yarha/polaroid-3-from-mockup.png
        alt: Polaroid of cats around litter boxes in a bathroom, dated 2023/08/08
        fit: contain
        placeholder: true
        box: [1254, 7346, 365, 413]
        m: { w: 106 }
  # Mobile only: this cat illustration is not on the desktop mockup.
  - kind: image
    src: ../../assets/projects/yarha/cat-sofa-mobile-from-mockup.jpg
    alt: Cats climbing the curtains and a lamp above a sofa
    placeholder: true
    desktopHidden: true
    m: { w: 350, h: 195, align: left, gap: 24 }
  - kind: image
    src: ../../assets/projects/yarha/cat-1-from-mockup.jpg
    alt: Cat jumping on a kitchen counter next to a smoking oven
    placeholder: true
    box: [0, 7884, 638, 359]
    m: { w: 350, h: 196, align: left, gap: 13 }
  - kind: image
    src: ../../assets/projects/yarha/cat-3-from-mockup.jpg
    alt: Cat sleeping on a laptop keyboard
    placeholder: true
    box: [1282, 7884, 638, 359]
    m: { w: 350, h: 196, align: left, gap: 12 }
  - kind: image
    src: ../../assets/projects/yarha/cat-2-from-mockup.jpg
    alt: Cat sitting on a kitchen island
    placeholder: true
    box: [641, 7884, 639, 359]
    m: { w: 350, h: 196, align: left, gap: 12 }
  - kind: image
    src: ../../assets/projects/yarha/animation-strip-from-mockup.jpg
    alt: Three animation frames, a girl falling in the night, a snowy forest and a girl standing
    placeholder: true
    box: [0, 8382, 1920, 483]
    m: { w: bleed, h: 99, align: left, gap: 66 }
  - kind: image
    src: ../../assets/projects/yarha/conductor-from-mockup.png
    alt: Conductor surrounded by office icons, a rocket taking off and megaphones throwing confetti
    placeholder: true
    box: [0, 9126, 1920, 1521]
    m: { hidden: true }
  - kind: image
    src: ../../assets/projects/yarha/conductor-mobile-from-mockup.png
    alt: Conductor surrounded by office icons, a rocket taking off and megaphones throwing confetti
    placeholder: true
    desktopHidden: true
    m: { w: bleed, h: 362, align: left, gap: 65 }
  # Farm illustration: desktop only (cut at the bottom of the mockup).
  - kind: image
    src: ../../assets/projects/yarha/farm-from-mockup.jpg
    alt: Farm illustration with a barn, a silo, animals and a red tractor
    placeholder: true
    box: [0, 10647, 1920, 1435]
    m: { hidden: true }
---

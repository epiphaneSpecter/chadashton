/**
 * Texts of the Ashton font page, verbatim from the mockup (typos included, see docs/design-notes.md).
 * Removed on purpose (no sale in v1): the vertical "AVAILABLE SOON" column and the sentence
 * "The ASHTON font will be AVAILABLE SOON!" / "The Ashton Font will be AVAILABLE SOON.".
 * In the lines below, `{r}` and `{s}` are the alternate glyphs of the font (handwritten r = "π", s).
 */
export const ashtonFont = {
  title: 'Ashton',
  inProgress: ['IN', 'PROGRESS'],
  tagline: 'a reminicsence of intellectual art',
  through: 'THROUGH TYPOGRAPHY',
  designedBy: 'Designed by C. Ashton',
  toggle: 'BLUPRINT MODE',
  alphabetCaption: 'uppercase alphabet display',
  propertiesTitle: ['FONT', 'PROPERTIES'],
  properties: ['Geometric', 'Sans-serif', 'Intensely italic'],
  influences: [
    'Bauhaus-inspired',
    'Based on handwriting',
    'Wes Anderson-esque',
    'British humor influences',
  ],
  idea: {
    desktop: [
      'The original idea was to make a font that conveys the sarcastic',
      'and unconventional tone my personality can have.',
    ],
    mobile: [
      'The original idea was',
      'to make a font that conveys',
      'the sarcastic and unconventional tone',
      'my personality can have.',
    ],
  },
} as const;

/** "Technical View" state (BLUPRINT MODE on). */
export const technicalView = {
  geometric: {
    desktop: [
      'Ashton is a geometric',
      'sans-serif font, yet it is inspired',
      'by organic & expressive',
      'shapes from my handwriting.',
    ],
    mobile: [
      'Ashton is a geometric sans-serif font,',
      'yet it is inspired by organic & expressive',
      'shapes from my handwriting.',
    ],
  },
  grid: {
    desktop: ['The shape of my “{r}”', 'defined the grid system', 'throughout the entire project.'],
    mobile: [
      'The shape of my first r',
      'defined the grid system',
      'throughout the entire project.',
    ],
  },
  forInstance: 'For instance:',
  traces: {
    desktop: [
      'Every glyph contains traces',
      'of these 2 shapes derrived',
      'from my first letter ({r}):',
    ],
    mobile: ['Every glyph contains traces of these', '2 shapes derived from my first letter (r):'],
  },
  italics: {
    desktop: [
      'Italics started in Italy in the 1500s, and were',
      'used as a default text to replicate handwriting.*',
    ],
    mobile: [
      'Italics started in Italy in the 1500s,',
      'and were used as a default text',
      'to replicate handwriting.',
    ],
  },
  angle: '21.907° ≈ 22°',
  alternateR: [
    'In the end,',
    'my first letter',
    '“{r}” became an',
    'alternate version',
    'to my standard',
    'lowercase “r”.',
  ],
  alternateS: [
    'There is also the',
    'handwriten “{s}”',
    'included as a',
    'variant to the',
    'regular “s”,',
    'hinting at my',
    'intial inspiration.',
  ],
  intensely: {
    desktop: ['Ashton is intesely italicised,', 'like a modernised version of the 1500s italics!'],
    mobile: ['Ashton is intesely italicised,', 'like a modernised version of the 1500s italics !'],
  },
  source: {
    label: '*https://en.wikipedia.org/wiki/Italic_type',
    href: 'https://en.wikipedia.org/wiki/Italic_type',
  },
  curious: {
    desktop: [
      'I was curious to see what would hapen if I made something structured',
      'by starting off from something that is very messy.',
    ],
    mobile: [
      'I was curious to see what would',
      'happen if I made something structured',
      'starting from something',
      'that is very messy.',
    ],
  },
} as const;

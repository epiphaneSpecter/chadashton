// Texts copied verbatim from the desktop About mockup (typos included, see docs/design-notes.md § 3.10).

export const bio =
  "From a very young age, I was very interested in art. I wanted to create amazing things for a living. I'll admit, I dabbled in various areas along the way. After high school, I decided to study graphic design. While design deviates slightly from my initial passion, it has allowed me to explore many fascinating aspects of creativity. Today, I am dedicated to continue honing my craft as an artist and designer, combining everything I've learned to create amazing things.";

export interface RelevantThing {
  text: string;
  detail?: string;
  /** On mobile the detail reads as a regular second line instead of a small caption. */
  detailFullSizeOnMobile?: boolean;
}

export const relevantThings: RelevantThing[] = [
  { text: 'DEC in graphic design', detail: 'from Cégep de Sainte-Foy' },
  {
    text: 'Artistic ability awards in High School',
    detail: '(Secondairy 1 and 2)',
    detailFullSizeOnMobile: true,
  },
  { text: '20+ years experience in thinking about art' },
  { text: 'Passion for my trade' },
  { text: 'Sense of humor' },
];

export const visualArtists = [
  'Wes Anderson',
  'Charles M. Shulz',
  'Van Gogh',
  'Edward Gorey',
  'Javi Aznarez',
  'Egon Sheile',
  'Karlotta Freier',
  'Leonardo da Vinci',
  'Edvard Munch',
  'Claude Monet',
  'Sempé',
  'Salvador Dali',
  'Jim Henson',
  'Tim Burton',
  'Rembrandt',
  'Annie Leibovitz',
  'Paul Renner',
  'Mark Rothko',
  'J.R.R. Tolkien',
  'Michael Trevithick',
  'Garth Williams',
  'Eric Chase Anderson',
  'Hergé',
  'Jean-Paul Riopelle',
];

export const musicArtists = [
  'The Beatles',
  'The Velvet Underground',
  'John Mayer',
  'Four Tops',
  'Feist',
  'Led Zeppelin',
  'The Beach Boys',
  'Taylor Swift',
  'Van Morisson',
  'Lana Del Rey',
  'The Rolling Stones',
  'Nick Drake',
  'Jeff Buckley',
  'Elliot Smith',
  'Bob Dylan',
  'Bap Kennedy',
  'Patrick Watson',
  'The Kinks',
  'The Smiths',
  'David Bowie',
  'Françoise Hardy',
  'Simon & Garfunkel',
  'Neil Young',
  'Leonard Cohen',
  'Harmonium',
];

export const closingNote = [
  'Please note that I did not include the full list of all my favorite things. It was a difficult selection.',
  'Also, please forgive any flaws you could have noticed in this website (if any). Contact me if you find one.',
  'Thanks.',
];

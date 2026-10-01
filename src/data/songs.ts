export interface Song {
  title: string;
  /** As written in the mockup (family name in capitals). */
  artist: string;
  /** Mobile: the artist goes on a second line, as in the mockup. */
  mobileBreak?: boolean;
}

/**
 * Song recommendations of the hidden page, verbatim from the mockup (in its order).
 * RELOAD shows them in a new random order; if more songs are added here, it also picks
 * a random selection of `songsShown` of them.
 */
export const songs: Song[] = [
  { title: 'Northern Sky', artist: 'Nick DRAKE' },
  { title: 'Angeles', artist: 'Elliot SMITH' },
  { title: 'Good As Gold', artist: 'Bap KENNEDY' },
  { title: 'Second Hand News', artist: 'FLEETWOOD MAC', mobileBreak: true },
  { title: 'Everybody Here Wants You', artist: 'Jeff BUCKLEY', mobileBreak: true },
  { title: 'Calm Down', artist: 'Jack JOHNSON' },
  { title: 'One Evening', artist: 'Feist' },
  { title: "I Don't Trust Myself (With Loving You)", artist: 'John MAYER', mobileBreak: true },
  { title: 'Getting Better', artist: 'The BEATLES' },
];

export const songsShown = 9;

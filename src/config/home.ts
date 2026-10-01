import type { ImageMetadata } from 'astro';
import poster from '../assets/home/home-animation-poster.jpg';

export interface HomeVideo {
  /** Video name in public/videos/ (add a line to scripts/encode-videos.sh, then run it). */
  name: string;
  /** First frame of the video, in src/assets/home/ (shown before playback and with reduced motion). */
  poster: ImageMetadata;
  /** Short description of the animation, for screen readers. */
  label: string;
  /** Page background matching the video edges, so the frame does not show. Default: mockup #fff9f8. */
  background?: string;
  /** Desktop: `cover` fills the screen (edges cropped), `contain` shows the whole frame. */
  fit?: 'cover' | 'contain';
  /** Same on screens under 1024 px (portrait): `contain` by default, so the 16:9 frame stays whole. */
  mobileFit?: 'cover' | 'contain';
}

/**
 * Illustrated animation of the home page: "Reflect Your Ambitions" (1_Reflect_your_ambitions.mp4,
 * Wear a Suit project), chosen by the client. It reuses the web files of the Wear a Suit page, played
 * muted in a loop; its first frame has the pinkish white of the mockup's home screen.
 */
export const homeVideo: HomeVideo | undefined = {
  name: 'reflect-your-ambitions',
  poster,
  label: 'Reflect Your Ambitions: animated advertisement for Surmesur suits',
  background: '#fef8f7',
  fit: 'cover',
  mobileFit: 'contain',
};

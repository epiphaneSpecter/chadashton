import type { ImageMetadata } from 'astro';

export interface HomeVideo {
  /** Video name in public/videos/ (add a line to scripts/encode-videos.sh, then run it). */
  name: string;
  /** First frame of the video, in src/assets/home/ (shown before playback and with reduced motion). */
  poster: ImageMetadata;
  /** Short description of the animation, for screen readers. */
  label: string;
  /** Page background matching the video edges, so the frame does not show. Default: mockup #fff9f8. */
  background?: string;
  /** `cover` fills the screen (edges cropped), `contain` shows the whole frame. */
  fit?: 'cover' | 'contain';
}

/**
 * Illustrated animation of the home page.
 * PLACEHOLDER: the animation is not in the mockup (only its first, empty state) nor in the provided
 * assets; the client will provide it. Until then the home page stays static, as in the mockup.
 *
 * To enable it, for example:
 *   import poster from '../assets/home/home-animation-poster.jpg';
 *   export const homeVideo: HomeVideo | undefined = {
 *     name: 'home-animation',
 *     poster,
 *     label: 'Hand-drawn animation by Chad Ashton',
 *     fit: 'cover',
 *   };
 */
export const homeVideo: HomeVideo | undefined = undefined;

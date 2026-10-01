/**
 * Page transitions of the Adobe XD prototype (header interactions), by destination page.
 * - `slide-up`: the new page slides up over the current one (XD "slide-up", ease-out).
 * - `fade`: cross-fade (XD "dissolve" / auto-animate, ease-out).
 * Every other navigation is instant, as in the prototype ("none"), and so is going back.
 */
export type PageTransition = 'slide-up' | 'slide-up-slow' | 'fade';

export const pageTransitions: Record<string, PageTransition> = {
  '/': 'fade', // logo C. ASHTON, 0.3 s
  '/portfolio': 'slide-up', // 0.2 s
  '/contact': 'slide-up', // 0.2 s
  '/about': 'slide-up-slow', // 1 s
};

export function transitionFor(pathname: string): PageTransition | undefined {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
  return pageTransitions[path];
}

export interface NavLink {
  label: string;
  href: string;
}

/**
 * Main navigation, rendered by the header (desktop) and the mobile menu.
 * The Shop link is out of scope for v1: to bring it back, add
 * `{ label: 'Shop', href: '/shop' }` after Portfolio and enable `features.shop`.
 */
export const mainNav: NavLink[] = [
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const features = {
  /** Shop pages and the cart icon in the header (removed in v1). */
  shop: false,
} as const;

export interface SocialLink {
  label: string;
  /** PLACEHOLDER: profile URLs were not provided yet; links render as plain text until set. */
  href?: string;
}

export const contact: { email: string; socials: SocialLink[] } = {
  email: 'chadgrenier42@gmail.com',
  socials: [{ label: 'Instagram' }, { label: 'LinkedIn' }, { label: 'Behance' }],
};

/** True when `href` is the current page or one of its sub-pages. */
export function isActive(href: string, pathname: string): boolean {
  const path = pathname.replace(/\/$/, '') || '/';
  return path === href || path.startsWith(`${href}/`);
}

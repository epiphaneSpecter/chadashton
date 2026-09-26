export const categories = [
  { slug: 'design', label: 'Design' },
  { slug: 'illustration', label: 'Illustration' },
  { slug: 'animation', label: 'Animation' },
] as const;

export type CategorySlug = (typeof categories)[number]['slug'];

export const categoryHref = (slug: CategorySlug) => `/portfolio/${slug}`;
export const projectHref = (category: CategorySlug, id: string) => `/portfolio/${category}/${id}`;

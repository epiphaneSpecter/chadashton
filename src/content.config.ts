import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Portfolio projects: one Markdown file per project in src/content/projects/.
 * Adding a project = adding a file (see README).
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum(['design', 'illustration', 'animation']),
      /** Label under the thumbnail on the category page (mockup spelling). */
      cardLabel: z.string().optional(),
      /** Position in the category grid on desktop, and on mobile when the mockup differs. */
      order: z.number(),
      mobileOrder: z.number().optional(),
      thumbnail: image().optional(),
      thumbnailAlt: z.string().optional(),
      /** True when the image is a temporary crop of the mockup, to replace with the original file. */
      thumbnailPlaceholder: z.boolean().default(false),
      externalUrl: z.url().optional(),
    }),
});

export const collections = { projects };

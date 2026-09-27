import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import type { SchemaContext } from 'astro:content';

/**
 * Portfolio projects: one Markdown file per project in src/content/projects/.
 * Adding a project = adding a file (see README).
 *
 * A project page is a list of `blocks`. Each block can carry:
 * - `box`: its desktop position in mockup pixels ([x, y, width, height] on the 1920 px artboard,
 *   page coordinates). Without `box`, the block is stacked in the normal flow on desktop too.
 * - `m`: its mobile placement (393 px artboard), always stacked in the flow.
 */
const hex = z.string().regex(/^#[0-9a-fA-F]{6}$/);

/** Mobile placement: width in px ('full' = content width, 'bleed' = edge to edge), gap above. */
const mobile = z.object({
  w: z.union([z.number(), z.enum(['full', 'bleed'])]).default('full'),
  h: z.number().optional(),
  gap: z.number().default(24),
  align: z.enum(['left', 'center', 'right']).default('center'),
  hidden: z.boolean().default(false),
});

const box = z.tuple([z.number(), z.number(), z.number(), z.number()]);

const text = z.object({
  kind: z.literal('text'),
  /** Plain text; `[label](url)` makes a link, a line break starts a new line. */
  text: z.string(),
  mobileText: z.string().optional(),
  font: z.enum(['scholar', 'futura', 'serif']).default('scholar'),
  /** Font size in px: desktop (1920 artboard) and mobile (393 artboard). */
  size: z.tuple([z.number(), z.number()]),
  color: hex.optional(),
  align: z.enum(['left', 'center', 'right']).default('center'),
  uppercase: z.boolean().default(false),
  tracking: z.number().default(0),
  lineHeight: z.number().default(1.1),
});

const media = (image: SchemaContext['image']) => ({
  alt: z.string(),
  fit: z.enum(['cover', 'contain']).default('cover'),
  /** Temporary crop of the mockup or stand-in, to replace with the original file. */
  placeholder: z.boolean().default(false),
  src: image(),
});

const leafBlocks = (image: SchemaContext['image']) =>
  z.discriminatedUnion('kind', [
    text.extend({ box: box.optional(), m: mobile.optional() }),
    z.object({
      kind: z.literal('image'),
      ...media(image),
      box: box.optional(),
      m: mobile.optional(),
    }),
    z.object({
      kind: z.literal('video'),
      ...media(image),
      /** Source file in assets-source/, converted to WebM/MP4 in step 6. */
      source: z.string().optional(),
      youtube: z.string().optional(),
      box: box.optional(),
      m: mobile.optional(),
    }),
    z.object({
      kind: z.literal('swatch'),
      /** Plain color area (placeholder for a missing video or image). */
      color: hex,
      label: z.string(),
      box: box.optional(),
      m: mobile.optional(),
    }),
  ]);

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => {
    const leaf = leafBlocks(image);
    const group = z.object({
      kind: z.literal('group'),
      /** Mobile arrangement of the items: side by side, 2 columns, or a horizontal carousel. */
      layout: z.enum(['row', 'grid', 'carousel']),
      gap: z.number().default(10),
      m: mobile.optional(),
      items: z.array(leaf),
    });
    return z.object({
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

      /** Project page header: short description on the left, EXIT on the right. */
      header: z
        .object({
          text: z.string(),
          mobileText: z.string().optional(),
          color: hex.default('#000000'),
          exitColor: hex.default('#4d4d4d'),
          exitUnderline: z.boolean().default(false),
          /** Mobile font size of the description, in px. */
          mobileSize: z.number().default(15),
          /** Desktop left edge of the description and right edge of EXIT, in mockup px. */
          left: z.number().default(137),
          right: z.number().default(137),
        })
        .optional(),
      background: hex.default('#ffffff'),
      mobileBackground: hex.optional(),
      /** Desktop page height in mockup px, required when blocks use `box`. */
      height: z.number().optional(),
      /** Mobile space above the first block (below the header) and after the last one, in px. */
      mobilePaddingTop: z.number().default(110),
      mobilePaddingBottom: z.number().default(60),
      blocks: z.array(z.union([leaf, group])).default([]),
    });
  },
});

export const collections = { projects };

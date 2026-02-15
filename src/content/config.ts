import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    href: z.string().url(),
    type: z.enum(['app', 'game']),
    /** Optional: path to image under public/ (e.g. "projects/my-app.png") */
    image: z.string().optional(),
  }),
});

export const collections = { projects };

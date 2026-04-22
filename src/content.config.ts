import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    lang: z.enum(['zh', 'en', 'ja']),
    postSlug: z.string(),
  }),
});

const garden = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/garden' }),
  schema: z.object({
    title: z.string(),
    created: z.coerce.date(),
    updated: z.coerce.date(),
    stage: z.enum(['seedling', 'budding', 'evergreen']),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['zh', 'en', 'ja']),
    postSlug: z.string(),
  }),
});

const now = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/now' }),
  schema: z.object({
    updated: z.coerce.date(),
    lang: z.enum(['zh', 'en', 'ja']),
  }),
});

export const collections = { blog, garden, now };

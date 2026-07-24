import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('InfoSof Team'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const features = defineCollection({
  loader: glob({ pattern: '**/*.yml', base: './src/content/features' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    icon: z.enum(['logs', 'metrics', 'traces', 'alerts', 'search', 'dashboards']),
    order: z.number().default(0),
  }),
});

const plans = defineCollection({
  loader: glob({ pattern: '**/*.yml', base: './src/content/plans' }),
  schema: z.object({
    name: z.string(),
    order: z.number().default(0),
    price: z.number(),
    priceUnit: z.string().default('/month'),
    currency: z.string().default('USD'),
    tagline: z.string(),
    cta: z.object({ label: z.string(), href: z.string() }),
    highlighted: z.boolean().default(false),
    features: z.array(z.string()),
  }),
});

const faqs = defineCollection({
  loader: glob({ pattern: '**/*.yml', base: './src/content/faqs' }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { blog, features, plans, faqs };

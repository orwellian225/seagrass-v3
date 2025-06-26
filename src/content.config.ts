import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const writing_drafts = defineCollection({ 
    loader: glob({ pattern: "*.md", base: "./src/data/writing/drafts" }),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date()
    })
})

const writing_finals = defineCollection({ 
    loader: glob({ pattern: "*.md", base: "./src/data/writing/finals" }),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date()
    })
})

export const collections = { writing_drafts, writing_finals }
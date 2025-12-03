import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        image: image(),
        tags: z.array(z.string()),
        link: z.string().url().optional(),
        github: z.string().url().optional(),
        date: z.date(),
    })
});

export const collections = {
    projects: projectsCollection,
};

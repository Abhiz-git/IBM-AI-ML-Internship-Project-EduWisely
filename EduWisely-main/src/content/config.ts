import { defineCollection, z } from "astro:content";

const subjectCollection = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    domain: z.enum(["STEM", "Non-STEM"]),
    heroImage: z.string().optional(),
  }),
});

const domainCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z.string().optional(),
  }),
});

export const collections = {
  subjects: subjectCollection,
  domain: domainCollection,
};

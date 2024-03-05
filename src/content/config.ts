import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    description: z.string(),
    isPublished: z.boolean(),
    isDraft: z.boolean().default(false),
  }),
});

const cheatsheetsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    difficulty: z.enum(["fundamental", "easy", "medium", "hard"]),
    tier: z.number(),
    type: z.enum(["general","defensive","offensive"]),
  }),
});

const walkthroughsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    banner: z.string(),
    difficulty: z.enum(["easy", "medium", "hard"]),
    os: z.enum(["linux", "windows"]),
    releaseDate: z.date(),
  }),
});

export const collections = { 
  posts: postsCollection,
  cheatsheets: cheatsheetsCollection,
  walkthroughs: walkthroughsCollection,
};

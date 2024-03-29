import { defineCollection, z } from "astro:content";

const logCollection = defineCollection({
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
    banner: z.string(),
    badge: z.string(),
    sharebleLink: z.string(),
    completedOn: z.date(),
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
    pwnDate: z.date(),
    shareLink: z.string().url(),
    isPublished: z.boolean(),
  }),
});

export const collections = { 
  activities: logCollection,
  cheatsheets: cheatsheetsCollection,
  walkthroughs: walkthroughsCollection,
};

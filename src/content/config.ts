import { defineCollection, z } from "astro:content";

const logCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    publishedAt: z.date(),
    lang: z.enum(["es", "us"]),
    isDraft: z.boolean().default(false),
  }),
});

const cheatsheetsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.array(z.string()),
    difficulty: z.enum(["Fundamental", "Easy", "Medium", "Hard"]),
    tier: z.number(),
    type: z.enum(["General", "Defensive", "Offensive"]),
    time: z.string(),
    badge: z.string(),
    module: z.string(),
    badgeLink: z.string().url().nullable(),
    moduleLink: z.string().url().nullable(),
    completedAt: z.date().nullable(),
    tags: z.array(z.string()),
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
    achievement: z.string().url().nullable(),
    user: z.array(z.number()),
    root: z.array(z.number()),
  }),
});

export const collections = {
  activities: logCollection,
  cheatsheets: cheatsheetsCollection,
  walkthroughs: walkthroughsCollection,
};

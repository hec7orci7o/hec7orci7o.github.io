import { defineCollection, z } from "astro:content";

const logCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    publishedAt: z.date(),
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
    type: z.enum(["General", "Defensive","Offensive"]),
    time: z.string(),
    badge: z.string(),
    module: z.string(),
    badgeLink: z.string().url(),
    moduleLink: z.string().url(),
    completedAt: z.date(),
    tags: z.array(z.string())
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
    soon: z.boolean().optional(),
    achievement: z.string().url(),
  }),
});

export const collections = { 
  activities: logCollection,
  cheatsheets: cheatsheetsCollection,
  walkthroughs: walkthroughsCollection,
};

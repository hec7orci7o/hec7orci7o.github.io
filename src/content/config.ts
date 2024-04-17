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
    description: z.string(),
    author: z.array(z.string()),
    type: z.enum(["General", "Defensive","Offensive"]),
    difficulty: z.enum(["Fundamental", "Easy", "Medium", "Hard"]),
    tier: z.number(),
    badge: z.string(),
    module: z.string(),
    badgeLink: z.string(),
    moduleLink: z.string(),
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
    shareLink: z.string().url(),
    isPublished: z.boolean(),
  }),
});

export const collections = { 
  activities: logCollection,
  cheatsheets: cheatsheetsCollection,
  walkthroughs: walkthroughsCollection,
};

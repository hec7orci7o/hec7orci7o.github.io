import { SITE_URL } from "./src/data/config";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import { remarkReadingTime } from './src/utils/remark-reading-time.ts';
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), robotsTxt(), mdx()],
  site: SITE_URL,
  markdown: {
    gfm: true,
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "nord",
      wrap: false
    },
    remarkPlugins: [remarkReadingTime]
  }
});
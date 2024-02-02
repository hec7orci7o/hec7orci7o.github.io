
export type Project = {
  title: string;
  techs: string[];
  link?: string;
  isComingSoon?: boolean;
  isDeployed?: boolean;
};

const projects: Project[] = [
  {
    title: "Coding platform",
    techs: [],
    isComingSoon: true,
  },
  {
    title: "Business management system",
    techs: ["JS", "Next.js", "Tailwind", "Eslint", "Docker", "Supabase", "Cypress"],
    link: "https://maya.gracehopper.xyz",
    isDeployed: true,
  },
  {
    title: "Chess - frontend / backend",
    techs: ["TS", "Next.js", "Tailwind", "Eslint", "Docker", "MongoDB", "Redis", "Socket.io", "Mocha"],
    link: "https://reign.gracehopper.xyz",
    isDeployed: true,
  },
  {
    title: "URL shortener",
    techs: ["Kotlin", "SpringBoot", "PostgreSQL", "SonarQube", "RabbitMQ","Docker", "detekt", "Tailwind"],
    link: "https://github.com/Hec7or-Uni/urlshortener",
  },
  {
    title: "Networking app for architects",
    techs: ["JS", "Next.js", "Tailwind", "Eslint", "MongoDB", "Stripe", "Mailchimp"],
    link: "https://buiildr.vercel.app/",
    isDeployed: true,
  },
  {
    title: "Assembly code editor",
    techs: ["JS", "Next.js", "Tailwind", "Eslint"],
    link: "https://hotasm.vercel.app/",
    isDeployed: true,
  },
  {
    title: "Google Maps Scraper",
    techs: ["Python", "Selenium"],
    link: "https://github.com/hec7orci7o/mapsScraping",
  },
  {
    title: "Networking app for students",
    techs: ["JS", "Next.js", "Tailwind", "Eslint", "Prisma"],
    link: "https://github.com/Hec7or-Uni/BIdeas",
  },
  {
    title: "Finance bot",
    techs: ["Python", "Discord API", "CoinMarketCap API"],
    link: "https://github.com/hec7orci7o/finance-bot",
  },
  {
    title: "Bartender bot",
    techs: ["Python", "PostgreSQL", "Discord API"],
    link: "https://github.com/hec7orci7o/mall-bot",
  },
];

export default projects;


type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "hectortoraltrabajos@gmail.com",
  title: "Hi, I’m Héctor 👋",
  profile: "/profile.webp",
  description:
    "a *Spanish dev passionate about cybersecurity*. I have experience with the *DevOps* world and my goal is to become a *pentester*. Outside of coding, you'll find me with friends or exploring new concepts related to my main goals.",
  socials: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/hec7or/",
    }, {
      label: "Github",
      link: "https://github.com/hec7orci7o",
    }, {
      label: "Resume",
      link: "https://hec7orci7o.github.io/resume",
    },
  ],
};

export default presentation;

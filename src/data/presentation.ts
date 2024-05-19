
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
    "A Spanish dev passionate about cybersecurity. I have experience in the development world, working on full-stack and DevOps projects. In my free time, I enjoy hacking machines on Hack The Box.",
  socials: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/hec7or/",
    }, {
      label: "Github",
      link: "https://github.com/hec7orci7o",
    }, {
      label: "Resume",
      link: "/resume",
    },
  ],
};

export default presentation;

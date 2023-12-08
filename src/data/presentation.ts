
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
    "a *Spanish dev passionate about cybersecurity*. My goal is to become a *pentester* and I'm currently a *DevOps*. Outside of coding, you'll find me at the gym with friends or exploring new pentesting techniques.",
  socials: [
    {
      label: "Instagram",
      link: "https://www.instagram.com/hec7orci7o/",
    },
     {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/hec7or/",
    }, {
      label: "Github",
      link: "https://github.com/hec7orci7o",
    },
  ],
};

export default presentation;

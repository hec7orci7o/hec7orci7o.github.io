import type { TailwindColor } from "@/utils/types/tailwind";

type Theme = {
  colors: {
    primary: TailwindColor;
    blur: {
      top: TailwindColor;
      bottom: TailwindColor;
    };
  };
};

const theme: Theme = {
  colors: {
    primary: "red",
    blur: {
      top: "pink",
      bottom: "violet",
    },
  },
};

export default theme;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mob: "375px",
      tablet: "768px",
      laptop: "1024px",
      laptopl: "1440px",
      desktop: "1280px",
    },
    extend: {
      colors: {
        skyblue: {
          100: "#B9EEFF",
          200: "#A5E9FF",
          300: "#80E0FF",
          400: "#4DD4FF",
          500: "#1BC8FF",
          600: "#2C9BEE",
          700: "#147FD0",
        },
        purple: {
          100: "#B7ABEE",
          200: "#AC9CEF",
          300: "#9985EE",
          400: "#846EE2",
          500: "#6C56C7",
          600: "#5B3CA2",
          700: "#4E338D",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

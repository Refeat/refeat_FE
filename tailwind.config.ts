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
    fontSize: {
      body0: ["11px", "12px"],
      body1: ["12px", "18px"],
      body2: ["14px", "20px"],
      body3: ["16px", "24px"],
      body4: ["18px", "28px"],
      body5: ["20px", "30px"],
      body6: ["22px", "32px"],
      body7: ["24px", "36px"],
      body8: ["28px", "42px"],
      body9: ["32px", "48px"],
      link1: ["12px", "18px"],
      link2: ["14px", "20px"],
      link3: ["16px", "24px"],
      link4: ["18px", "28px"],
      error1: ["10px", "10px"],
      subhead1: ["12px", "18px"],
      subhead2: ["14px", "20px"],
      subhead3: ["16px", "18px"],
      subhead4: ["18px", "20px"],
      display1: ["24px", "36px"],
      display2: ["28px", "42px"],
      display3: ["32px", "48px"],
      headline1: ["20px", "30px"],
      headline2: ["22px", "32px"],
    },
    extend: {
      fontFamily: {
        ko: ["var(--font-noto-sans-kr)"],
        en: ["var(--font-inter)"],
      },
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

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#16181c",
        gold: "#bd9450",
        goldTint: "#dfc189",
        goldenShadow: "#8c5a22",
        blue: "#153535",
        blueTint: "#1b3a3b",
        blueShadow: "#022326",
        green: "#445b4d",
        greenTint: "#627759",
        greenShadow: "#2d402c",
        purple: "#342644",
        purpleTint: "#483655",
        purpleShadow: "#251730",
      },
    },
  },
  plugins: [],
};
export default config;

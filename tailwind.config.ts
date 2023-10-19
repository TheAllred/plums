import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F4F9",
        red: "#FB3640",
        violet: "#A36BAD",
        purple: "#6A62AC",
        darkPurple: "#49437E",
        blue: "#46AEE2",
        darkBlue: "#56A8D1",
        green: "#0A8754",
      },
      fontFamily: {
        head: ["Quicksand", "sans-serif"],
        body: ["Mooli", "sans-serif"],
        logo: ["Yeseva One", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;

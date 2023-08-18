import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        "20": "repeat(20, calc(25vw/12))",
        "4x": "repeat(4, calc(5vw/4))",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      "sm": "768px",
      "md": "1024px",
      "lg": "1440px",
      "xl": "2560px",
    },
    extend: {
      gridTemplateRows: {
        "20": "repeat(20, calc(25vw/12))",
        "4x": "repeat(4, calc(4vw/3))",
      },
      gridTemplateColumns:{
        "4x": "repeat(4, calc(4vw/3))"
      }
    },
  },
  plugins: [],
};
export default config;

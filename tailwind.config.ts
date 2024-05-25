import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        greendark: '#5C7D04',
        black: '#404040',
        blacken: '#262626',
        green: '#A9CF46',
        white: '#FAFAFA',
        gray: '#F1F1F1'
      },
    }
  },
  plugins: [
    forms,
  ],
};
export default config;

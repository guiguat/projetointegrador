import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      greendark: '#5C7D04',
      black: '#404040',
      blacken: '#262626',
      green: '#A9CF46',
      white: '#FAFAFA',
      gray: '#F1F1F1'
    },
  },
  plugins: [],
};
export default config;

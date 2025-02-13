import type { Config } from "tailwindcss";

export default {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        blueLink: '#6988D5'
      }
    }
  },
  plugins: [],
} satisfies Config;

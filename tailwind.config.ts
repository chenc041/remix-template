import type { Config } from "tailwindcss";
import autoprefixer from "autoprefixer";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;

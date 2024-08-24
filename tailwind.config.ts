import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-jkt)", "sans-serif"],
        jost: ["var(--font-jost)", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#CAF93A",
          foreground: "#212121",
        },
        secondary: {
          DEFAULT: "#833CFA",
          foreground: "#FFFFFF",
        },
        darkBg: "#0B0E2B",
      },
      container: {
        screens: {
          sm: "640px",
          md: "880px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1280px",
        },
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
export default config;

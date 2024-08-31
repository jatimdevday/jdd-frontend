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
        blackText: "#212121",
      },
      container: {
        screens: {
          sm: "1100px",
          md: "1140px",
          lg: "1200px",
          xl: "1400px",
        },
        padding: {
          DEFAULT: "1.5rem",
          sm: "1.5rem",
          md: "1.5rem",
          lg: "2.5rem",
          xl: "3.5rem",
          "2xl": "4rem",
        },
      },
    },
  },
  plugins: [],
};
export default config;

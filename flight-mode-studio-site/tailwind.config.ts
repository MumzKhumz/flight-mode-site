import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#14110f",
        cream: "#f5ead7",
        butter: "#f7d84b",
        peach: "#f4b07a",
        clay: "#d75a3d",
        mint: "#7cc6a4",
        paper: "#fff9ed",
      },
      boxShadow: {
        hard: "8px 8px 0px #14110f",
        soft: "0 18px 60px rgba(20,17,15,0.12)",
      },
      borderRadius: {
        blob: "36% 64% 61% 39% / 45% 38% 62% 55%",
      },
    },
  },
  plugins: [],
};
export default config;

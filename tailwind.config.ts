import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}", "./src/data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#07111f",
        deepBlue: "#0b1f3a",
        auroraBlue: "#123c69",
        quietTeal: "#2aa6a1",
        lanternGold: "#d8a84f",
        softGold: "#f3d58b",
        warmFlame: "#ffb347",
        ivory: "#f7efe0",
        mutedSilver: "#b9c7d6"
      }
    }
  },
  plugins: []
};

export default config;

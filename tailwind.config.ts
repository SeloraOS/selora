import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8FAFC",
        foreground: "#0F172A",
        muted: "#64748B",
        border: "#E2E8F0",
        accent: {
          DEFAULT: "#2563EB",
          light: "#60A5FA",
        },
        success: "#10B981",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        hand: ["var(--font-caveat)", "cursive"],
      },
      borderRadius: {
        card: "16px",
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(15, 23, 42, 0.04), 0 1px 3px 0 rgba(15, 23, 42, 0.03)",
        elevated: "0 4px 16px -4px rgba(15, 23, 42, 0.08), 0 2px 6px -2px rgba(15, 23, 42, 0.04)",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;

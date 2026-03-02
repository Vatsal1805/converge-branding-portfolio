import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        secondary: "#111111",
        card: "#161414",
        accent: "#E84141",
        orange: "#E85D26",
        textWhite: "#F5F0EC",
        muted: "#888888",
        border: "rgba(255,255,255,0.07)",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
      },
      fontSize: {
        hero: "clamp(56px, 7vw, 96px)",
        section: "clamp(40px, 5vw, 72px)",
        "card-title": "22px",
        body: "17px",
        eyebrow: "11px",
      },
      spacing: {
        "section-y": "120px",
        "section-x": "80px",
        "section-y-tablet": "80px",
        "section-x-tablet": "40px",
        "section-y-mobile": "60px",
        "section-x-mobile": "24px",
      },
      maxWidth: {
        content: "1280px",
      },
      borderRadius: {
        card: "16px",
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        "morph": {
          "0%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
          "100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
        },
      },
      animation: {
        "marquee-left": "marquee-left 20s linear infinite",
        "marquee-right": "marquee-right 25s linear infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        morph: "morph 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;

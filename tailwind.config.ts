import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: "#FFF7F5",
          100: "#FFEDE9",
          200: "#FFDCD3",
        },
        peach: {
          200: "#FFD9C0",
          300: "#FFC49E",
        },
        lavender: {
          100: "#EFE7FF",
          200: "#DED0FF",
          300: "#C9B6FF",
        },
        rose: {
          400: "#F0729B",
          500: "#E14E82",
          600: "#C6396C",
          700: "#9E2A54",
        },
        plum: {
          900: "#2B1B2E",
          800: "#3B2540",
        },
        gold: {
          300: "#F3C77E",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-outfit)", "sans-serif"],
      },
      backgroundImage: {
        "aurora":
          "radial-gradient(60% 50% at 15% 10%, #FFE3D8 0%, transparent 60%), radial-gradient(55% 45% at 90% 15%, #E4D6FF 0%, transparent 55%), radial-gradient(70% 60% at 50% 100%, #FFD9E8 0%, transparent 60%), linear-gradient(180deg, #FFF8F5 0%, #FFF2F6 50%, #FBF5FF 100%)",
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(225,78,130,0.35)",
        soft: "0 20px 60px -20px rgba(59,37,64,0.25)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-16px) rotate(1.5deg)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        floatSlow: "floatSlow 8s ease-in-out infinite",
        gradientShift: "gradientShift 18s ease infinite",
        sparkle: "sparkle 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

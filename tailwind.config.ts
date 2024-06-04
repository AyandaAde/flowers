import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      transitionDuration: {
        1200: "1200ms",
        2200: "2200ms",
        2400: "2400ms",
        2800: "2800ms",
        3000: "3000ms",
        3200: "3200ms",
        3400: "3400ms",
        3500: "3500ms",
        3600: "3600ms",
        3800: "3800ms",
        4000: "4000ms",
        4200: "4200ms",
        4400: "4400ms",
        4600: "4600ms",
        4800: "4800ms",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./pages/**/*.{html,js}",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        ebNavy: "#0F1C3F",
        ebCrimson: "#B91C2C",
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        }
      },
      fontFamily: {
        sans: ["Sora", "Inter", "system-ui", "-apple-system", "sans-serif"],
        serif: ["DM Serif Display", "Lora", "Georgia", "serif"],
        mono: ["JetBrains Mono", "monospace"]
      }
    },
  },
  plugins: [],
  // ── Safelist: dynamic classes that Tailwind's JIT scanner can't detect ──
  // showToast() in js/utils.js builds the bg class at runtime from a lookup
  // object, so the literal strings never appear in source — safelist them here.
  safelist: [
    "bg-green-500",  // showToast type="success"
    "bg-red-500",    // showToast type="error"
    "bg-blue-500",   // showToast type="info"
    "bg-yellow-500", // showToast type="warning"
  ],
};

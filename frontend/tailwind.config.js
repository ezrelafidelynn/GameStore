/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "game-dark": "#0f172a",
        "game-darker": "#020617",
        "game-accent": "#3b82f6",
        "game-secondary": "#64748b",
      },
    },
  },
  plugins: [],
};

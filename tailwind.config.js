/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: { md: "768px", lg: "1440px" },
    extend: {
      fontFamily: {
        barlow: ["Barlow Condensed", "sans-serif"],
        bellefair: ["Bellefair", "serif"],
      },
      colors: {
        "light-blue": "#D0D6F9",
      },
    },
  },
  plugins: [],
};

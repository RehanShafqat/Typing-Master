/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themeColor: "#324A5E",
        themeColorHover: "#4a6a7d",
      },
    },
  },
  plugins: [],
};

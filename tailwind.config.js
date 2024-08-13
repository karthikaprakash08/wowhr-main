/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        defaultBlue: "#1850a8",
        darkBlue: "#011329",
        lightBlue: "#089ede",
        lightestBlue: "#f0f6ff",
      },
      fontFamily: {
        comfortaa: ["Comfortaa", "sans-serif"],
        antic: ["Antic", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
      screens: {
        xs: "320px",
      },
      backgroundImage: {
        "footer-bg": "url('/footerBG.svg')",
      },
    },
  },
  plugins: [],
};

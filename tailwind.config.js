/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        lp: "1440px",
        "2xl": "1680px",
      },
      borderRadius: {
        site: "20px",
      },
      boxShadow: {
        1: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
        13: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
      },
      colors: {
        green: "#088C7F",
        offwhite: "#FAFAFA",
        gray: "#A4A4A4",
        "black-2": "#222626",
        "gray-white": "#EFEFEF",
        "light-green": "#4CD964",
        yellow: "#FFCD38",
        footer: "#F2F2F3",
      },
      backgroundImage: {
        "gradient-card": "linear-gradient(225deg, #088C7F 0%, #172E36 100%)",
      },
      container: {
        center: true,
        padding: "1.25rem",
        screens: {
          xs: "440px",
          sm: "570px",
          md: "708px",
          lg: "984px",
          xl: "1180px",
          lp: "1340px",
          "2xl": "1536px",
        },
      },
    },
  },
  plugins: [],
};

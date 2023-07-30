/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        header_footer_text: "#FFFFFF",
        section_heading: "#0C0C0E",
        section_text: "#000000",
        secondary: "#BB945F",
        placeholder: "#8E8E8E"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        forum: ["Forum", "sans-serif"]
      },
      fontWeight: {
        regular: '100',
        bold: '700'
      }
    },
    screens: {
      md: "768px",
      xl: "1440px",
    },
    backgroundImage: {
      welcome: "url('./assets/pictures/welcome-1440.jpg')",
    },
  },
  plugins: [],
  
};
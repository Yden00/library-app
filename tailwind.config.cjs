/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      cursor: ['disabled'],
      backgroundColor: ['disabled'],
      textColor: ['disabled'],
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
      extras: "390px",
      xxs: "425px",
      xs: "480px",
      sm: "769px",  
      md: "971px",
      xl: "1440px",
    },
    backgroundImage: {
      welcome: "url('/welcome-1440.jpg')",
      welcome1: "url('/welcome-768.png')",
    },
  },
  plugins: [],
  
};
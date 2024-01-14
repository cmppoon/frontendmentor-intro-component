const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('./src/assets/bg-intro-desktop.png')",
      },
      colors: {
        "primary-red": "hsl(0, 100%, 74%)",
        "primary-green": "hsl(154, 59%, 51%)",
        "primary-green-hover": "hsl(154, 49%, 61%)",
        "primary-blue": "hsl(248, 32%, 49%)",
        "dark-blue": "hsl(249, 10%, 26%)",
        "grayish-blue": "hsl(246, 25%, 77%)",
      },
      boxShadow: {
        custom: "0px 7px 0px 0px rgba(0, 0, 0, 0.12)",
      },
      fontFamily: {
        sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

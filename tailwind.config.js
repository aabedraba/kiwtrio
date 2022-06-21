const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Titillium Web"'],
        serif: ['"Patua One"'],
        display: ["Grape Nuts"],
      },
    },
    colors: {
      ...colors,
      lavendergray: "#CECEDF",
      darkbluegray: "#5B5F97",
      maximumyellow: "#5B5F97",
      babypowder: "#FFFFFB",
      bittersweet: "#FF6B6C",
      darkblue: "#2077F9",
      lightred: "#FF5656",
    },
  },
  variants: {
    extend: {
      fontFamily: ["hover", "focus"],
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
};

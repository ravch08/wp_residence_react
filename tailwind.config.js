/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"], // Add the paths to all of your template files
  theme: {
    extend: {
      colors: {
        "primary-100": "#AB978A",
        "primary-400": "#452820",
        "primary-800": "#3b2c28",
        "secondary-400": "#F4EBE4",
        "gray-400": "#696969",
        "dark-400": "#181C23",
      },
      fontFamily: {
        "merri-serif": ["Merriweather", "serif"],
        "roboto-sans": ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "banner-img": "url('./src/assets/banner.jpg')",
      },
    },
  },
  plugins: [],
};

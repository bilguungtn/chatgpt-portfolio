/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        // light: {
        // ...require("daisyui/colors/themes")["[data-theme=light]"],
        // },
      },
    ],
  },
};

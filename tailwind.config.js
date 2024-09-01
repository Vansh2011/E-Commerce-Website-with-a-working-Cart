/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "-xxl": { max: "1535px" }, // largest max-width
        "-xl": { max: "1024px" },
        "-lg": { max: "768px" },
        "-md": { max: "420px" },
        "-sm": { max: "360px" }, // smallest max-width
      },
    },
  },
  variants: {},
  plugins: [],
};

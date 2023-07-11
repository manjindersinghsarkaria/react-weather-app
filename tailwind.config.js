/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        sm: "576px",
        md: "992px",
        lg: "1280px",
        xl: "1400px",
        "2xl": "1920px"
      }
    }
  },
  plugins: []
};

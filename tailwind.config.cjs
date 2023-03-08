/** @type {import('tailwindcss').Config} */
module.exports = {
  enabled: process.env.NODE_ENV === "production",
  // classes that are generated dynamically, e.g. `rounded-${size}` and must
  // be kept
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

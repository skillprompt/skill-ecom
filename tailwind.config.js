/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        buttonColour: "#39844F",
        forgotPasswordColour: "#6C90C7",
      },
    },
  },
  plugins: [],
};

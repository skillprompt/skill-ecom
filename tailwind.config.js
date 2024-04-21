/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btnColor: "#39844F",
        inputTxt: "#aaaaaa",
        hoverinputTxt: "#6C90C7",
        light_black: "#292626",
        buttonColour: "#39844F",
        forgotPasswordColour: "#6C90C7",
      },
    },
    plugins: [],
  },
};

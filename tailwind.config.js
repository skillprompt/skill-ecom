
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",flowbite.content()],
  theme: {
    extend: {
      colors:{
        btnColor:"#39844F",
        btnTxtColor:"#ffffff",
        inputColor:"#F0F5FF",
        inputTxt:"#aaaaaa",
        hoverinputTxt:"#6C90C7",
        light_black:"#292626",
        loginBtnColour: "#68C3D4",
        createNewAccountBtnColour: "#39844F",
        buttonColour: "#39844F",
        forgotPasswordColour: "#6C90C7",
      }
    },
    plugins: [
      flowbite.plugin(),
    ],
  },
};

import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        btnColor: "#39844F",
        btnTxtColor: "#ffffff",
        inputColor: "#F0F5FF",
        inputTxt: "#aaaaaa",
        catogriesBg: "#2E2E2E",
        hoverinputTxt: "#6C90C7",
        light_black: "#292626",
        loginBtnColour: "#68C3D4",
        createNewAccountBtnColour: "#39844F",
        buttonColour: "#39844F",
        hoverButtonColour: "#41975b",
        closeModalButtonColour: "#2098d5",
        forgotPasswordColour: "#6C90C7",
        customNotificationColour: "#2f2f2f",
        categoryBarColour: "#2E2E2E",
        buyNowButtonColour: "#000000",
        hoverBuyNowButtonColour: "#111111",
      },
    },
    plugins: [flowbite.plugin()],
  },
};

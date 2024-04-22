/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      colors:{
        btnColor:"#39844F",
        btnTxtColor:"#ffffff",
        inputTxt:"#aaaaaa",
        hoverinputTxt:"#6C90C7",
        light_black:"#292626",
        loginBtnColour: "#68C3D4",
        createNewAccountBtnColour: "#39844F",
        forgotPasswordColour: "#6C90C7",
    
      }
    },
      
        
  plugins: [],
  }
}
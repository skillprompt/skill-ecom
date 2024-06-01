import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */

export const darkMode = ["class"];
export const content = [
  "./pages/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./app/**/*.{ts,tsx}",
  "./src/**/*.{ts,tsx}",
  flowbite.content(),
];
export const prefix = "";
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    colors: {
      mainTheme: "#39844F",
      hoverMainTheme: "#41975b",
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
      categoryBarColour: "#2E2E2E",
      buyNowButtonColour: "#000000",
      borderColour: "#D4D4D4",
      dropdownColour: "#9F9F9F",
      hoverBuyNowButtonColour: "#111111",
      lessFocusTextColour: "#545454",
      categoryCardContainerColour: "#FAFAFA",
      categoryCardColour: "#EDEDED",
      categoryCardActiveColour: "#F6F6F6",
      productCardColour: "#F6F6F6",
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
    },
    plugins: [flowbite.plugin()],
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
};

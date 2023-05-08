/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      iceBlue: "#0075FF",
    },
    fontFamily: {
      roboto: "var(--font-roboto)",
    },
    boxShadow: {
      button: "0px 4px 0px 0px rgba(0, 0, 0, 0.25)",
    },
  },
};
export const plugins = [];

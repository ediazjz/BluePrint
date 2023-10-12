import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          ligther: "#D6E9FE",
          light: "#ADD2FC",
          DEFAULT: "#328FF8",
          dark: "#2D81DF",
          darker: "#2872C6",
        },
        secondary: {
          ligther: "#FFDBEE",
          light: "#FFB8DD",
          DEFAULT: "#FF4DAB",
          dark: "#E6459A",
          darker: "#CC3E89",
        },
        base: {
          light: "#FCFCFC",
          dark: "#2C2C2C",
        },
        feedback: {
          success: {
            DEFAULT: "#008A25",
            lighter: "#E6F3E9",
          },
          warning: {
            DEFAULT: "#F17114",
            lighter: "#FEF1E8",
          },
          error: {
            DEFAULT: "#CD1332",
            lighter: "#FAE7EB",
          },
        },
        gray: {
          50: "#F4F4F4",
          100: "#E9E9E9",
          200: "#D3D3D3",
          300: "#BEBDBD",
          400: "#A8A7A7",
          500: "#929191",
          600: "#7C7B7B",
          700: "#676565",
          800: "#514F4F",
          900: "#3B3939",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      fontSize: {
        "2xs": "0.625rem",
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.75rem",
        "4xl": "2rem",
        "5xl": "2.25rem",
        "6xl": "2.5rem",
        "7xl": "2.75rem",
        "8xl": "3rem",
        "9xl": "3.25rem",
        "10xl": "3.5rem",
        "11xl": "3.75rem",
        "12xl": "4rem",
        "13xl": "4.5rem",
      },
    },
  },
  plugins: [],
}
export default config

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
    },
  },
  plugins: [],
}

export default config

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    maxWidth: {
      container: "1200px",
    },
    screens: {
      xs: "370px",
      sm: "575px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xl2: "1300px",
      xxl: "1400px",
      xxl2: "1600px",
      xxxl: "1920px",
    },
    extend: {
      fontFamily: {
        farro: ["Farro", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
         // neutral
          neutral700: "#374151",
          neutral500: "#6B7280",
        // neutral
        neutral700: "#374151",
        neutral500: "#6B7280",
        // grey set colors starts
        grey50: "#F9FAFB",
        grey100: "#F2F2F2",
        grey200: "#D9D9D9",
        grey300: "#ADB2B6",
        grey400: "#82898F",
        grey500: "#5C656E",
        grey600: "#333F48",
        grey700: "#767676",
        // grey set colors ends
        // primary (blue) set colors starts
        primary50: "#EDF7FF",
        primary100: "#E6F1FB",
        primary200: "#E6F1FB",
        primary300: "#0086F8",
        primary400: "#4664DC",
        primary500: "#0657AD",
        // primary (blue) set colors ends
        // secondary set colors starts
        secondary100: "#FDFAAF",
        secondary200: "#B4E646",
        secondary300: "#51C21A",
        secondary400: "#168721",
        secondary500: "#1E8782",
        // secondary set colors ends
        // Tertiary set colors starts
        tertiary50: "#FFF7E0",
        tertiary100: "#FFF0BE",
        tertiary200: "#FFD700",
        tertiary300: "#FFA514",
        tertiary400: "#FF8300",
        tertiary500: "#973A14",
        tertiary600: "#BC5B00",
        // Tertiary set colors ends
        // validation set colors starts
        positive: "#168721",
        positiveLight: "#EEF2C0",
        positiveDark: "#106519",
        // validation set colors ends
        // validation set colors starts
        negative: "#BC0000",
        negativeLight: "#FFEEEE",
        negativeDark: "#800101",
        // validation set colors ends
        // shades set colors starts
        darkGrey: "#82898F",
        textGrey: "#767676",
        textBlue: "#4B4EFC",
        // shades set colors ends
      },
      fontSize: {
        // Desktop fontsize starts
        "heading-xl": ["5.2rem", "1.3"],
        "heading-lg": ["4.4rem", "1.3"],
        heading1: ["4rem", "1.3"],
        heading2: ["3.6rem", "1.3"],
        heading3: ["3.2rem", "1.3"],
        heading4: ["2.8rem", "1.3"],
        heading5: ["2.4rem", "1.3"],
        heading6: ["2rem", "1.3"],
        //para fontsize starts
        "para-lg": ["1.8rem", "1.3"],
        para: ["1.6rem", "1.5"],
        small: ["1.4rem", "1.5"],
        "x-small": ["1.2rem", "1.5"],
        //para fontsize ends
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 60.5%, rgba(0, 0, 0, 0) 100%)",
        "custom-gradient2":
          "0px 4px 6px -4px #1018281A, 0px 10px 15px -3px #1018281A",
      },
      boxShadow: {
        "custom-sm": "0 1px 2px 0 rgba(16, 24, 40, 0.05);",
      },
      boxShadow: {
        "custom-sm": "0 1px 2px 0 rgba(16, 24, 40, 0.05);",
        "custom-lg": "0 10px 15px -3px rgba(16, 24, 40, 0.1);",
      },
      
    },
  },
  plugins: [],
}

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
        background:{
          black:"000",
        },
        white:{
          50:"#fff",
        },
        grey: {
          300: "#333",
          400: "#707070",
          500: "#767676",
          600: "#e6e6e6",
          900: "#000000",
          },
        neutral: {
          50: "#F9FAFB",
          100: "#F2F2F2",
          200: "#D9D9D9",
          300: "#ADB2B6",
          400: "#82898F",
          500: "#5C656E",
          600: "#333F48",
          700: "#767676",
        },
        primary: {
          50: "#EDF7FF",
          100: "#E6F1FB",
          200: "#C8F0F5",
          300: "#0086F8",
          400: "#4664DC",
          500: "#0657AD",
          600:"#0FBEFD",
        },
        secondary: {
          100: "#FDFAAF",
          200: "#B4E646",
          300: "#51C21A",
          400: "#0ACBA0",
          500: "#168721",
        },
        tertiary: {
          50: "#FFF7E0",
          100: "#FFF0BE",
          200: "#FFD700",
          300: "#FFA514",
          400: "#FF8300",
          500: "#973A14",
          600: "#BC5B00",
        },
        positive: {
          default: "#168721",
          light: "#EEF2C0",
          dark: "#106519",
        },
        negative: {
          default: "#BC0000",
          light: "#FFEEEE",
          dark: "#800101",
        }
      },
      fontSize: {
        "heading-xl": ["5.2rem", "1.3"], //'52px','56px'
        "heading-lg": ["4.4rem", "1.3"], //'44px','48px'
        heading1: ["4rem", "1.3"], //'40px','48px'
        heading2: ["3.6rem", "1.3"], //'36px','44px'
        heading3: ["3.2rem", "1.3"], //'32px','40px'
        heading4: ["2.8rem", "1.3"], //'28px', '36px'
        heading5: ["2.4rem", "1.3"], //'24px', '32px'
        heading6: ["2rem", "1.3"], //'20px', '28px'
        "para-lg": ["1.8rem", "1.5"], //'18px', '24px'
        para: ["1.6rem", "1.5"], //'16px', '24px'
        small: ["1.4rem", "1.5"], //'14px', '20px'
        "x-small": ["1.2rem", "1.5"], //'12px','20px'
        "xs-small": ["1rem", "1.5"], //'10px','20px'
        overline: ["1.4rem", "1.5"], //'14px', '12px'
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 60.5%, rgba(0, 0, 0, 0) 100%)",
        "custom-gradient2":
          "0px 4px 6px -4px #1018281A, 0px 10px 15px -3px #1018281A",
      },
      boxShadow: {
        "custom-sm": "0px 1px 2px -1px rgba(16, 24, 40, 0.1);",
      },
      boxShadow: {
        "custom-sm": "0 1px 2px 0 rgba(16, 24, 40, 0.05);",
        "custom-lg": "0 10px 15px -3px rgba(16, 24, 40, 0.1);",
      },
      
    },
  },
  plugins: [],
}

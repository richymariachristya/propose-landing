/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    maxWidth: {
      container: "1216px",
    },
    screens: {
      xs: "350px",
      sm: "575px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      xl2: "1300px",
      xxl: "1400px",
      xxl2: "1600px",
      xxxl: "1920px",
    },
    extend: {
      fontFamily: {
        "heading": ["Farro", "sans-serif"],
        "para": ["Inter", "sans-serif"],
      },
      colors: {
        //Text color
        "grey": "#333333",
        //Grey shades
        "grey-darkest": "#333F48",
        "grey-dark": "#666666",
        "grey-medium": "#949494",
        "grey-light": "#CCCCCC",
        "grey-lighter": "#E5E5E5",
        "grey-lightest": "#F2F2F2",
        //primary - Blue shades
        "primary": "#4664DC", 
        "primary-lightest": "#EDFCFF", 
        "primary-lighter": "#C8F0F5", 
        "primary-light": "#0FBEF0", 
        "primary-dark": "#28558C", 
        "primary-petal": "#0874E7", 
        //Secondary - green shades
        "secondary": "#068468", 
        "secondary-lightest": "#EEF2C0", 
        "secondary-lighter": "#F0FAAF", 
        "secondary-light": "#B4E646", 
        "secondary-dark": "#1A7A75", 
        "secondary-petal": "#46A617", 
        // Tertiary - Orange shades
        "tertiary": "#D18100", 
        "tertiary-lightest": "#FFF7E0", 
        "tertiary-lighter": "#FFF0BE", 
        "tertiary-light": "#FFD700", 
        "tertiary-dark": "#CB4F0A", 
        "tertiary-petal": "#E07400", 
        // Validation - Positive shades
        "positive": "#168721",
        "positive-light": "#DCEDDE",
        "positive-dark": "#106519",
        // Validation - Negative shades
        "negative": "#BC0000",
        "negative-light": "#FFBEBE",
        "negative-dark": "#800101",
        "ielts-red": "#E31837", // IETLS Brand FOR IELTS related pods
      },
      fontSize: {
        "heading-1": ["40px", "1.3"],
        "heading-2": ["32px", "1.3"],
        "heading-3": ["28px", "1.3"],
        "heading-4": ["24px", "1.3"],
        "heading-5": ["20px", "1.3"],
        "heading-6": ["18px", "1.3"],
        para: ["16px", "1.5"],
        small: ["14px", "1.4"],
        "x-small": ["12px", "1.3"],
      }
    },
  },
  plugins: [],
};

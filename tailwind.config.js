/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",    // Extra small devices
        sm: "640px",    // Small devices
        md: "768px",    // Medium devices
        lg: "960px",    // Large devices
        xl: "1200px",   // Extra large devices
        "2xl": "1536px", // 2x Extra large devices
        "3xl": "1920px", // 3x Extra large devices
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], 
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        slideIn: "slideIn 0.3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideIn: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
    },
  },
  darkMode: 'class', // Enable dark mode using the class strategy
  plugins: [],
};









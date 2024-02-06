/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,astro}"],
  theme: {
    extend: {
      colors: {    
        gradientVia: "var(--gradient-via)",
        textColor: "var(--text-color)"
      },
      screens: {
        MM: "375px",
        ML: "425px",
        tablet: "768px",
        laptop: "1024px",
        laptopL: "1440px"
      },
      important: true,
      fontFamily: {
        strong: ["Bebas Neue"],
        data: ["Montserrat"],
      },
      keyframes: {
        ripple: {
          "0%": {
            opacity: "1",
          },
          
          "80%": {
            opacity: "0.5",
            height: "400vw",
            width: "400vw",
            borderRadius: "50%"
          },
        },
      },
      
      animation: {
        ripple: "ripple 3s linear",
      }
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};


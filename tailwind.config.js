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
        tittleFadeIn: {
          "0%": {
            opacity: "0"
          },
          "50%": {
            opacity: "0",
            transform: "translateX(100px) scale(0.9)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0px) scale(1)"
          }
        },
        navFadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(-100px) scale(0.9)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px) scale(1)"
          }
        },
          footerFadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(100px) scale(0.9)"

          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px) scale(1)"

           
          }
        }
      },
      
      animation: {
        ripple: "ripple 1.5s linear",
        tittleFadeIn: "tittleFadeIn 1s linear",
        navFadeIn: "navFadeIn 0.5s linear",
        footerFadeIn: "footerFadeIn 0.5s linear"
      }
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};


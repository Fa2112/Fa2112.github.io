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
            transform: "translateX(20px) scale(0.9)",
            filter: "blur(3px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0px) scale(1)",
            filter: "blur(0)"
          }
        },
        navFadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px) scale(0.9)",
            filter: "blur(5px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px) scale(1)",
            filter: "blur(0px)"

          }
        },
          footerFadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(-30px) scale(0.9)",
            filter: "blur(5px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px) scale(1)",
            filter: "blur(0px)"
           
          }
        },
        themePickerFadeIn: {
          "0%": {
            opacity: "0",
            filter: "blur(5px)"
          },
          "100%": {
            opacity: "1",
            filter: "blur(0px)"
          }
        }
      },
      
      animation: {
        ripple: "ripple 1.5s linear",
        tittleFadeIn: "tittleFadeIn 0.2s linear forwards",
        navFadeIn: "navFadeIn 0.2s linear forwards",
        themePickerFadeIn: "themePickerFadeIn 0.4s linear",
        footerFadeIn: "footerFadeIn 0.4s linear",
      }
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};


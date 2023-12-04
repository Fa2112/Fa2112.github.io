/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,astro}"],
  theme: {
    extend: {
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
          
          "100%": {
            opacity: "0.5",
            height: "400vw",
            width: "400vw",
            borderRadius: "50%"
          },
        },
      },
      
      animation: {
        ripple: "ripple 3s linear  infinite",
      },
      animationDelay: {
        0.1: "200ms",
        0.2: "400ms",
        1: "1s",
        2: "2s",
        3: "3s",
        4: "4s",
        5: "5s",
        6: "6s",
        7: "7s",
        8: "8s",
        9: "9s",
        10: "10s",
        1.5: "1.5s",
        2.5: "2.5s",
        3.5: "3.5s",
        4.5: "4.5s",
        5.5: "5.5s",
        6.5: "6.5s",
        7.5: "7.5s",
        8.5: "8.5s",
        9.5: "9.5s",
        0.5: "0.5s",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};


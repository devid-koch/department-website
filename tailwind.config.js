/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary:"#2B4C65", //blue
        // primary:"#2C2C2C", //black
        primary:"#ffff", //white
        secondary:"#FFE600", //yellow
        tertiary:"#010202",
        gradientLight:"#4D7DA1",
        gradientDark:"#132B3E",
        gradientLightBlue:"#EEFBFF",
        themeWhite:"#ffffff",
        themeBlack:"#1E3846", 
        textColor: "#374151",
      },
      // fontFamily: {
      //   pridi: ["Pridi","serif" ],
      //   pridiMedium: ["Pridi-Medium", "sans-serif"],
      // },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
        textBlink: {
          "0%": { opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        typing: "typing 3s steps(20) infinite alternate, blink .7s infinite",
        blink: "textBlink 2s steps(25, start)  infinite alternate, blink 7s infinite",
      },
      }
  },
  plugins: [require("daisyui")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      Agentbg: "url('/src/components/Agent-page/images/Agentbg.png')",
      sellbg: "url('/src/components/sell-page/images/Background image 1.png')",
      Abtbg: "url('/src/components/About-page/images/ourbeliefs.png')",
      msnbg: "url('/src/components/About-page/images/ourmission.png')",
      buybg: "url('/src/components/BuyPage/images/buyimage1.png')",
      mortgagebg: "url('/src/components/Mortgage-page/images/bgimage1.png')",
    },
    extend: {
      colors: {
        customBlue: "#091A2B",
        darkBlue: "#091A2B",
        darkRed: "#F53C3C",
        brightYellow: "#FFC700",
        darkPurple: "#9747FF",
        darkGreen: "#0FA958",
        gray: "#344054",
        shadeOfGray: "#F2F4F7",
        inputBackground: "#FAFAFA",
        lightRed: "#F24E1E",
        lightGreen: "#027A48",
        textGray: "#667085",
        darkerGreen: "#48AD6D",
        commentsBg: "#E9F2F4",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    backgroundImage:{
      'Agentbg': "url('./src/images/Agentbg.png')",
      'Mortagebg': "url('./src/images/Mortageheadbg.png')",
      'Buybg': "url('./src/images/Buyheadbg.png')"

    backgroundImage: {
      Agentbg: "url('/src/images/Agentbg.png')",
      sellbg: "url('/src/components/sell-page/images/Background image 1.png')",

    },
    extend: {
      colors: {
        customBlue: "#091A2B",
      },
    },
  },
  plugins: [],
};

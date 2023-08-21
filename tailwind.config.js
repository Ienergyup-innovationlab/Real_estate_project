/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage:{
      'Agentbg': "url('./src/images/Agentbg.png')"
    },
    extend: {
      colors: {
        customBlue: "#091A2B",
      },
    },
  },
  plugins: [],
};

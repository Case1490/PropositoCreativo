/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        SkyBlue: "#5082b5",
        BlueDarkMain: "#0a3c71",
        CyanMain: "#01feff",
        PurpleMain: "#984ffe",
        GreenLightMain: "#22fb59",
      },
    },
  },
  plugins: [],
};

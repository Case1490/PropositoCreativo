/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        SkyBlue: "#3f8fd8",
        OrangeMain: "#f49a3f",
        CyanMain: "#01feff",
        GrayMain: "#1E293B",
        GreenLightMain: "#57F29A",
        YellowMain: "#f1f93f",
        BlueLightMain: "#2563EB",
      },
    },
  },
  plugins: [],
};

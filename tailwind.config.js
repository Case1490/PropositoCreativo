/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        SkyBlue: "#3f8fd7" /*Redes sociales*/,
        OrangeMain: "#F18825" /*Creatividad*/,
        BlueLightMain: "#2563eb",
        OrangeSecond: "#F3953F" /*Animación 2D*/,
        RedMain: "#E94362" /*Branding*/,
        BlackMain: "#3C3C3B" /*Copy*/,
        PurpleMain: "#6561A9" /*Diseño web*/,
        GreenLightMain: "#8CCAAE" /*Audiovisual*/,
        YellowMain: "#fcfe00" /*Tecnica de ventas*/,
      },
    },
  },
  plugins: [],
};

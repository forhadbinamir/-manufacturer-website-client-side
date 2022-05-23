module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#570DF8",

          "secondary": "#F7F7FF",

          "accent": "#3A426D",

          "neutral": "#3D4451",

          "base-100": "#F5F5FA",

          "info": "#A5AAC9",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

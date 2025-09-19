/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#213448",
        secondary: "#547792",
        accent: "#10B981",
        background: "#F9FAFB",
        dark: "#111827",
        light: "#F3F4F6",
        danger: "#EF4444",
        heading: "#111111",
        paragraph: "#6B7280",
        editColor: "#EA580C",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};

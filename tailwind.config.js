/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: ["white"],
  },
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
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    // padding: {
    //   'buttonX': '2rem',
    //   'buttonY': '.8rem',
    //   '5p': '5%',
    // },
  },
  plugins: [require("daisyui")],
};

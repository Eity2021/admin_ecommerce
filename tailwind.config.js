/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  daisyui: {
    themes: ["white"],
  },
  theme: {
    extend: {
      colors: {
        primary: "#213448", 
        secondary: "#547792",    // Amber
        accent: "#10B981",       // Emerald
        background: "#F9FAFB",   // Light Gray background
        dark: "#111827",         // Dark text
        light: "#F3F4F6",        // Lighter Gray background
        danger: "#EF4444",       // Red for delete or errors
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
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
  },
  plugins: [require('daisyui')],
}

/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1E1E1E',    // Negro elegante
          secondary: '#2C2C2C',  // Gris oscuro
          accent: '#D4AF37',     // Dorado
          background: '#121212', // Negro profundo
          surface: '#1A1A1A',    // Negro suave
          text: '#FFFFFF',       // Blanco
          'text-light': '#CCCCCC', // Gris claro
          success: '#4CAF50',    // Verde
          error: '#F44336',      // Rojo
        },
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
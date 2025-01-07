/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Habilitar el modo oscuro mediante clases
  theme: {
    extend: {
      colors: {
        // Definir colores personalizados
        customDark: '#1a1a1a', // Color de fondo oscuro personalizado
        customLight: '#f5f5f5', // Color de fondo claro personalizado
        darkText: '#EAEAEA', // Color de texto en modo oscuro
        lightText: '#333333', // Color de texto en modo claro
      },
    },
  },
  plugins: [],
}

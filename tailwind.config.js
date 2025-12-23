/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          bgProject: "#fff9fa", // Nebulosa Roxo Escuro
          nebulosa: "#1A0756", // Nebulosa Roxo Escuro
          galactico: "#4B1A82",   // Roxo Galáctico
          magenta: "#7923A7", // Roxo-Magenta
          Stellar: "#B43CC3",    // Magenta Estelar
          cosmic: "#F26CBF",// Rosa Cósmico
          night: "#0B0E2E",// Azul Noturno
        }
      },
       fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
    },
  },
  plugins: [],
};


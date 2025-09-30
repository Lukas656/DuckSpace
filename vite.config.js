import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss(),],
  server: {
    host: true, // expõe para a rede
    port: 5173, // pode mudar se precisar
  },
})

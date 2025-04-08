import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
    server: {
      proxy:{
        '/api': {
target:'http://127.0.0.1:8000',
changeOrigin: true,
    headers:{
      Accept:'application/json',
      'Content-Type':'application/json'
    }
        }
      }
    }
})

import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss('./tailwind.config.js'),
  ],
  base: "/food-recipe-app"
})

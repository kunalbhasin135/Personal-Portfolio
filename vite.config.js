import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' so the built site works on any host (GitHub Pages, Vercel, file://)
export default defineConfig({
  plugins: [react()],
  base: './',
})

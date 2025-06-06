import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@styles': new URL('./src/styles', import.meta.url).pathname,
      '@icons': new URL('./src/assets/icons', import.meta.url).pathname,
    }
  }
})
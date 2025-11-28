import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: false   // ← السطر ده هو اللي هيوقف الـ terser نهائي
  }
})

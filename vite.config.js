import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: false,           // ← يوقف الـ terser
    terserOptions: false    // ← تأكيد إضافي
  }
})

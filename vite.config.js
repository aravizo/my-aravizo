import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // إعدادات الخادم للتطوير
  server: {
    port: 3000,
    host: true, // يسمح بالوصول من الأجهزة الأخرى على الشبكة
    open: true, // يفتح المتصفح تلقائياً
  },
  
  // إعدادات البناء للإنتاج
  build: {
    target: 'esnext', // أحدث معايير JavaScript
    minify: 'esbuild', // استخدم esbuild بدل terser
    sourcemap: false, // إخفاء ملفات المصدر في الإنتاج
    
    // تحسين حجم الحزمة
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          supabase: ['@supabase/supabase-js']
        }
      }
    }
  },
  
  // إعدادات التحسين
  optimizeDeps: {
    include: ['react', 'react-dom', '@supabase/supabase-js']
  },
  
  // إعدادات CSS
  css: {
    devSourcemap: true // خرائط المصدر للتطوير
  },
  
  // قاعدة للملفات العامة
  publicDir: 'public',
  
  // بيئة المتغيرات
  envPrefix: 'VITE_',
})

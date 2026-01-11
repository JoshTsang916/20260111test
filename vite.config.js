import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/20260111test/', // 關鍵修正：告訴 Vite 你的網站不是在根目錄，而是在這個子目錄下
})

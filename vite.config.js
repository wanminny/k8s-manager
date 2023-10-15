import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './env',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  lintOnSave: false, // lint语法检测关闭语法检查，主要针对ESlint里面定义却没有使用出现的报错
  server: {
    host: 'localhost',
    port: 8082,
    hmr: true,
    usePolling: true,
    open: true, // 设置服务启动时是否自动打开浏览器
  },
})

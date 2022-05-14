const path = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin()
  ],
  resolve: {
    alias: {
      // '@':'绝对路径', 若有需要，自行配置其他
      '@': path.join(__dirname, 'src')
    }
  }
})

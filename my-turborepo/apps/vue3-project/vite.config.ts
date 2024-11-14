import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun';

// https://vite.dev/config/
export default defineConfig({
  base: '/sub-vue3/',
  server: {
    port: 5175,
    cors: true,
    origin: 'http://localhost:5175',
  },
  plugins: [
    vue(),
    qiankun('sub-vue3', {
        useDevMode: true
    })
  ],
})

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import qiankun from 'vite-plugin-qiankun';

// https://vite.dev/config/
export default defineConfig({
  base: '/sub-vue/',
  server: {
    port: 5176,
    cors: true,
    origin: 'http://localhost:5176',
  },
  plugins: [
    vue(),
    vueDevTools(),
    qiankun('sub-vue', {
      useDevMode: true
    })
  ],
  // resolve: {
  //   alias: {
  //     '@': fileURLToPath(new URL('./src', import.meta.url))
  //   },
  // },
})

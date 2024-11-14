import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import qiankun from 'vite-plugin-qiankun';

// https://vite.dev/config/
export default defineConfig({
  base: '/sub-react/',
  server: {
    port: 5174,
    cors: true,
    origin: 'http://localhost:5174',
  },
  plugins: [
    react(),
    qiankun('sub-react', {
        useDevMode: true
    })
  ],
})

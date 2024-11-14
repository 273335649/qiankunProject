// vite.config.ts
import { defineConfig } from "file:///D:/song/a_ws_learn/qiankunProject/my-turborepo/node_modules/.pnpm/vite@5.4.11_@types+node@20.16.5/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/song/a_ws_learn/qiankunProject/my-turborepo/node_modules/.pnpm/@vitejs+plugin-vue@5.1.5_vite@5.4.11_@types+node@20.16.5__vue@3.5.12_typescript@5.6.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import qiankun from "file:///D:/song/a_ws_learn/qiankunProject/my-turborepo/node_modules/.pnpm/vite-plugin-qiankun@1.0.15_typescript@5.6.3_vite@5.4.11_@types+node@20.16.5_/node_modules/vite-plugin-qiankun/dist/index.js";
var vite_config_default = defineConfig({
  base: "/sub-vue3/",
  server: {
    port: 5175,
    cors: true,
    origin: "http://localhost:5175"
  },
  plugins: [
    vue(),
    qiankun("sub-vue3", {
      useDevMode: true
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxzb25nXFxcXGFfd3NfbGVhcm5cXFxccWlhbmt1blByb2plY3RcXFxcbXktdHVyYm9yZXBvXFxcXGFwcHNcXFxcdnVlMy1wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxzb25nXFxcXGFfd3NfbGVhcm5cXFxccWlhbmt1blByb2plY3RcXFxcbXktdHVyYm9yZXBvXFxcXGFwcHNcXFxcdnVlMy1wcm9qZWN0XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9zb25nL2Ffd3NfbGVhcm4vcWlhbmt1blByb2plY3QvbXktdHVyYm9yZXBvL2FwcHMvdnVlMy1wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHFpYW5rdW4gZnJvbSAndml0ZS1wbHVnaW4tcWlhbmt1bic7XG5cbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYmFzZTogJy9zdWItdnVlMy8nLFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiA1MTc1LFxuICAgIGNvcnM6IHRydWUsXG4gICAgb3JpZ2luOiAnaHR0cDovL2xvY2FsaG9zdDo1MTc1JyxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIHFpYW5rdW4oJ3N1Yi12dWUzJywge1xuICAgICAgICB1c2VEZXZNb2RlOiB0cnVlXG4gICAgfSlcbiAgXSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdZLFNBQVMsb0JBQW9CO0FBQzdaLE9BQU8sU0FBUztBQUNoQixPQUFPLGFBQWE7QUFHcEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFFBQVEsWUFBWTtBQUFBLE1BQ2hCLFlBQVk7QUFBQSxJQUNoQixDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

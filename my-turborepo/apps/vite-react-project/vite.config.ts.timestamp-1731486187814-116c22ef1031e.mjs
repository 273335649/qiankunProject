// vite.config.ts
import { defineConfig } from "file:///D:/song/a_ws_learn/qiankunProject/my-turborepo/node_modules/.pnpm/vite@5.4.11_@types+node@20.16.5/node_modules/vite/dist/node/index.js";
import react from "file:///D:/song/a_ws_learn/qiankunProject/my-turborepo/node_modules/.pnpm/@vitejs+plugin-react@4.3.3_vite@5.4.11_@types+node@20.16.5_/node_modules/@vitejs/plugin-react/dist/index.mjs";
import qiankun from "file:///D:/song/a_ws_learn/qiankunProject/my-turborepo/node_modules/.pnpm/vite-plugin-qiankun@1.0.15_typescript@5.6.3_vite@5.4.11_@types+node@20.16.5_/node_modules/vite-plugin-qiankun/dist/index.js";
var vite_config_default = defineConfig({
  base: "/sub-react/",
  server: {
    port: 5174,
    cors: true,
    origin: "http://localhost:5174"
  },
  plugins: [
    react(),
    qiankun("sub-react", {
      useDevMode: true
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxzb25nXFxcXGFfd3NfbGVhcm5cXFxccWlhbmt1blByb2plY3RcXFxcbXktdHVyYm9yZXBvXFxcXGFwcHNcXFxcdml0ZS1yZWFjdC1wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxzb25nXFxcXGFfd3NfbGVhcm5cXFxccWlhbmt1blByb2plY3RcXFxcbXktdHVyYm9yZXBvXFxcXGFwcHNcXFxcdml0ZS1yZWFjdC1wcm9qZWN0XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9zb25nL2Ffd3NfbGVhcm4vcWlhbmt1blByb2plY3QvbXktdHVyYm9yZXBvL2FwcHMvdml0ZS1yZWFjdC1wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCBxaWFua3VuIGZyb20gJ3ZpdGUtcGx1Z2luLXFpYW5rdW4nO1xuXG4vLyBodHRwczovL3ZpdGUuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6ICcvc3ViLXJlYWN0LycsXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDUxNzQsXG4gICAgY29yczogdHJ1ZSxcbiAgICBvcmlnaW46ICdodHRwOi8vbG9jYWxob3N0OjUxNzQnLFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBxaWFua3VuKCdzdWItcmVhY3QnLCB7XG4gICAgICAgIHVzZURldk1vZGU6IHRydWVcbiAgICB9KVxuICBdLFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa1osU0FBUyxvQkFBb0I7QUFDL2EsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sYUFBYTtBQUdwQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sUUFBUSxhQUFhO0FBQUEsTUFDakIsWUFBWTtBQUFBLElBQ2hCLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

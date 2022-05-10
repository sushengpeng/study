/*
 * @Autor: flygg123
 * @Date: 2022-04-27 20:13:19
 * @LastEditTime: 2022-05-02 09:01:09
 * @LastEditors: Please set LastEditors
 * @Description:
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// console.log(path.resolve(__dirname, "./src"));
// https://vitejs.dev/config/
export default defineConfig({
  publicDir: "public",
  base: "./",
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: "@import '@/styles/base.scss';"
      },
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
  },
  server: {
    proxy: {
      // 字符串简写写法
      // '/foo': 'http://localhost:4567',
      // 选项写法//
      "^/api": {
        target: "http://localhost:9000/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [react()],
});

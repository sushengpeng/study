import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import type { UserConfig, ConfigEnv } from 'vite'
import { resolve } from "path"
// https://vitejs.dev/config/
export default defineConfig(({ command }: ConfigEnv): UserConfig => {
  console.log(command)
  return {
    root: "modules/test2",
    base: "/",
    envDir: "./env",
    resolve: {
      alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
    },
    plugins: [vue()],
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'index.html'),
          test2: resolve(__dirname, './modules/test2/index.html'),
          test1: resolve(__dirname, './modules/test1/index.html')
        }
      }
    }
  }
})

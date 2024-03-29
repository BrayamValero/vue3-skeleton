import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "Vue3Skeleton",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          Vue: "Vue",
        },
      },
    },
  },
  // Exclude public directory from build
  publicDir: false,
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@components": resolve(__dirname, "./src/components"),
    },
  },
});

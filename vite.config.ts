// vite.config.js
import { format, resolve } from "path";
import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue';
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      name: "swagger-validations-next",
      // the proper extensions will be added
      fileName: (format) => `${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});

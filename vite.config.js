/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/LuroundApp",
  build: {
    outDir: "dist",
  },
  server: {
    historyApiFallback: true,
    port: 3000,
    https: {
      key: "./luroundapp-privateKey.key",
      cert: "./luroundapp.crt",
    },
  },
});

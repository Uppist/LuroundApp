/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  base: "/LuroundApp/",
  build: {
    outDir: "dist",
  },
  server: {
    historyApiFallback: true,
    port: 3000,
    https: true,
  },
});

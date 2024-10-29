/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/LuroundApp/",
  server: {
    port: 3000,
    https: {
      key: "./luroundapp-privateKey.key",
      cert: "./luroundapp.crt",
    },
  },
});

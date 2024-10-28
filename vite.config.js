/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import path from "path";
import fs from "node:fs";

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

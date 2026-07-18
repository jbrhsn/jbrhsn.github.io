import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// Static SPA build for GitHub Pages. Bypasses TanStack Start entirely.
// Uses a separate root (./static) so it doesn't collide with the dev server.
// Usage:  VITE_BASE=/<repo>/ vite build --config vite.static.config.ts
export default defineConfig({
  root: path.resolve(__dirname, "static"),
  base: process.env.VITE_BASE ?? "./",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist-static"),
    emptyOutDir: true,
  },
});

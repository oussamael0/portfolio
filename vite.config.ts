import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // nécessaire pour résoudre le chemin

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // @ pointe vers src/
    },
  },
});
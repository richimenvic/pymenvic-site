import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    emptyOutDir: true,
    outDir: "assets/app",
    lib: {
      entry: "src/main.jsx",
      formats: ["es"],
      fileName: () => "home.bundle.js",
      cssFileName: "home",
    },
  },
});

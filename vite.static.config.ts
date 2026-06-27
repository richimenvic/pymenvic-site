import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
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

import { cpSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join, normalize } from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const staticRoots = ["apps", "assets", "learning", "padelscoregt5", "revit-tools", "support"];

function staticPagesPlugin(): Plugin {
  return {
    name: "pymenvic-static-pages",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = new URL(req.url || "/", "http://localhost");
        const pathname = decodeURIComponent(url.pathname);

        if (pathname === "/") {
          next();
          return;
        }

        const root = server.config.root;
        const normalized = normalize(pathname).replace(/^[/\\]+/, "");
        const candidate = join(root, normalized, "index.html");

        if (!existsSync(candidate)) {
          next();
          return;
        }

        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end(readFileSync(candidate, "utf8"));
      });
    },
    closeBundle() {
      const outDir = "dist";
      mkdirSync(outDir, { recursive: true });

      for (const root of staticRoots) {
        if (!existsSync(root)) {
          continue;
        }

        const target = join(outDir, root);
        mkdirSync(dirname(target), { recursive: true });
        cpSync(root, target, { recursive: true, force: true });
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), staticPagesPlugin()],
});

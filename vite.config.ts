import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Automatically set base path for GitHub Pages deployment
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoName = "portfolio";

export default defineConfig({
  base: isGitHubPages ? `/${repoName}/` : "/",
  server: {
    host: "0.0.0.0", // Compatible with Vercel/local
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});

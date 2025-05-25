import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ command, mode }) => {
  // command === 'serve' for dev, 'build' for production
  return {
    base: command === 'build' ? "/your-repo-name/" : "/",
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react()
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});

// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  root: "src", // indica que el HTML principal está dentro de src/
  build: {
    outDir: "../dist", // el build final se genera fuera de src
  },
});

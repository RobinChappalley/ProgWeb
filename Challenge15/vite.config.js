import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  build: {
    target: "es6", //précise la cible du language
    emptyOutDir: true, //vide le dossier dist et recompile tout
    outDir: "../public", //chemin relaitf pour dire où le projet doit se builder
  },
});

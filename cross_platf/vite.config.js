import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',      // <--- Вказуємо, що index.html лежить тут
  build: {
    outDir: '../dist',
    minify: false,
    emptyOutDir: true,
  },
});
import { defineConfig } from 'vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import htmlPurge from 'vite-plugin-purgecss';

var __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '/acme-blog-landing',
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../build',
    emptyOutDir: true,

    rollupOptions: {
      input: {
        main: resolve(__dirname, './src/index.html'),
        blog: resolve(__dirname, './src/blog/index.html'),
      },
    },
  },
  plugins: [htmlPurge()],
});

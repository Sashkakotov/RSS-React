/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: './dist/client',
    rollupOptions: {
      input: resolve('./src/entry-server.tsx'),
      output: {
        entryFileNames: '[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});

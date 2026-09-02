import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact.html'),
        canopy: resolve(__dirname, 'canopy.html'),
        meridianFreight: resolve(__dirname, 'meridian-freight.html'),
        folio: resolve(__dirname, 'folio.html'),
      },
    },
  },
});

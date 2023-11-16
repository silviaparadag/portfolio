import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
    sourcemap: true,
  },
  plugins: [react()],
  base: 'https://silviaparadag.github.io/portfolio/',

});

//base: 'https://silviaparadag.github.io/portfolio/',

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  preview: {
    host: true,
    port: process.env.PORT || 4173, // 👈 allows Render to assign dynamic ports
    allowedHosts: ['.onrender.com'], // 👈 use wildcard to cover subdomains
  },
  build: {
    outDir: 'dist', // 👈 make sure it's building to `dist`
  },
});

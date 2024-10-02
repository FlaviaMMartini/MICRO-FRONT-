import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  server: {
    port: 5179, 
    strictPort: true, 
  },
  plugins: [
    react(),
    federation({
      name: 'cards',
      filename: 'remoteEntry.js',
      exposes: {
        './Cards': './src/Cards.jsx',
      },
    }),
  ],
  build: {
    target: 'esnext',
  },
});

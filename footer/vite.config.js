import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  server: {
    port: 5178, // Defina a porta desejada aqui
    strictPort: true, // Garante que a porta especificada seja usada, caso contrário, o Vite irá falhar
  },
  plugins: [
    react(),
    federation({
      name: 'footer',
      filename: 'remoteEntry.js',
      exposes: {
        './Footer': './src/components/Footer.jsx',
      },
    }),
  ],
  build: {
    target: 'esnext',
  },
});


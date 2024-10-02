import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  server: {
    port: 5177, // Defina a porta desejada aqui
    strictPort: true, // Garante que a porta especificada seja usada, caso contrário, o Vite irá falhar
  },
  plugins: [
    react(),
    federation({
      remotes: {
        cards: 'http://localhost:5179/remoteEntry.js',
      },
      name: 'header',
      filename: 'remoteEntry.js', // Este deve ser o nome do arquivo que será exposto
      exposes: {
        './Header': './src/components/Header.jsx', // Certifique-se de que o caminho está correto
      },
    }),
  ],
  build: {
    target: 'esnext',
  },
});


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app_central',
      remotes: {
        header: 'http://localhost:5177/remoteEntry.js',
        footer: 'http://localhost:5178/remoteEntry.js',
        cards: 'http://localhost:5179/remoteEntry.js',
      },
    }),
  ],
});

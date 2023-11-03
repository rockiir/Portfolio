import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  build: {
    target: 'esnext',
  },

  plugins: [react],
  base:"/Portfolio",
});

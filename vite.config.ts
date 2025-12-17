import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import path from "node:path";

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    svgr(),
  ],
  resolve: {
    alias: {
      src: path.resolve('src/'),
    },
  },
})

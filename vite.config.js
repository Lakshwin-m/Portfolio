import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'framer-motion',
        'react-icons/fa',
        'react-icons/gi',
        'react-icons/ri',
        'react-icons/io5',
        'react-icons/si'
      ], // Add specified modules as external
    },
  },
});

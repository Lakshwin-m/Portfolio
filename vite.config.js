import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({https://github.com/Lakshwin-m/Portfolio/blob/main/vite.config.js
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['framer-motion','react-icons/fa','react-icons/gi','react-icons/ri','react-icons/io5','react-icons/si'], // Add 'framer-motion' as an external module
    },
  },
})

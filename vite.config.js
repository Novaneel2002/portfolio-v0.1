import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio-v1.0/",
  optimizeDeps: {
    include: ['react-bootstrap']  // Do not include CSS files here
  }
})

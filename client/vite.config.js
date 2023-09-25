import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Bind to all network interfaces,
  },
  build: {
    chunkSizeWarningLimit: 1000, // Raise the limit to 1000KB (1MB)
  },
})


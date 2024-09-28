import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/TODO-React-Context-API/10_TODO_V3/",
  plugins: [react()],
  build: {
    outDir: 'dist/10_TODO_V3', // specify the output directory
  },
})

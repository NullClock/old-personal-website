// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Example plugin for React

export default defineConfig({
  // 1. Plugins: Framework-specific integrations (React, Vue, Svelte, etc.)
  plugins: [react()],
  
  // 2. Base URL: Useful if your app is hosted in a subdirectory (e.g., github.io/my-app/)
  base: '/',

  server: {
    "allowedHosts": ["4helio.xyz", "vite-live.memblu.us.to"]
  },
host: '0.0.0.0',
    port: 5173
})

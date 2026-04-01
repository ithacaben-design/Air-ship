import { defineConfig } from 'vite';

export default defineConfig({
  // This 'base' MUST match your GitHub repository name exactly!
  // It ensures assets (like your airship.jpg and background.jpg) load correctly on GitHub Pages.
  base: '/Air-ship/',

  build: {
    // Specifies the output directory for your production build
    outDir: 'dist',
    // Places your images and CSS into an 'assets' folder
    assetsDir: 'assets',
    // Clears the output directory before building
    emptyOutDir: true,
  },

  server: {
    // Automatically opens the game in your browser when you run 'npm run dev'
    open: true,
    // Standard dev port
    port: 3000,
  }
});

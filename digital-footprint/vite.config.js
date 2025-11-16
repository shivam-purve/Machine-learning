// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy' // NEW

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [
    react(),
    // COPY the popup/options HTML (and any other static html) to the exact dist path we want
    viteStaticCopy({
      targets: [
        { src: 'src/popup/index.html', dest: 'popup' },
        { src: 'src/options/index.html', dest: 'options' }
      ]
    })
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        // keys with slash produce the folder structure in dist for JS chunks
        'popup/index': resolve(__dirname, 'src/popup/index.html'),
        'options/index': resolve(__dirname, 'src/options/index.html'),
        'background/background': resolve(__dirname, 'src/background/background.js'),
        'content/contentScript': resolve(__dirname, 'src/content/contentScript.js'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  publicDir: 'public'
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const SITE_URL = process.env.VITE_SITE_URL || ''

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        return html.replace(/__SITE_URL__/g, SITE_URL)
      }
    }
  ],
  base: process.env.NODE_ENV === 'production' ? '/builder/' : '/',
  server: {
    port: 3000,
    open: true
  }
})

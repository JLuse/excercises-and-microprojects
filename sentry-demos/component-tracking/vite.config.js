import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "jluse-free-org",
    project: "component-tracking"
  }), sentryVitePlugin({
    org: "jluse-free-org",
    project: "component-tracking"
  })],

  build: {
    sourcemap: true
  }
})
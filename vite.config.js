import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        entryFileNames: "static/mysite/js/mysite.js",
        chunkFileNames: "static/mysite/js/mysite.chunk.js",
        assetFileNames: (assetsInfo) => {
          let extType = assetsInfo.name.split(".").pop();
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|svg/i.test(extType)) {
            extType = "img";
          }
          if (extType === "css") {
            return `static/mysite/css/style.css`;
          }
          return `static/mysite/${extType}/[name][extname]`;
        },
      },
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});

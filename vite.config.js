import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    assetsInlineLimit: 2048000,
    rollupOptions: {
      output: {
        entryFileNames: "static/js/mysite.js",
        chunkFileNames: "static/js/mysite.chunk.js",
        assetFileNames: (assetsInfo) => {
          let extType = assetsInfo.name.split(".").pop();
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|svg/i.test(extType)) {
            extType = "img";
          }
          if (extType === "css") {
            return `static/css/style.css`;
          }
          return `static/${extType}/mysite-[name][extname]`;
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

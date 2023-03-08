import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  // base: "https://cdn.jsdelivr.net/gh/riefer02/van-chat/dist/",
  build: {
    rollupOptions: {
      input: {
        app: "./src/main.tsx",
      },
      output: {
        entryFileNames: "chat-bot.js", // Specify the name of the entry file
        chunkFileNames: "chat-bot.js", // Specify the name of the chunk file
      },
    },
    cssCodeSplit: false,
  },
});

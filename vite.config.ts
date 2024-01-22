import { defineConfig, PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

const rewriteSlashToIndexHtml = (): PluginOption => {
  return {
    name: 'rewrite-slash-to-index-html',
    apply: 'serve',
    enforce: 'post',
    configureServer(server) {
      // rewrite / as index.html
      server.middlewares.use('/', (req, _, next) => {
        if (req.url === '/') {
          req.url = '/index.html';
        }
        next();
      });
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), rewriteSlashToIndexHtml()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
});

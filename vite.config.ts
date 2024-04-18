import { defineConfig } from 'vite';
import monkey, { cdn } from 'vite-plugin-monkey';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        icon: 'https://vitejs.dev/logo.svg',
        namespace: 'npm/vite-plugin-monkey',
        license: 'MIT',
        match: ['https://www.youtube.com/*'],
        description: {
          "ja": "Youtubeのコメント返信欄を非表示にする"
        }
      },
    }),
  ],
});

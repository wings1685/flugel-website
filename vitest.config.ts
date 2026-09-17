import { defineConfig } from 'vitest/config';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
	solidPlugin(),
	tsconfigPaths()
],
  test: {
    // 💡 テスト環境をブラウザに擬似的に合わせるため「jsdom」を指定します
    environment: 'jsdom',
    // 💡 Solidのリアクティビティ（Signalなど）をテストで正常に動かすための設定
    globals: true,
    deps: {
      optimizer: {
        web: {
          include: ['@solidjs/router', '@solidjs/testing-library'],
        },
      },
    },
  },
});

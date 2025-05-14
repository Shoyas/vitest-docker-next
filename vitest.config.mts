import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    coverage: {
      include:  ['test/**/*.test.{ts,tsx,js,jsx}'],
      exclude: ['**/node_modules/**', '**/dist/**', '**/cypress/**', '**/.{idea,git,cache,output,temp}/**', '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*'],
    },
    environmentMatchGlobs: [
      ['**/*.test.tsx', 'jsdom'],
      ['test/**/*.test.ts', 'jsdom'],
    ],
    setupFiles: './src/test/config/vitest.setup.ts',
  },
});
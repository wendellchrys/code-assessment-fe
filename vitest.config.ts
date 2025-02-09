import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config.ts';

const vitestConfig = defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts',
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      all: true,
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'node_modules',
        'dist',
        '**/*.d.ts',
        '**/*.types.ts',
        '**/test/**',
        '**/*.spec.ts',
        '**/*.test.ts',
        'vite.config.ts',
        'vitest.config.ts',
      ],
    },
  },
});

export default mergeConfig(viteConfig, vitestConfig);

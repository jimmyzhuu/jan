import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: ['./core', './web-app'],
    pool: 'forks',
    poolOptions: {
      forks: {
        maxForks: 1,
        minForks: 1,
        isolate: true,
        execArgv: ['--max-old-space-size=4096'],
      },
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        'docs',
        '**/*/dist',
        'node_modules',
        'src/**/*.test.ts',
        'src/**/*.test.tsx',
        'src/test/**/*',
        'src-tauri',
        'extensions',
      ],
    },
  },
})

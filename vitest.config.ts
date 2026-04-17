import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: ['./core', './web-app'],
    pool: 'vmForks',
    poolOptions: {
      vmForks: {
        maxForks: 2,
        minForks: 1,
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

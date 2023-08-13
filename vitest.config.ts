import type { UserConfigExport } from 'vitest/config'

const config: UserConfigExport = {
  test: {
    alias: {
      '@': 'src',
    },
    testTimeout: 60 * 1000,
  },
}

export default config

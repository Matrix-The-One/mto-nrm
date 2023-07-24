// @ts-check
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'
import { baseConfig } from './rollup.config.base.js'

export default defineConfig([
  {
    ...baseConfig,
    output: {
      dir: 'dist/es',
      format: 'es',
      exports: 'named',
      preserveModules: true,
      banner: '#! /usr/bin/env node',
    },
    plugins: [
      ...baseConfig.plugins,
      typescript({
        outDir: 'dist/es',
        noEmit: true,
        declaration: true,
      }),
    ],
  },
  {
    ...baseConfig,
    output: {
      dir: 'dist/lib',
      format: 'cjs',
      exports: 'named',
      preserveModules: true,
      banner: '#! /usr/bin/env node',
    },
    plugins: [
      ...baseConfig.plugins,
      typescript({
        outDir: 'dist/lib',
        noEmit: true,
        declaration: true,
      }),
    ],
  },
])

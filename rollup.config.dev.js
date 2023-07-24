// @ts-check
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'
import serve from 'rollup-plugin-serve'
import { baseConfig } from './rollup.config.base.js'

export default defineConfig({
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
    serve('dist'),
  ],
})

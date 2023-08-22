// @ts-check
import alias from '@rollup/plugin-alias'
import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'
import merge from 'deepmerge'
import path from 'path'
import { defineConfig } from 'rollup'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const baseConfig = defineConfig({
  input: 'src/index.ts',
  output: {
    exports: 'named',
    preserveModules: true,
    banner: '#! /usr/bin/env node',
  },
  plugins: [
    json(),
    alias({
      entries: [{ find: '@', replacement: path.join(__dirname, 'src') }],
    }),
  ],
})

export default defineConfig([
  merge(baseConfig, {
    output: { dir: 'es', format: 'es' },
    plugins: [typescript({ outDir: 'es' })],
  }),
  merge(baseConfig, {
    output: { dir: 'lib', format: 'cjs' },
    plugins: [typescript({ outDir: 'lib' })],
  }),
])

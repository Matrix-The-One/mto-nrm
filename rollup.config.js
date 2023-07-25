// @ts-check
import alias from '@rollup/plugin-alias'
import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'
import merge from 'deepmerge'
import { dirname } from 'path'
import path from 'path'
import { defineConfig } from 'rollup'
import copy from 'rollup-plugin-copy'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

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
    copy({
      targets: [
        {
          src: ['package.json', 'LICENSE', 'README.md', 'README.en-US.md', 'CHANGELOG.md'],
          dest: 'dist',
        },
      ],
    }),
  ],
})

export default defineConfig([
  merge(baseConfig, {
    output: { dir: 'dist/es', format: 'es' },
    plugins: [typescript({ outDir: 'dist/es' })],
  }),
  merge(baseConfig, {
    output: { dir: 'dist/lib', format: 'cjs' },
    plugins: [typescript({ outDir: 'dist/lib' })],
  }),
])

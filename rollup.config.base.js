// @ts-check
import alias from '@rollup/plugin-alias'
import json from '@rollup/plugin-json'
import { dirname } from 'path'
import path from 'path'
import copy from 'rollup-plugin-copy'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const baseConfig = {
  input: 'src/index.ts',
  plugins: [
    json(),
    alias({
      entries: [{ find: '@', replacement: path.join(__dirname, 'src') }],
    }),
    copy({
      targets: [
        {
          src: 'package.json',
          dest: 'dist',
        },
      ],
    }),
  ],
}

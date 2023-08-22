/**
 * @link https://github.com/pnpm/pnpm/blob/main/__utils__/get-release-text/src/main.ts
 */
import fs from 'fs-extra'
import { toString } from 'mdast-util-to-string'
import path from 'path'
import remarkParse from 'remark-parse'
import remarkStringify from 'remark-stringify'
import { unified } from 'unified'
import { fileURLToPath } from 'url'

export const BumpLevels = {
  dep: 0,
  patch: 1,
  minor: 2,
  major: 3,
} as const

const dirname = path.dirname(fileURLToPath(import.meta.url))
const rootPath = path.join(dirname, '../')
const changelog = fs.readFileSync(path.join(rootPath, 'CHANGELOG.md'), 'utf8')
const packageJson = JSON.parse(fs.readFileSync(path.join(rootPath, 'package.json'), 'utf8'))
const release = getChangelogEntry(changelog, packageJson.version)
fs.writeFileSync(path.join(rootPath, 'RELEASE.md'), release.content)

function getChangelogEntry(changelog: string, version: string) {
  const ast = unified()
    .use(remarkParse as any)
    .parse(changelog)

  let highestLevel: number = BumpLevels.dep

  const nodes = ast['children'] as any[]
  let headingStartInfo:
    | {
        index: number
        depth: number
      }
    | undefined
  let endIndex: number | undefined

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i]
    if (node.type === 'heading') {
      const stringified: string = toString(node)
      const match = stringified.toLowerCase().match(/(major|minor|patch)/)
      if (match !== null) {
        const level = BumpLevels[match[0] as 'major' | 'minor' | 'patch']
        highestLevel = Math.max(level, highestLevel)
      }
      if (headingStartInfo === undefined && stringified === version) {
        headingStartInfo = {
          index: i,
          depth: node.depth,
        }
        continue
      }
      if (
        endIndex === undefined &&
        headingStartInfo !== undefined &&
        headingStartInfo.depth === node.depth
      ) {
        endIndex = i
        break
      }
    }
  }
  if (headingStartInfo != null) {
    ast['children'] = (ast['children'] as any).slice(headingStartInfo.index + 1, endIndex)
  }
  return {
    content: `${unified()
      .use(remarkStringify as any)
      .stringify(ast)}`,
    highestLevel,
  }
}

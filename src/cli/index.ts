import { program } from 'commander'
import fs from 'fs-extra'
import path from 'path'
import { ls, use } from '@/core'
import registries from '@/registries.json'

const init = async () => {
  const packageJson = await fs.readJSON(path.join(process.cwd(), 'package.json'))
  program
    .name(packageJson.name)
    .description(packageJson.description)
    .version(`v${packageJson.version}`)

  program.command('ls').description('interactive selection registry').action(ls)

  const registriesNames = registries.map((i) => i.name).join(' | ')
  program
    .command('use')
    .description('command selection registry')
    .argument('<string>', registriesNames)
    .action(use)

  program.parse(process.argv)
}

export default init

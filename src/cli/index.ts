import { program } from 'commander'
import fs from 'fs-extra'
import path from 'path'
import { get, home, ls, set, use, view } from '@/core'
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

  program.command('get').description('get registry').action(get)

  program
    .command('set')
    .description('set registry')
    .argument('<string>', 'registry source')
    .action(set)

  program
    .command('home')
    .description('view registry home')
    .argument('<string>', 'registry name')
    .action(home)

  program
    .command('view')
    .description('view registry')
    .argument('<string>', 'registry name')
    .action(view)

  program.parse(process.argv)
}

export default init

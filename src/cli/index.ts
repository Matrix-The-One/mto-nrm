import { program } from 'commander'
import fs from 'fs-extra'
import path from 'path'
import { get, home, ls, set, use, view } from '@/core'
import { getRegistryNames } from '@/utils'

const init = async () => {
  const packageJson = await fs.readJSON(path.join(process.cwd(), 'package.json'))
  const registriesNames = getRegistryNames().join(' | ')

  program
    .name(packageJson.name)
    .description(packageJson.description)
    .version(`v${packageJson.version}`)

  program.command('ls').description('interactive selection registry').action(ls)

  program
    .command('use')
    .description('command selection registry')
    .argument('<string>', registriesNames)
    .action(use)

  program
    .command('get')
    .description('get registry')
    .argument('[string]', registriesNames)
    .action(get)

  program
    .command('set')
    .description('set registry')
    .argument('<string>', 'registry source')
    .action(set)

  program
    .command('home')
    .description('view registry home')
    .argument('[string]', registriesNames)
    .action(home)

  program
    .command('view')
    .description('view registry')
    .argument('[string]', registriesNames)
    .action(view)

  program.parse(process.argv)
}

export default init

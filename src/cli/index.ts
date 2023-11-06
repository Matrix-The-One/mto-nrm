import { program } from 'commander'
import fs from 'fs-extra'
import path from 'path'
import { add, clear, del, get, home, ls, set, test, update, use, view } from '@/core'
import { getRegistryNames } from '@/utils'

const execOption: [string, string, string] = ['-e, --exec <string>', 'executable program', 'npm']

const voidFunc = (func: (...args: any[]) => any) => {
  return (...args: any[]) => {
    func(...args)
  }
}

const init = async () => {
  const packageJson = await fs.readJSON(path.join(process.cwd(), 'package.json'))
  const registriesNames = await getRegistryNames()
  const namesString = registriesNames.join(' | ')

  program
    .name(packageJson.name)
    .description(packageJson.description)
    .version(`v${packageJson.version as string}`)

  program
    .command('ls')
    .description('interactive selection registry')
    .option(...execOption)
    .action(voidFunc(ls))

  program
    .command('use')
    .description('command selection registry')
    .argument('<string>', namesString)
    .option(...execOption)
    .action(voidFunc(use))

  program
    .command('get')
    .description('get registry')
    .argument('[string]', namesString)
    .option(...execOption)
    .action(voidFunc(get))

  program
    .command('set')
    .description('set registry')
    .argument('<string>', 'registry source')
    .option(...execOption)
    .action(set)

  program
    .command('home')
    .description('view registry home')
    .argument('[string]', namesString)
    .option(...execOption)
    .action(voidFunc(home))

  program
    .command('view')
    .description('view registry')
    .argument('[string]', namesString)
    .option(...execOption)
    .action(voidFunc(view))

  program
    .command('add')
    .description('add registry')
    .argument('<name>', 'registry name')
    .argument('<url>', 'registry url')
    .argument('[home]', 'registry home url')
    .action(voidFunc(add))

  program
    .command('update')
    .description('update registry')
    .argument('<name>', 'registry name')
    .option('-n, --name <string>', 'update registry name')
    .option('-u, --url <string>', 'update registry url')
    .option('-h, --home <string>', 'update registry home url')
    .action(voidFunc(update))

  program
    .command('del')
    .description('delete registry')
    .argument('<name>', 'registry name')
    .action(voidFunc(del))

  program.command('clear').description('clear registry').action(voidFunc(clear))

  program
    .command('test')
    .description('test registry')
    .argument('[nameOrUrl]', 'registry name or url')
    .option('-t, --timeout <number>', 'timeout')
    .action(voidFunc(test))

  program.parse(process.argv)
}

export default init

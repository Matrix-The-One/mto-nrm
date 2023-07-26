import chalk from 'chalk'
import { getRegistry } from '@/utils'

export const get = async () => {
  const registry = await getRegistry()
  console.log(chalk.green(registry))
}

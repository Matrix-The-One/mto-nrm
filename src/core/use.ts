import chalk from 'chalk'
import registries from '@/registries.json'
import { setRegistry } from '@/utils'

export const use = async (registryName: string) => {
  const registryNames = registries.map((i) => i.name)
  if (registryNames.includes(registryName)) {
    const registry = registries.find((i) => i.name === registryName)?.registry
    await setRegistry(registry!)
  } else {
    console.log(chalk.red(`Please select from [${registryNames}]`))
  }
}

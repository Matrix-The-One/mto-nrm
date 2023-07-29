import registries from '@/registries.json'
import { getRegistry, getRegistryNames, logError, logLink } from '@/utils'

/**
 * @name 获取当前registry的home
 */
export const home = async (registryName?: string) => {
  let home: string | undefined

  if (registryName) {
    home = registries.find((i) => i.name === registryName)?.home
  } else {
    const registry = await getRegistry()
    home = registries.find((i) => i.registry === registry)?.home
  }

  if (home) return logLink(home)

  logError(`Please select from [${getRegistryNames()}]`)
}

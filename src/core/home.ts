import registries from '@/registries.json'
import { getRegistry, getRegistryNames, isLib, logError, logLink } from '@/utils'

/**
 * @name 查看home
 */
export const home = async (registryName?: string, option: ExecOptionType = {}) => {
  let home: string | undefined

  if (registryName) {
    home = registries.find((i) => i.name === registryName)?.home

    if (!home) {
      logError(`Please select from [${getRegistryNames().toString()}]`)
      return false
    }
  } else {
    const registry = await getRegistry(option.exec)
    home = registries.find((i) => i.registry === registry)?.home
  }

  if (isLib()) return home

  logLink(home)
}

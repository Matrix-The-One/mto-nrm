import registries from '@/registries.json'
import { getRegistryNames, logError, setRegistry } from '@/utils'

/**
 * @name 命令式设置registry
 */
export const use = async (registryName: string) => {
  const registry = registries.find((i) => i.name === registryName)?.registry

  if (registry) {
    await setRegistry(registry)
  } else {
    logError(`Please select from [${getRegistryNames().toString()}]`)
    return false
  }
}

import registries from '@/registries.json'
import { getRegistryNames, log, logError } from '@/utils'

/**
 * @name 查看当前registry信息
 */
export const view = async (registryName: string) => {
  const registry = registries.find((i) => i.name === registryName)

  if (registry) {
    log('cyan', JSON.stringify(registry, void 0, 2))
  } else {
    logError(`Please select from [${getRegistryNames()}]`)
  }
}

import registries from '@/registries.json'
import { getRegistry, getRegistryNames, log, logError } from '@/utils'

/**
 * @name 查看registry信息
 */
export const view = async (registryName?: string) => {
  let registryInfo: Registry | undefined

  if (registryName) {
    registryInfo = registries.find((i) => i.name === registryName)
    if (!registryInfo) {
      logError(`Please select from [${getRegistryNames()}]`)
      return
    }
  } else {
    const registry = await getRegistry()
    registryInfo = registries.find((i) => i.registry === registry)
  }

  log('cyan', JSON.stringify(registryInfo, void 0, 2))
}

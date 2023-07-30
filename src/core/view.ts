import registries from '@/registries.json'
import { getRegistry, getRegistryNames, isLib, log, logError } from '@/utils'

/**
 * @name 查看registry信息
 */
export const view = async (registryName?: string) => {
  let registryInfo: RegistryInfo | undefined

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

  if (isLib) return registryInfo

  log('cyan', JSON.stringify(registryInfo, void 0, 2))
}

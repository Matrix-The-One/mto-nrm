import registries from '@/registries.json'
import { getRegistry, getRegistryNames, log, logError } from '@/utils'

/**
 * @name 查看当前registry信息
 */
export const view = async (registryName: string) => {
  let registryInfo: Registry | undefined

  if (registryName) {
    registryInfo = registries.find((i) => i.name === registryName)
  } else {
    const registry = await getRegistry()
    registryInfo = registries.find((i) => i.registry === registry)
  }

  if (registryInfo) return log('cyan', JSON.stringify(registryInfo, void 0, 2))

  logError(`Please select from [${getRegistryNames()}]`)
}

import { isLib } from '@/config'
import { getRegistries, getRegistry, getRegistryNames, log, logError } from '@/utils'

/**
 * @name 查看registry信息
 */
export const view = async (name?: string, option: ExecOptionType = {}) => {
  let registryInfo: RegistryInfo | undefined
  const registries = await getRegistries()

  if (name) {
    registryInfo = registries.find((i) => i.name === name)

    if (!registryInfo) {
      const registryNames = await getRegistryNames()
      logError(`Please select from [${registryNames.toString()}]`)
      return false
    }
  } else {
    const registry = await getRegistry(option.exec)
    registryInfo = registries.find((i) => i.registry === registry)
  }

  if (isLib()) return registryInfo

  log(JSON.stringify(registryInfo, void 0, 2), 'cyan')
}

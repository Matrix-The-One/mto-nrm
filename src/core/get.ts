import { isLib } from '@/config'
import { getRegistries, getRegistry, getRegistryNames, logError, logLink } from '@/utils'

/**
 * @name 获取registry
 */
export const get = async (name?: string, option: ExecOptionType = {}) => {
  let registry: string | undefined

  if (name) {
    const registries = await getRegistries()
    registry = registries.find((i) => i.name === name)?.registry

    if (!registry) {
      const registryNames = await getRegistryNames()
      logError(`Please select from [${registryNames.toString()}]`)
      return false
    }
  } else {
    registry = await getRegistry(option.exec)
  }

  if (isLib()) return registry

  logLink(registry)
}

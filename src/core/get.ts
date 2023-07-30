import registries from '@/registries.json'
import { getRegistry, getRegistryNames, isLib, logError, logLink } from '@/utils'

/**
 * @name 获取registry
 */
export const get = async (registryName?: string) => {
  let registry: string | undefined

  if (registryName) {
    registry = registries.find((i) => i.name === registryName)?.home

    if (!registry) {
      logError(`Please select from [${getRegistryNames()}]`)
      return
    }
  } else {
    registry = await getRegistry()
  }

  if (isLib) return registry

  logLink(registry)
}

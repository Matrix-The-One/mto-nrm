import { isLib } from '@/config'
import { getRegistries, getRegistry, logError, logLink } from '@/utils'

/**
 * @name 获取registry
 */
export const get = async (name?: string, option: ExecOptionType = {}) => {
  let registry: string | undefined

  if (name) {
    const registries = await getRegistries()
    registry = registries.find((i) => i.name === name)?.registry

    if (!registry) {
      logError(`No registry named ${name} found`)
      return false
    }
  } else {
    registry = await getRegistry(option.exec)
  }

  if (isLib()) return registry

  logLink(registry)
}

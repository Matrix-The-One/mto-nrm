import { isLib } from '@/config'
import { getRegistries, getRegistry, logError, logLink } from '@/utils'

/**
 * @name 查看home
 */
export const home = async (name?: string, option: ExecOptionType = {}) => {
  let home: string | undefined
  const registries = await getRegistries()

  if (name) {
    home = registries.find((i) => i.name === name)?.home

    if (!home) {
      logError(`No registry named ${name} found`)
      return false
    }
  } else {
    const registry = await getRegistry(option.exec)
    home = registries.find((i) => i.registry === registry)?.home
  }

  if (isLib()) return home

  logLink(home)
}

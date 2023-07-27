import registries from '@/registries.json'
import { getRegistryNames, logError, logLink } from '@/utils'

/**
 * @name 获取当前registry的home
 */
export const home = async (registryName: string) => {
  const home = registries.find((i) => i.name === registryName)?.home

  if (home) {
    logLink(home)
  } else {
    logError(`Please select from [${getRegistryNames()}]`)
  }
}

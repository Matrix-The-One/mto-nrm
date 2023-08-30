import { getRegistries, getRegistryNames, logError, setRegistry } from '@/utils'

/**
 * @name 命令式设置registry
 */
export const use = async (name: string, option: ExecOptionType = {}) => {
  const registries = await getRegistries()
  const registry = registries.find((i) => i.name === name)?.registry

  if (registry) {
    await setRegistry(registry, option.exec)
  } else {
    const registryNames = await getRegistryNames()
    logError(`Please select from [${registryNames.toString()}]`)
    return false
  }
}

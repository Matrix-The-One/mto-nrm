import { getRegistries, logError, setRegistry } from '@/utils'

/**
 * @name 命令式设置registry
 */
export const use = async (name: string, option: ExecOptionType = {}) => {
  const registries = await getRegistries()
  const registry = registries.find((i) => i.name === name)?.registry

  if (registry) {
    await setRegistry(registry, option.exec)
  } else {
    logError(`No registry named ${name} found`)
    return false
  }
}

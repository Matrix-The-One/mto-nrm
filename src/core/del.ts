import settledRegistries from '@/registries.json'
import { deleteRegistry, logError } from '@/utils'

/**
 * @name 删除registry
 */
export const del = async (name: string) => {
  const settledNames = settledRegistries.map((i) => i.name)
  if (settledNames.includes(name)) {
    logError(`Do not delete the registry of [${settledNames.toString()}]`)
    return false
  }

  await deleteRegistry(name)
}

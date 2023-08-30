import settledRegistries from '@/registries.json'
import { getRegistries, isUrl, logError, updateRegistry } from '@/utils'

type Option = {
  name?: string
  url?: string
  home?: string
}

/**
 * @name 更新registry
 */
export const update = async (name: string, { name: updateName, url: registry, home }: Option) => {
  const settledNames = settledRegistries.map((i) => i.name)
  if (settledNames.includes(name)) {
    logError(`Do not change the registry of [${settledNames.toString()}]`)
    return false
  }

  if ((!!registry && !isUrl(registry)) || (!!home && !isUrl(home))) {
    logError(`Must be full url with "http://"`)
    return false
  }

  const registries = await getRegistries()
  const exists = registries.some((i) => i.name === name)

  if (!exists) {
    logError(`There is no registry named ${name}`)
    return false
  }

  await updateRegistry(name, { name: updateName, registry, home })
}

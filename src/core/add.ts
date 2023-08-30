import { addRegistry, getRegistries, isUrl, logError } from '@/utils'

/**
 * @name 增加registry
 */
export const add = async (name: string, registry: string, home?: string) => {
  if (!isUrl(registry) || (!!home && !isUrl(home))) {
    logError(`Must be full url with "http://"`)
    return false
  }

  const registries = await getRegistries()
  const exists = registries.some((i) => i.name === name)

  if (exists) {
    logError(`There is already a registry named ${name}`)
    return false
  }

  await addRegistry({ name, home: home!, registry })
}

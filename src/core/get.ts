import { getRegistry, logLink } from '@/utils'

/**
 * @name 获取当前registry
 */
export const get = async () => {
  const registry = await getRegistry()
  logLink(registry)
}

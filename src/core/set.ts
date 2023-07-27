import { setRegistry } from '@/utils'

/**
 * @name 设置registry
 */
export const set = async (registry: string) => {
  await setRegistry(registry)
}

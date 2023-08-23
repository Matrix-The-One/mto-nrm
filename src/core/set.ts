import { setRegistry } from '@/utils'

/**
 * @name 设置registry
 */
export const set = async (registry: string, option: ExecOptionType = {}) => {
  await setRegistry(registry, option.exec)
}

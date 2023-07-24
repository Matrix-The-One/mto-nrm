import { spawnAsync } from './spawnAsync'

/**
 * @name 获取registry
 */
export const getRegistry = async () => {
  const registry = await spawnAsync('npm', ['config', 'get', 'registry'])
  return registry
}

/**
 * @name 设置registry
 */
export const setRegistry = async (registry: string) => {
  await spawnAsync('npm', ['config', 'set', 'registry', registry])
}

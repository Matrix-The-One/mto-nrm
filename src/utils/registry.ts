import { $ } from 'execa'
import registries from '@/registries.json'

/**
 * @name 获取registry
 */
export const getRegistry = async () => {
  const { stdout } = await $`npm config get registry`
  return stdout
}

/**
 * @name 设置registry
 */
export const setRegistry = async (registry: string) => {
  await $`npm config set registry ${registry}`
}

/**
 * @name 获取registry名称集合
 */
export const getRegistryNames = () => {
  return registries.map((i) => i.name)
}

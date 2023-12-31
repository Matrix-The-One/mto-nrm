import { $ } from 'execa'
import registries from '@/registries.json'
import { getMtonrmrcRegistries } from './mtonrmrc'

/**
 * @name 获取registry
 */
export const getRegistry = async (exec: string = 'npm') => {
  const { stdout } = await $`${exec} config get registry`
  return stdout
}

/**
 * @name 设置registry
 */
export const setRegistry = async (registry: string, exec: string = 'npm') => {
  await $`${exec} config set registry ${registry}`
}

/**
 * @name 获取registries
 */
export const getRegistries = async () => {
  const configRegistries = await getMtonrmrcRegistries()
  return registries.concat(configRegistries)
}

/**
 * @name 获取registry名称集合
 */
export const getRegistryNames = async () => {
  const registries = await getRegistries()
  return registries.map((i) => i.name)
}

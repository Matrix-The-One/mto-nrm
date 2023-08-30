import { $ } from 'execa'
import fs from 'fs-extra'
import path from 'path'
import { config, isLib } from '@/config'

/**
 * @name 获取mtonrmrc路径
 */
export const getMtonrmrcPath = async () => {
  const { stdout: npmConfigPath } = await $`npm config get userconfig`
  const mtonrmrcPath = path.join(path.dirname(npmConfigPath), '.mtonrmrc')
  return mtonrmrcPath
}

/**
 * @name 获取mtonrmrc中的registries
 */
export const getMtonrmrcRegistries = async () => {
  if (isLib()) {
    if (typeof config.getRegistry !== 'function') {
      throw new Error('getRegistry is not a function')
    }
    const registries = await config.getRegistry()
    return registries ?? []
  }

  const mtonrmrcPath = await getMtonrmrcPath()
  const exists = await fs.exists(mtonrmrcPath)
  if (!exists) {
    await fs.writeFile(mtonrmrcPath, '[]')
  }
  const registries = await fs.readJSON(mtonrmrcPath)
  return registries as RegistryInfo[]
}

/**
 * @name 设置config中的registries
 */
export const setMtonrmrcRegistries = async (registries: RegistryInfo[] = []) => {
  if (isLib()) {
    if (typeof config.setRegistry !== 'function') {
      throw new Error('setRegistry is not a function')
    }
    await config.setRegistry(registries)
    return
  }

  const mtonrmrcPath = await getMtonrmrcPath()
  await fs.writeFile(mtonrmrcPath, JSON.stringify(registries, void 0, 2))
}

/**
 * @name 增加registry
 */
export const addRegistry = async (registryInfo: RegistryInfo) => {
  const configRegistries = await getMtonrmrcRegistries()
  await setMtonrmrcRegistries(configRegistries.concat(registryInfo))
}

/**
 * @name 更新registry
 */
export const updateRegistry = async (name: string, registryInfo: Partial<RegistryInfo>) => {
  const configRegistries = await getMtonrmrcRegistries()
  await setMtonrmrcRegistries(
    configRegistries.map((i) => (i.name === name ? { ...i, ...registryInfo } : i)),
  )
}

/**
 * @name 删除registry
 */
export const deleteRegistry = async (name: string) => {
  const configRegistries = await getMtonrmrcRegistries()
  await setMtonrmrcRegistries(configRegistries.filter((i) => i.name !== name))
}

/**
 * @name 清空registry
 */
export const clearRegistry = async () => {
  await setMtonrmrcRegistries([])
}

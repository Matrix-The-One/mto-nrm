import { setRegistry } from '@/utils'

export const set = async (registry: string) => {
  await setRegistry(registry)
}

import { expect, test, vi } from 'vitest'
import { getRegistry, getRegistryNames, setRegistry } from '@/utils'
import { npm } from '../testRegistry'

test('getRegistry', async () => {
  const func = vi.fn(getRegistry)
  await expect(func()).resolves.toBeTypeOf('string')
})

test('setRegistry', async () => {
  const func = vi.fn(setRegistry)
  await expect(func(npm.registry)).resolves.toBeUndefined()
})

test('getRegistryNames', async () => {
  const result = await getRegistryNames()
  expect(Array.isArray(result)).toBeTruthy()
})

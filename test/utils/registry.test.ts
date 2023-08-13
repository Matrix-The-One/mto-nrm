import { expect, test, vi } from 'vitest'
import registries from '@/registries.json'
import { getRegistry, getRegistryNames, setRegistry } from '@/utils'
import testRegistry from '../testRegistry'

test('getRegistry', async () => {
  const func = vi.fn(getRegistry)
  expect(func()).resolves.toBeTypeOf('string')
})

test('setRegistry', async () => {
  const func = vi.fn(setRegistry)
  expect(func(testRegistry.registry)).resolves.toBeUndefined()
})

test('getRegistryNames', async () => {
  const result = getRegistryNames()
  expect(result).toEqual(registries.map((i) => i.name))
})

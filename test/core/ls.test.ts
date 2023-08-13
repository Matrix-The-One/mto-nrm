import { $ } from 'execa'
import { expect, test, vi } from 'vitest'
import { ls } from '@/core'
import registries from '@/registries.json'
import { getRegistry } from '@/utils'

test.skip('ls:cli', async () => {
  await $`mto-nrm ls`
})

test('ls:lib', async () => {
  vi.stubEnv('MTO_NRM_ENV', 'lib')
  const result = await ls()
  const registry = await getRegistry()
  expect(result).toEqual(registries.map((i) => ({ ...i, select: i.registry === registry })))
})

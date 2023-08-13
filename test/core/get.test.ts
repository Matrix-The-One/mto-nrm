import { $ } from 'execa'
import { expect, test, vi } from 'vitest'
import { get } from '@/core'
import testRegistry from '../testRegistry'

test('get:cli', async () => {
  const { stdout } = await $`mto-nrm get ${testRegistry.name}`
  expect(stdout).toEqual(testRegistry.registry)
})

test('get:lib', async () => {
  vi.stubEnv('MTO_NRM_ENV', 'lib')
  const result = await get(testRegistry.name)
  expect(result).toEqual(testRegistry.registry)
})

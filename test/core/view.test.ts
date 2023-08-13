import { $ } from 'execa'
import { expect, test, vi } from 'vitest'
import { view } from '@/core'
import testRegistry from '../testRegistry'

test('view:cli', async () => {
  const { stdout } = await $`mto-nrm view ${testRegistry.name}`
  expect(stdout).toEqual(JSON.stringify(testRegistry, void 0, 2))
})

test('view:lib', async () => {
  vi.stubEnv('MTO_NRM_ENV', 'lib')
  const result = await view(testRegistry.name)
  expect(result).toEqual(testRegistry)
})

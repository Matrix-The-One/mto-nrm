import { $ } from 'execa'
import { expect, test, vi } from 'vitest'
import { use } from '@/core'
import testRegistry from '../testRegistry'

test('use:cli', async () => {
  const { exitCode } = await $`mto-nrm use ${testRegistry.name}`
  expect(exitCode).toEqual(0)
})

test('use:lib', async () => {
  vi.stubEnv('MTO_NRM_ENV', 'lib')
  const func = vi.fn(use)
  expect(func(testRegistry.name)).resolves.toBeUndefined()
})

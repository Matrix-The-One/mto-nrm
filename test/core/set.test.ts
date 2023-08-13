import { $ } from 'execa'
import { expect, test, vi } from 'vitest'
import { set } from '@/core'
import testRegistry from '../testRegistry'

test('set:cli', async () => {
  const { exitCode } = await $`npm config set registry ${testRegistry.registry}`
  expect(exitCode).toEqual(0)
})

test('set:lib', async () => {
  vi.stubEnv('MTO_NRM_ENV', 'lib')
  const func = vi.fn(set)
  expect(func(testRegistry.registry)).resolves.toBeUndefined()
})

import { $ } from 'execa'
import { expect, test, vi } from 'vitest'
import { home } from '@/core'
import testRegistry from '../testRegistry'

test('home:cli', async () => {
  const { stdout } = await $`mto-nrm home ${testRegistry.name}`
  expect(stdout).toEqual(testRegistry.home)
})

test('home:lib', async () => {
  vi.stubEnv('MTO_NRM_ENV', 'lib')
  const result = await home(testRegistry.name)
  expect(result).toEqual(testRegistry.home)
})

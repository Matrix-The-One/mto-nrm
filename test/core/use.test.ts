import { $ } from 'execa'
import { expect, test, vi } from 'vitest'
import { use } from '@/core'
import { getRegistryNames } from '@/utils'
import testRegistry from '../testRegistry'

test('use:cli', async () => {
  const { exitCode } = await $`mto-nrm use ${testRegistry.name}`
  expect(exitCode).toEqual(0)
})

test('use:cli-error', async () => {
  const { stdout } = await $`mto-nrm use errorRegistryName`
  expect(stdout).toEqual(`Please select from [${getRegistryNames().toString()}]`)
})

test('view:lib-cli', async () => {
  vi.stubEnv('MTO_NRM_ENV', 'cli')
  const result = await use(testRegistry.name)
  expect(result).toBeUndefined()
})

test('use:lib', async () => {
  vi.stubEnv('MTO_NRM_ENV', 'lib')
  const result = await use(testRegistry.name)
  expect(result).toBeUndefined()
})

test('use:lib-error', async () => {
  vi.stubEnv('MTO_NRM_ENV', 'lib')
  const result = await use('errorRegistryName')
  expect(result).toBeFalsy()
})

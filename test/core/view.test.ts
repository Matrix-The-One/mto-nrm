import { $ } from 'execa'
import { expect, test, vi } from 'vitest'
import { view } from '@/core'
import { getRegistryNames } from '@/utils'
import testRegistry from '../testRegistry'

test('view:cli', async () => {
  const { stdout } = await $`mto-nrm view ${testRegistry.name}`
  expect(stdout).toEqual(JSON.stringify(testRegistry, void 0, 2))
})

test('view:cli-empty', async () => {
  const { stdout } = await $`mto-nrm view`
  expect(stdout).toBeTypeOf('string')
})

test('view:cli-error', async () => {
  const { stdout } = await $`mto-nrm view errorRegistryName`
  expect(stdout).toEqual(`Please select from [${getRegistryNames().toString()}]`)
})

test('view:lib-cli', async () => {
  vi.stubEnv('MTO_NRM_ENV', 'cli')
  const result = await view(testRegistry.name)
  expect(result).toBeUndefined()
})

test('view:lib', async () => {
  vi.stubEnv('MTO_NRM_ENV', 'lib')
  const result = await view(testRegistry.name)
  expect(result).toEqual(testRegistry)
})

test('view:lib-empty', async () => {
  vi.stubEnv('MTO_NRM_ENV', 'lib')
  const result = await view()
  expect(result).toBeTypeOf('object')
})

test('view:lib-error', async () => {
  vi.stubEnv('MTO_NRM_ENV', 'lib')
  const result = await view('errorRegistryName')
  expect(result).toBeFalsy()
})

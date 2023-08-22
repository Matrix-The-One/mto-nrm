import { $ } from 'execa'
import { expect, test, vi } from 'vitest'
import { get } from '@/core'
import { getRegistryNames } from '@/utils'
import testRegistry from '../testRegistry'

test('get:cli', async () => {
  const { stdout } = await $`mto-nrm get ${testRegistry.name}`
  expect(stdout).toEqual(testRegistry.registry)
})

test('get:cli-empty', async () => {
  const { stdout } = await $`mto-nrm get`
  expect(stdout).toBeTypeOf('string')
})

test('get:cli-error', async () => {
  const { stdout } = await $`mto-nrm get errorRegistryName`
  expect(stdout).toEqual(`Please select from [${getRegistryNames().toString()}]`)
})

test('view:lib-cli', async () => {
  vi.stubEnv('MTO_NRM_ENV', 'cli')
  const result = await get(testRegistry.name)
  expect(result).toBeUndefined()
})

test('get:lib', async () => {
  vi.stubEnv('MTO_NRM_ENV', 'lib')
  const result = await get(testRegistry.name)
  expect(result).toEqual(testRegistry.registry)
})

test('get:lib-empty', async () => {
  vi.stubEnv('MTO_NRM_ENV', 'lib')
  const result = await get()
  expect(result).toBeTypeOf('string')
})

test('get:lib-error', async () => {
  vi.stubEnv('MTO_NRM_ENV', 'lib')
  const result = await get('errorRegistryName')
  expect(result).toBeFalsy()
})

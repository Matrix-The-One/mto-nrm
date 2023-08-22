import { $ } from 'execa'
import { expect, test, vi } from 'vitest'
import { home } from '@/core'
import { getRegistryNames } from '@/utils'
import testRegistry from '../testRegistry'

test('home:cli', async () => {
  const { stdout } = await $`mto-nrm home ${testRegistry.name}`
  expect(stdout).toEqual(testRegistry.home)
})

test('home:cli-empty', async () => {
  const { stdout } = await $`mto-nrm home`
  expect(stdout).toBeTypeOf('string')
})

test('home:cli-error', async () => {
  const { stdout } = await $`mto-nrm home errorRegistryName`
  expect(stdout).toEqual(`Please select from [${getRegistryNames().toString()}]`)
})

test('view:lib-cli', async () => {
  vi.stubEnv('MTO_NRM_ENV', 'cli')
  const result = await home(testRegistry.name)
  expect(result).toBeUndefined()
})

test('home:lib', async () => {
  vi.stubEnv('MTO_NRM_ENV', 'lib')
  const result = await home(testRegistry.name)
  expect(result).toEqual(testRegistry.home)
})

test('home:lib-empty', async () => {
  vi.stubEnv('MTO_NRM_ENV', 'lib')
  const result = await home()
  expect(result).toBeTypeOf('string')
})

test('home:lib-error', async () => {
  vi.stubEnv('MTO_NRM_ENV', 'lib')
  const result = await home('errorRegistryName')
  expect(result).toBeFalsy()
})

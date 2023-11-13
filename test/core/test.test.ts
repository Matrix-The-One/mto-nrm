import { $ } from 'execa'
import { beforeAll, describe, expect, test, vi } from 'vitest'
import { setConfig } from '@/config'
import { test as nrmTest } from '@/core'
import { npm } from '../testRegistry'

describe('test:cli', () => {
  test('test:cli', async () => {
    const { stdout } = await $`mto-nrm test ${npm.name}`
    expect(stdout).toBeTypeOf('string')
  })

  test('test:cli-empty', async () => {
    const { stdout } = await $`mto-nrm test`
    expect(stdout).toBeTypeOf('string')
  })

  test('test:cli-timeout', async () => {
    const { stdout } = await $`mto-nrm test https://google.com`
    expect(JSON.parse(stdout).timeout).toBeTruthy()
  })

  test('test:cli-error', async () => {
    const { stdout } = await $`mto-nrm test errorRegistryName`
    expect(stdout.startsWith('No registry')).toBeTruthy()
  })
})

describe('test:lib', () => {
  beforeAll(() => {
    vi.stubEnv('MTO_NRM_ENV', 'lib')
    setConfig({ getRegistry: () => [], setRegistry: () => {} })
  })

  test('test:lib', async () => {
    const result = await nrmTest(npm.name)
    expect(result).toBeUndefined()
  })

  test('test:lib-empty', async () => {
    const result = await nrmTest()
    expect(result).toBeUndefined()
  })

  test('test:cli-timeout', async () => {
    const result = await nrmTest('https://example.com')
    expect(result).toBeUndefined()
  })

  test('test:lib-error', async () => {
    const result = await nrmTest('errorRegistryName')
    expect(result).toBeFalsy()
  })
})

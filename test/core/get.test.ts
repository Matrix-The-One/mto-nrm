import { $ } from 'execa'
import { beforeAll, describe, expect, test, vi } from 'vitest'
import { setConfig } from '@/config'
import { get } from '@/core'
// import { getRegistryNames } from '@/utils'
import { npm } from '../testRegistry'

describe('get:cli', () => {
  test('get:cli', async () => {
    const { stdout } = await $`mto-nrm get ${npm.name}`
    expect(stdout).toEqual(npm.registry)
  })

  test('get:cli-empty', async () => {
    const { stdout } = await $`mto-nrm get`
    expect(stdout).toBeTypeOf('string')
  })

  test('get:cli-error', async () => {
    const { stdout } = await $`mto-nrm get errorRegistryName`
    // const registryNames = await getRegistryNames()
    // expect(stdout).toEqual(`Please select from [${registryNames.toString()}]`)
    expect(stdout.startsWith('Please select from')).toBeTruthy()
  })
})

describe('get:lib', () => {
  beforeAll(() => {
    vi.stubEnv('MTO_NRM_ENV', 'lib')
    setConfig({ getRegistry: () => [], setRegistry: () => {} })
  })

  test('get:lib', async () => {
    const result = await get(npm.name)
    expect(result).toEqual(npm.registry)
  })

  test('get:lib-empty', async () => {
    const result = await get()
    expect(result).toBeTypeOf('string')
  })

  test('get:lib-error', async () => {
    const result = await get('errorRegistryName')
    expect(result).toBeFalsy()
  })
})

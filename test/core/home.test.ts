import { $ } from 'execa'
import { beforeAll, describe, expect, test, vi } from 'vitest'
import { setConfig } from '@/config'
import { home } from '@/core'
// import { getRegistryNames } from '@/utils'
import { npm } from '../testRegistry'

describe('home:cli', () => {
  test('home:cli', async () => {
    const { stdout } = await $`mto-nrm home ${npm.name}`
    expect(stdout).toEqual(npm.home)
  })

  test('home:cli-empty', async () => {
    const { stdout } = await $`mto-nrm home`
    expect(stdout).toBeTypeOf('string')
  })

  test('home:cli-error', async () => {
    const { stdout } = await $`mto-nrm home errorRegistryName`
    // const registryNames = await getRegistryNames()
    // expect(stdout).toEqual(`Please select from [${registryNames.toString()}]`)
    expect(stdout.startsWith('Please select from')).toBeTruthy()
  })
})

describe('home:lib', () => {
  beforeAll(() => {
    vi.stubEnv('MTO_NRM_ENV', 'lib')
    setConfig({ getRegistry: () => [], setRegistry: () => {} })
  })

  test('home:lib', async () => {
    vi.stubEnv('MTO_NRM_ENV', 'lib')
    const result = await home(npm.name)
    expect(result).toEqual(npm.home)
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
})

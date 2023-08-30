import { $ } from 'execa'
import { beforeAll, describe, expect, test, vi } from 'vitest'
import { setConfig } from '@/config'
import { view } from '@/core'
// import { getRegistryNames } from '@/utils'
import { npm } from '../testRegistry'

describe('view:cli', () => {
  test('view:cli', async () => {
    const { stdout } = await $`mto-nrm view ${npm.name}`
    expect(stdout).toEqual(JSON.stringify(npm, void 0, 2))
  })

  test('view:cli-empty', async () => {
    const { stdout } = await $`mto-nrm view`
    expect(stdout).toBeTypeOf('string')
  })

  test('view:cli-error', async () => {
    const { stdout } = await $`mto-nrm view errorRegistryName`
    // const registryNames = await getRegistryNames()
    // expect(stdout).toEqual(`Please select from [${registryNames.toString()}]`)
    expect(stdout.startsWith('Please select from')).toBeTruthy()
  })
})

describe('view:lib', () => {
  beforeAll(() => {
    vi.stubEnv('MTO_NRM_ENV', 'lib')
    setConfig({ getRegistry: () => [], setRegistry: () => {} })
  })

  test('view:lib', async () => {
    const result = await view(npm.name)
    expect(result).toEqual(npm)
  })

  test('view:lib-empty', async () => {
    const result = await view()
    expect(result).toBeTypeOf('object')
  })

  test('view:lib-error', async () => {
    const result = await view('errorRegistryName')
    expect(result).toBeFalsy()
  })
})

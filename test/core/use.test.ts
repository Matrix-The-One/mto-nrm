import { $ } from 'execa'
import { beforeAll, describe, expect, test, vi } from 'vitest'
import { setConfig } from '@/config'
import { use } from '@/core'
import { npm } from '../testRegistry'

describe('use:cli', () => {
  test('use:cli', async () => {
    const { exitCode } = await $`mto-nrm use ${npm.name}`
    expect(exitCode).toEqual(0)
  })

  test('use:cli-error', async () => {
    const { stdout } = await $`mto-nrm use errorRegistryName`
    expect(stdout.startsWith('No registry')).toBeTruthy()
  })
})

describe('use:lib', () => {
  beforeAll(() => {
    vi.stubEnv('MTO_NRM_ENV', 'lib')
    setConfig({ getRegistry: () => [], setRegistry: () => {} })
  })

  test('use:lib', async () => {
    const result = await use(npm.name)
    expect(result).toBeUndefined()
  })

  test('use:lib-error', async () => {
    const result = await use('errorRegistryName')
    expect(result).toBeFalsy()
  })
})

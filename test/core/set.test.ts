import { $ } from 'execa'
import { beforeAll, describe, expect, test, vi } from 'vitest'
import { setConfig } from '@/config'
import { set } from '@/core'
import { npm } from '../testRegistry'

describe('set:cli', () => {
  test('set:cli', async () => {
    const { exitCode } = await $`npm config set registry ${npm.registry}`
    expect(exitCode).toEqual(0)
  })
})

describe('set:lib', () => {
  beforeAll(() => {
    vi.stubEnv('MTO_NRM_ENV', 'lib')
    setConfig({ getRegistry: () => [], setRegistry: () => {} })
  })

  test('set:lib', async () => {
    const result = await set(npm.registry)
    expect(result).toBeUndefined()
  })
})

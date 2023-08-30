import { $ } from 'execa'
import { beforeAll, describe, expect, test, vi } from 'vitest'
import { setConfig } from '@/config'
import { del } from '@/core'
import settledRegistries from '@/registries.json'
import { cnpm, npm } from '../testRegistry'

describe('del:cli', () => {
  test('del:cli', async () => {
    const { stdout } = await $`mto-nrm del ${cnpm.name}`
    expect(stdout).toEqual('')
  })

  test('del:cli-not', async () => {
    const { stdout } = await $`mto-nrm del ${npm.name}`
    const settledNames = settledRegistries.map((i) => i.name)
    expect(stdout).toEqual(`Do not delete the registry of [${settledNames.toString()}]`)
  })
})

describe('del:lib', () => {
  beforeAll(() => {
    vi.stubEnv('MTO_NRM_ENV', 'lib')
    setConfig({ getRegistry: () => [], setRegistry: () => {} })
  })

  test('del:lib', async () => {
    const result = await del(cnpm.name)
    expect(result).toBeUndefined()
  })

  test('del:lib-not', async () => {
    const result = await del(npm.name)
    expect(result).toBeFalsy()
  })
})

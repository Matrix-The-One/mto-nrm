import { $ } from 'execa'
import { beforeAll, describe, expect, test, vi } from 'vitest'
import { setConfig } from '@/config'
import { add } from '@/core'
import { cnpm, npm } from '../testRegistry'

describe('add:cli', () => {
  test('add:cli', async () => {
    const { stdout } = await $`mto-nrm add ${cnpm.name} ${cnpm.registry} ${cnpm.home}`
    expect([`There is already a registry named ${cnpm.name}`, ''].includes(stdout)).toBeTruthy()
  })

  test('add:cli-exists', async () => {
    const { stdout } = await $`mto-nrm add ${npm.name} ${npm.registry}`
    expect(stdout).toEqual(`There is already a registry named ${npm.name}`)
  })

  test('add:cli-error', async () => {
    const { stdout } = await $`mto-nrm add ${cnpm.name} r.cnpmjs.org`
    expect(stdout).toEqual(`Must be full url with "http://"`)
  })
})

describe('add:lib', () => {
  beforeAll(() => {
    vi.stubEnv('MTO_NRM_ENV', 'lib')
    setConfig({ getRegistry: () => [], setRegistry: () => {} })
  })

  test('add:lib', async () => {
    const result = await add(cnpm.name, cnpm.registry)
    expect(result).toBeUndefined()
  })

  test('add:lib-exists', async () => {
    const result = await add(npm.name, npm.registry)
    expect(result).toBeFalsy()
  })

  test('add:lib-error', async () => {
    const result = await add(cnpm.name, 'r.cnpmjs.org')
    expect(result).toBeFalsy()
  })
})

import { $ } from 'execa'
import { beforeAll, describe, expect, test, vi } from 'vitest'
import { setConfig } from '@/config'
import { update } from '@/core'
import settledRegistries from '@/registries.json'
import { cnpm, npm } from '../testRegistry'

describe('update:cli', () => {
  test('update:cli', async () => {
    const { stdout } = await $`mto-nrm update ${cnpm.name} -u ${cnpm.registry} -h ${cnpm.home}`
    expect([`There is no registry named ${cnpm.name}`, ''].includes(stdout)).toBeTruthy()
  })

  test('update:cli-not', async () => {
    const { stdout } = await $`mto-nrm update ${npm.name} -u ${npm.registry}`
    const settledNames = settledRegistries.map((i) => i.name)
    expect(stdout).toEqual(`Do not change the registry of [${settledNames.toString()}]`)
  })

  test('update:cli-error', async () => {
    const { stdout } = await $`mto-nrm update ${cnpm.name} -u r.cnpmjs.org`
    expect(
      [`There is no registry named ${cnpm.name}`, `Must be full url with "http://"`].includes(
        stdout,
      ),
    ).toBeTruthy()
  })
})

describe('update:lib', () => {
  beforeAll(() => {
    vi.stubEnv('MTO_NRM_ENV', 'lib')
    setConfig({ getRegistry: () => [], setRegistry: () => {} })
  })

  test('update:lib', async () => {
    const result = await update(cnpm.name, { url: cnpm.registry })
    expect(result).toBeFalsy()
  })

  test('update:lib-not', async () => {
    const result = await update(npm.name, { url: npm.registry })
    expect(result).toBeFalsy()
  })

  test('update:lib-error', async () => {
    const result = await update(cnpm.name, { url: 'r.cnpmjs.org' })
    expect(result).toBeFalsy()
  })
})

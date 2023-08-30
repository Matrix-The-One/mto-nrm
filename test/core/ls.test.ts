import { $ } from 'execa'
import { beforeAll, describe, expect, test, vi } from 'vitest'
import { setConfig } from '@/config'
import { ls } from '@/core'
import registries from '@/registries.json'
import { getRegistry } from '@/utils'

describe.skip('ls:cli', () => {
  test('ls:cli', async () => {
    await $`mto-nrm ls`
  })
})

describe('ls:lib', () => {
  beforeAll(() => {
    vi.stubEnv('MTO_NRM_ENV', 'lib')
    setConfig({ getRegistry: () => [], setRegistry: () => {} })
  })

  test('ls:lib', async () => {
    const result = await ls()
    const registry = await getRegistry()
    expect(result).toEqual(registries.map((i) => ({ ...i, select: i.registry === registry })))
  })
})

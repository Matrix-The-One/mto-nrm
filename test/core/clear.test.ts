import { $ } from 'execa'
import { beforeAll, describe, expect, test, vi } from 'vitest'
import { setConfig } from '@/config'
import { clear } from '@/core'

describe('clear:cli', () => {
  test('clear:cli', async () => {
    const { stdout } = await $`mto-nrm clear`
    expect(stdout).toEqual('')
  })
})

describe('clear:lib', () => {
  beforeAll(() => {
    vi.stubEnv('MTO_NRM_ENV', 'lib')
    setConfig({ getRegistry: () => [], setRegistry: () => {} })
  })

  test('clear:lib', async () => {
    const result = await clear()
    expect(result).toBeUndefined()
  })
})

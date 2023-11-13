import { $ } from 'execa'
import { describe, expect, test } from 'vitest'

describe('config:cli', () => {
  test('clear:cli', async () => {
    const { stdout } = await $`mto-nrm config`
    expect(stdout).toBeTypeOf('string')
  })
})

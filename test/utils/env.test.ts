import { expect, test, vi } from 'vitest'
import { isLib } from '@/utils'

test('isLib:cli', async () => {
  vi.stubEnv('MTO_NRM_ENV', '')
  const result = isLib()
  expect(result).toBeFalsy()
})

test('isLib:lib', async () => {
  vi.stubEnv('MTO_NRM_ENV', 'lib')
  const result = isLib()
  expect(result).toBeTruthy()
})

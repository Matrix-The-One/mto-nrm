import { expect, test } from 'vitest'
import { testNetwork } from '@/utils'
import { npm } from '../testRegistry'

test('testNetwork', async () => {
  const { time } = await testNetwork(npm.registry)
  expect(time).toBeTypeOf('number')
})

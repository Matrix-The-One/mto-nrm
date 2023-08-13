import { expect, test } from 'vitest'
import { padString } from '@/utils'

test('padString', async () => {
  const result = padString({ str: 'pad-string', separator: '*', length: 20 })
  expect(result).toEqual('pad***********string')
})

test('padString:empty', async () => {
  const result = padString({ str: '' })
  expect(result).toEqual('')
})

test('padString:lengthException', async () => {
  const result = padString({ str: 'pad-string', length: 3 })
  expect(result).toEqual('pad-string')
})

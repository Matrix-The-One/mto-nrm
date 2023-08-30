import { expect, test } from 'vitest'
import { isUrl } from '@/utils'

test('isUrl:true', async () => {
  const result = isUrl('https://github.com/Matrix-The-One/mto-nrm')
  expect(result).toBeTruthy()
})

test('isUrl:false', async () => {
  const result = isUrl('github.com/Matrix-The-One/mto-nrm')
  expect(result).toBeFalsy()
})

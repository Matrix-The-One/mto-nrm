import { expect, test, vi } from 'vitest'
import { log, logError, logLink } from '@/utils'

test('log', async () => {
  const func = vi.fn(log)
  func('log test')
  expect(func).toHaveBeenCalled()
})

test('log:bgBlue', async () => {
  const func = vi.fn(log)
  func('log test', 'bgBlue')
  expect(func).toHaveBeenCalled()
})

test('logError', async () => {
  const func = vi.fn(logError)
  func('logError test')
  expect(func).toHaveBeenCalled()
})

test('logLink', async () => {
  const func = vi.fn(logLink)
  func('logLink test')
  expect(func).toHaveBeenCalled()
})

import { beforeAll, describe, expect, test, vi } from 'vitest'
import { initMtoNrmEnv, setConfig } from '@/config'
import {
  addRegistry,
  clearRegistry,
  deleteRegistry,
  getMtonrmrcPath,
  getMtonrmrcRegistries,
  setMtonrmrcRegistries,
  updateRegistry,
} from '@/utils'
import { cnpm } from '../testRegistry'

describe('mtonrmrc:cli', () => {
  test('mtonrmrc:cli-getMtonrmrcPath', async () => {
    const result = await getMtonrmrcPath()
    expect(result).toBeTypeOf('string')
  })

  test('mtonrmrc:cli-getMtonrmrcRegistries', async () => {
    const result = await getMtonrmrcRegistries()
    expect(Array.isArray(result)).toBeTruthy()
  })

  test('mtonrmrc:cli-setMtonrmrcRegistries', async () => {
    const result = await setMtonrmrcRegistries()
    expect(result).toBeUndefined()
  })

  test('mtonrmrc:cli-addRegistry', async () => {
    const result = await addRegistry(cnpm)
    expect(result).toBeUndefined()
  })

  test('mtonrmrc:cli-updateRegistry', async () => {
    const result = await updateRegistry(cnpm.name, cnpm)
    expect(result).toBeUndefined()
  })

  test('mtonrmrc:cli-deleteRegistry', async () => {
    const result = await deleteRegistry(cnpm.name)
    expect(result).toBeUndefined()
  })

  test('mtonrmrc:cli-clearRegistry', async () => {
    const result = await clearRegistry()
    expect(result).toBeUndefined()
  })
})

describe('mtonrmrc:lib', () => {
  beforeAll(() => {
    vi.stubEnv('MTO_NRM_ENV', 'lib')
    setConfig({ getRegistry: () => [], setRegistry: () => {} })
  })

  test('mtonrmrc:lib-getMtonrmrcRegistries', async () => {
    const result = await getMtonrmrcRegistries()
    expect(Array.isArray(result)).toBeTruthy()
  })

  test('mtonrmrc:lib-setMtonrmrcRegistries', async () => {
    const result = await setMtonrmrcRegistries()
    expect(result).toBeUndefined()
  })

  test('mtonrmrc:lib-addRegistry', async () => {
    const result = await addRegistry(cnpm)
    expect(result).toBeUndefined()
  })

  test('mtonrmrc:lib-updateRegistry', async () => {
    const result = await updateRegistry(cnpm.name, cnpm)
    expect(result).toBeUndefined()
  })

  test('mtonrmrc:lib-deleteRegistry', async () => {
    const result = await deleteRegistry(cnpm.name)
    expect(result).toBeUndefined()
  })

  test('mtonrmrc:lib-clearRegistry', async () => {
    const result = await clearRegistry()
    expect(result).toBeUndefined()
  })
})

describe('mtonrmrc:lib-error', () => {
  beforeAll(() => {
    initMtoNrmEnv()
    setConfig({ getRegistry: void 0, setRegistry: void 0 })
  })

  test('mtonrmrc:lib-error-getMtonrmrcRegistries', async () => {
    const result = getMtonrmrcRegistries()
    await expect(result).rejects.toThrow('getRegistry is not a function')
  })

  test('mtonrmrc:lib-error-setMtonrmrcRegistries', async () => {
    const result = setMtonrmrcRegistries()
    await expect(result).rejects.toThrow('setRegistry is not a function')
  })
})

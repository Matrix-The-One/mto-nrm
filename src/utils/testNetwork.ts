import fetch from 'node-fetch'

/**
 * @name 测试网络
 */
export const testNetwork = async (registry: string, timeout: number = 5 * 1000) => {
  const start = Date.now()
  let success = false
  let error: any = null

  const controller = new AbortController()
  const timer = setTimeout(() => {
    controller.abort()
  }, timeout)

  try {
    const response = await fetch(`${registry}${/\/$/.test(registry) ? '' : '/'}mto-nrm`, {
      // @ts-ignore
      signal: controller.signal,
    })
    success = response.ok
  } catch (e) {
    error = e
  } finally {
    clearTimeout(timer)
  }

  const end = Date.now()

  return {
    registry,
    success,
    time: end - start,
    timeout: end - start >= timeout,
    error,
  }
}

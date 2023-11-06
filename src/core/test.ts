import ora from 'ora'
import { getRegistries, getRegistry, isUrl, log, logError, testNetwork } from '@/utils'

/**
 * @name 测试registry
 */
export const test = async (nameOrRegistry?: string, option?: { timeout?: number }) => {
  let registry = nameOrRegistry
  const registries = await getRegistries()

  if (nameOrRegistry) {
    const matchRegistry = registries.find((i) => i.name === nameOrRegistry)?.registry
    if (matchRegistry) registry = matchRegistry

    if (!matchRegistry && !isUrl(nameOrRegistry)) {
      logError(`No registry named ${nameOrRegistry} found`)
      return false
    }
  } else {
    registry = await getRegistry()
  }

  const spinner = ora({ text: 'Request Loading...', color: 'cyan' }).start()
  const result = await testNetwork(registry!, option?.timeout)
  spinner.stop()
  log(JSON.stringify(result, void 0, 2), 'cyan')
}

import { select } from '@inquirer/prompts'
import registries from '@/registries.json'
import { getRegistry, isLib, padString, setRegistry } from '@/utils'

/**
 * @name 交互式选取registry
 */
/* c8 ignore next 100 */
export const ls = async (option: ExecOptionType = {}) => {
  const registry = await getRegistry(option.exec)

  if (isLib()) {
    return registries.map((i) => ({ ...i, select: i.registry === registry }))
  }

  const selectRegistry = await select({
    message: `Select a registry (current: ${registry})`,
    choices: registries
      .map((i) => ({
        name: padString({ str: `${i.name} - `, length: 20 }).concat(i.registry),
        value: i.registry,
      }))
      .sort((i) => (i.value === registry ? -1 : 0)),
  })

  await setRegistry(selectRegistry, option.exec)
}

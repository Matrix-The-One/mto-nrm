import { select } from '@inquirer/prompts'
import registries from '@/registries.json'
import { getRegistry, setRegistry, strWith } from '@/utils'

export const ls = async () => {
  const registry = await getRegistry()
  const selectRegistry = await select({
    message: `Select a registry (current: ${registry})`,
    choices: registries
      .map((i) => ({
        name: strWith({ str: `${i.name} - `, length: 20 }).concat(i.registry),
        value: i.registry,
      }))
      .sort((i) => (i.value === registry ? -1 : 0)),
  })

  await setRegistry(selectRegistry)
}

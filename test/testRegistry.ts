import registries from '@/registries.json'

export const npm = registries.find((i) => i.name === 'npm')!

export const cnpm = {
  name: 'cnpm',
  home: 'https://r.cnpmjs.org/',
  registry: 'https://r.cnpmjs.org/',
}

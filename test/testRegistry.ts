import registries from '@/registries.json'

export const npm = registries.find((i) => i.name === 'npm')!

export const cnpm = {
  name: 'cnpm',
  home: 'http://r.cnpmjs.org/',
  registry: 'http://r.cnpmjs.org/',
}

import registries from '@/registries.json'

export const testRegistry = registries.find((i) => i.name === 'taobao')!

export default testRegistry

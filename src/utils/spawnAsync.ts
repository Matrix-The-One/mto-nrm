import spawn from 'cross-spawn'

/**
 * @name 将spawn包装成promise
 */
export const spawnAsync = (...params: Parameters<typeof spawn>): Promise<string | undefined> => {
  const child = spawn(...params)

  return new Promise((resolve, reject) => {
    child.stdout?.on('data', (data) => resolve(replaceN(data?.toString())))
    child.stderr?.on('data', (data) => {
      console.error(data)
      reject(data?.toString())
    })
    child.on('error', (err) => {
      console.error(err)
      reject(err?.toString())
    })
  })
}

/**
 * @name 替换\n
 */
export const replaceN = (str: string = '') => {
  return str.replace(/(\n)*$/, '')
}

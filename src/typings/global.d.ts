type RegistryInfo = {
  name: string
  home: string
  registry: string
}

type RegistryName = 'npm' | 'yarn' | 'taobao' | 'tencent'

type ExecOptionType = {
  /**
   * @name 执行程序命令
   * @default npm
   * @example npm | yarn | pnpm
   */
  exec?: string
}

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

type MtonrmConfig = {
  /**
   * @name 自定义获取registry的方法
   * @desc 添加、更新、删除、清空方法需要使用
   */
  getRegistry?: () => RegistryInfo[] | Promise<RegistryInfo[]>
  /**
   * @name 自定义设置registry的方法
   * @desc 添加、更新、删除、清空方法需要使用
   */
  setRegistry?: (registries: RegistryInfo[]) => void | Promise<void>
}

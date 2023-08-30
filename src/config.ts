/**
 * @name 全局配置
 */
export const config: MtonrmConfig = {}

/**
 * @name 设置全局配置
 */
export const setConfig = (newConfig: MtonrmConfig) => {
  Object.assign(config, newConfig)
}

/**
 * @name 判断环境
 * @desc 是否以包的方式使用
 */
export const isLib = () => process.env.MTO_NRM_ENV === 'lib'

/**
 * @name 初始化环境变量
 * @desc 当以包的方式引入时使用
 */
export const initMtoNrmEnv = () => {
  process.env.MTO_NRM_ENV = 'lib'
}

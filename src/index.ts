#! /usr/bin/env node
import init from './cli'
import { isLib } from './utils'

export * from './core'

/**
 * @name 初始化环境变量
 * @desc 当以包的方式引入时使用
 */
export const initMtoNrmEnv = () => {
  process.env.MTO_NRM_ENV = 'lib'
}

!isLib() && init()

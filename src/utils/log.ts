import chalk from 'chalk'
import type { ColorName } from 'chalk'

/**
 * @name 打印
 */
export const log = (colorName?: ColorName, message?: string) => {
  console.log(colorName ? chalk[colorName](message) : chalk(message))
}

/**
 * @name 打印链接
 */
export const logLink = (message?: string) => {
  console.log(chalk.blue.underline(message))
}

/**
 * @name 打印错误
 */
export const logError = (message?: string) => {
  console.log(chalk.red(message))
}

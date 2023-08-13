type PadStringParams = {
  /**
   * @name 要格式化的字符串
   */
  str: string
  /**
   * @name 标识的分隔符
   * @default -
   */
  sign?: string
  /**
   * @name 补充的分隔符
   * @default sign
   */
  separator?: string
  /**
   * @name 总长度
   * @default str.length
   */
  length?: number
}

/**
 * @name 补偿字符串中间分隔符
 */
export const padString = ({
  str = '',
  sign = '-',
  separator = sign,
  length = str.length,
}: PadStringParams) => {
  const reg = new RegExp(sign)
  const withLength = length - str.length + 1
  return str.replace(reg, separator.repeat(Math.max(withLength, 1)))
}

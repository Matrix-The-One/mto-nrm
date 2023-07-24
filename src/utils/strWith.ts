type StrWithParams = {
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

export const strWith = ({
  str = '',
  sign = '-',
  separator = sign,
  length = str.length,
}: StrWithParams) => {
  const reg = new RegExp(sign)
  const withLength = length - str.length
  return str.replace(reg, separator.repeat(withLength))
}

/**
 * @name 校验Url
 */
export const isUrl = (url: string = '') => {
  return /^https?:\/\//.test(url)
}

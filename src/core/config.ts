import { getMtonrmrcPath } from '@/utils'

/**
 * @name 获取配置文件路径
 */
export const config = async () => {
  return await getMtonrmrcPath()
}

/**
 * @desc 判断是否属于外部链接
 * @param url 链接
 * @returns 是否属于外部链接
 */
export function isHttpOrHttpsUrl(url: string): boolean {
  let regRule = /(http|https):\/\/([\w.]+\/?)\S*/
  return regRule.test(url.toLowerCase())
}
/**
 *
 * @param {string} url
 */
export default function (url) {
  const delimiter = '?'
  const index = url.indexOf(delimiter)

  if (index === -1) return null

  return {
    url: url.slice(0, index),
    query: url.slice(index + 1)
      .split('&')
      .reduce((acc, rawParam) => {
        const parts = rawParam.split('=')

        acc[parts[0]] = decodeURIComponent(parts[1])

        return acc
      }, {})
  }
}

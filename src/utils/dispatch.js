import error from './errors'
import parseQuery from './parseQuery'

/**
 * Handles routing of the API for versions.
 *
 * @param {Object} router
 * @param {Request} request
 * @param {Response} response
 */
export default async function (router, request, response, auth = null) {
  const { url } = request
  const parts = url.split('/')
  const base = parts[0]

  if (!Object.keys(router).includes(base)) {
    return error(response, 404)
  }

  if (auth) {
    const authed = auth(request)

    if (!authed) return error(response, 401)
  }

  request.url = parts.slice(1).join('/')

  const parsedQuery = parseQuery(request.url)
  if (parsedQuery) {
    request.url = parsedQuery.url
    request.query = parsedQuery.query
  }

  return router[base](request, response)
}

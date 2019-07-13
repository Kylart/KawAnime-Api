import error from './errors'

/**
 * Redirects current call to the right method.
 *
 * @param {Object} methods
 * @param {Request} request
 * @param {Response} response
 */
export default function (methods, request, response) {
  const method = request.method.toLowerCase()
  const accepts = Object.keys(methods)

  return accepts.includes(method)
    ? methods[method](request, response)
    : error(response, 404)
}

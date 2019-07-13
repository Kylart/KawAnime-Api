import v1 from './v1'
import { dispatch, decorateResponse } from './utils'

const versions = {
  [v1.name]: v1.handler
}

/**
 * Handles routing of the API for versions.
 *
 * @param {Request} request
 * @param {Response} response
 */
export default function (request, response) {
  request.url = request.url.slice(1) // Removing first /

  decorateResponse(response)

  return dispatch(versions, request, response)
}

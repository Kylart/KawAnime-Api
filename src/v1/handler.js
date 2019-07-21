import { dispatch } from '../utils'
import routes from './routes'

/**
 * @param {Request} request
 * @param {Response} response
 */
export default function (request, response) {
  return dispatch(routes, request, response)
}

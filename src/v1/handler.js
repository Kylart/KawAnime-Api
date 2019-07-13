import { dispatch } from '../utils'
import checkAuth from './auth'
import routes from './routes'

/**
 * @param {Request} request
 * @param {Response} response
 */
export default function (request, response) {
  return dispatch(routes, request, response, checkAuth)
}

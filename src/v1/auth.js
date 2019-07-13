const AUTH_KEY = process.env.KAWANIME_SECRET

/**
 * @param {Request} request
 * @param {Response} response
 */
export default function (request) {
  try {
    const { headers: { authorization } } = request
    const authType = 'Bearer'

    const parts = authorization.split(' ')

    if (parts[0] !== authType) throw new Error('Invalid auth type.')
    if (parts[1] !== AUTH_KEY) throw new Error('Inavlid Authentication Token.')

    return true
  } catch (e) {
    return false
  }
}

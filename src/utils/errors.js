const errors = {
  400: 'Bad request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found'
}

/**
 * Send available error with message
 *
 * @param {Response} response
 * @param {integer} status
 */
export default function (response, status) {
  response.statusCode = status
  response.end(errors[status])
}

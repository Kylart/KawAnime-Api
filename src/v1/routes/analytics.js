import { promisify } from 'util'
import { createClient } from 'redis'

import { route, error } from '../../utils'

const client = createClient()
const HSET = promisify(client.hset).bind(client)
const HKEYS = promisify(client.hkeys).bind(client)

const methods = {
  post,
  get
}

const events = {
  appOpen: handleAppOpen
}

const ROUTE_NAME = 'analytics'

async function handleAppOpen (data) {
  const { eventName, userToken, version = '0.0.0' } = data
  const key = eventName

  if (!eventName || !userToken) throw new Error('Invalid body.')

  await HSET(key, userToken, version)
}

/**
 * Handles POST methods. Will store data into the database only if the
 * right authorisation is used.
 *
 * @param {Request} request
 * @param {Response} response
 */
async function post (request, response) {
  let body = ''

  request.on('data', (chunk) => { body += chunk })

  request.on('end', async () => {
    try {
      const { headers } = request

      if (headers['content-type'] !== 'application/json') throw new Error('Invalid Content type.')

      const data = JSON.parse(body)
      const { eventName } = data

      if (!Object.keys(events).includes(eventName)) throw new Error('Unhandled event.')

      await events[eventName](data)

      response.json({ success: true })
    } catch (e) {
      error(response, 400)
    }
  })
}

/**
 * Handles GET methods. Will only answer with HKEYS for now
 *
 * @param {Request} request
 * @param {Response} response
 */
async function get (request, response) {
  try {
    const { query: { eventName = 'appOpen' } } = request
    const data = await HKEYS(eventName)

    response.end(`${data.length}`)
  } catch (e) {
    error(response, 400)
  }
}

/**
 * Main handler for the analytics route.
 *
 * @param {Request} request
 * @param {Response} response
 */
async function handler (request, response) {
  return route(methods, request, response)
}

export default {
  [ROUTE_NAME]: handler
}

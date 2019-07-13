import request from 'supertest'

import server from '../src'

test('Any route that does not exist returns 404', async () => {
  const { status } = await request(server)
    .get('/')

  expect(status).toEqual(404)
})

test('Any route that does not exist returns 404', async () => {
  const { status } = await request(server)
    .get('/v8')

  expect(status).toEqual(404)
})

test('Any route that does not exist returns 404', async () => {
  const { status } = await request(server)
    .get('/v1/nonexistingroute')

  expect(status).toEqual(404)
})

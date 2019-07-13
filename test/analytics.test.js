import request from 'supertest'

import server from '../src'

const token = `Bearer ${process.env.KAWANIME_SECRET}`

test('Accepts POST and returns object', async () => {
  const { text } = await request(server)
    .post('/v1/analytics')
    .set({ Authorization: token })
    .send({
      eventName: 'appOpen',
      userToken: 'test-suite',
      version: '0.1.0'
    })

  expect(text).toEqual(JSON.stringify({ success: true }))
})

test('Accepts GET and returns Integer', async () => {
  const { status, text } = await request(server)
    .get('/v1/analytics')
    .set({ Authorization: token })
    .query({ 'eventName': 'appOpen' })

  expect(status).toEqual(200)
  expect(+text).toBeGreaterThan(0)
})

test('Rejects PUT method', async () => {
  const { status } = await request(server)
    .put('/v1/analytics')
    .set({ Authorization: token })

  expect(status).toEqual(404)
})

test('Rejects DELETE method', async () => {
  const { status } = await request(server)
    .delete('/v1/analytics')
    .set({ Authorization: token })

  expect(status).toEqual(404)
})

import '@babel/polyfill'
import { readFileSync } from 'fs'
import { createServer } from 'https'
import { createServer as http } from 'http'

import router from './router'

const port = process.env.PORT || 3000

const opts = {
  key: readFileSync(process.env.SSL_KEY_PATH),
  cert: readFileSync(process.env.SSL_CERT_PATH)
}

const server = createServer(opts, router)

if (process.env.NODE_ENV !== 'test') {
  server.listen(port, (err) => {
    if (err) {
      return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
  })

  http((req, res) => {
    res.writeHead(301, { Location: 'https://api.kawanime.com' })
    res.end()
  }).listen(8080, () => {
    console.log('Http server redirecting.')
  })
}

// For testing purposes
export default server

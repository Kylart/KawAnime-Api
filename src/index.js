import '@babel/polyfill'
import { createServer } from 'http'

import router from './router'

const port = process.env.PORT || 3000

const server = createServer(router)

if (process.env.NODE_ENV !== 'test') {
  server.listen(port, (err) => {
    if (err) {
      return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
  })
}

// For testing purposes
export default server

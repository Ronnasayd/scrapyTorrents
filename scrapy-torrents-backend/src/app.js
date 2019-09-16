const express = require('express')
const cors = require('cors')
const routes = require('./routes')

class App {
  constructor () {
    this.express = express()
    this.middlewares()
  }

  middlewares () {
    this.express.use(cors())
    this.express.use(express.json())
    this.express.use('/api', routes)
  }
}
module.exports = new App().express

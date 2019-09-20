const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const path = require('path')

class App {
  constructor () {
    this.express = express()
    this.middlewares()
  }

  middlewares () {
    this.express.use(
      '/static',
      express.static(path.resolve(__dirname, 'static'))
    )
    this.express.use(cors())
    this.express.use(express.json())
    this.express.use('/api', routes)
    this.express.get('/', (req, res) => {
      res.render('index.html')
    })
  }
}
module.exports = new App().express

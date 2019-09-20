const app = require('./app')
const nunjucks = require('nunjucks')
const mongoose = require('mongoose')
const path = require('path')

require('dotenv').config()
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
nunjucks.configure(path.resolve(__dirname, 'views'), {
  autoescape: true,
  express: app
})

app.listen(process.env.PORT || 3333)

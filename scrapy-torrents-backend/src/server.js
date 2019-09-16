const app = require('./app')

const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })

app.listen(process.env.PORT || 3333)

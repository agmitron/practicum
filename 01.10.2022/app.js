const express = require('express')
const getMessages = require('./controllers')
const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`)
})

app.get('/', getMessages)


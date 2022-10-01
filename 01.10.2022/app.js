const express = require('express')
const getMessages = require('./controllers/get-messages')
const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)
})

app.get('/messages', getMessages)
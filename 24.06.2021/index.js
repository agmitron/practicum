const express = require('express')
const mongoose = require('mongoose')

const authRoutes = require('./routes/auth.routes')

const app = express()

app.use(express.json())
app.use('/auth', authRoutes)


const PORT = 5000

async function start() {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })

    await mongoose.connect('mongodb://localhost:27017/auth', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  } catch (error) {
    console.error(`Init application error: ${error}`)
  }
}


start()

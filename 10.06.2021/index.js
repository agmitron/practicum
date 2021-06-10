const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const userRoutes = require('./routes/user')
const mongoose = require('mongoose')

const app = express()

const PORT = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const staticPath = path.join(__dirname, 'client', 'build')
app.use(express.static(staticPath))
app.use('/images', express.static(path.join(__dirname, 'img')))

app.use('/users', userRoutes)

async function start() {
    await mongoose.connect('mongodb://localhost/project', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
}

app.listen(PORT, () => {
    console.log('server has started')
})

start()
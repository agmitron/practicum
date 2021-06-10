const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const userRouter = require('./routes/users.js')
const PORT = 3000

mongoose.connect('mongodb://localhost/myproject', {
    useNewUrlParser: true, 
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})



const staticPath = path.join(__dirname, 'client', 'build')
app.use(express.static(staticPath))
app.use('/images', express.static(path.join(__dirname, 'img')))
app.use(userRouter)

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})
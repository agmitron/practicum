const express = require('express')
const PORT = 3001
const app = express()
const bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid');
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

const data = ([
  { title: 'Vegemite', price: 1.39, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWOSIPZtdfcujVO0RiFv29KWj1WwOTxnqYdA&usqp=CAU' },
  { title: 'Buzz Lightyear', price: 11.99, img: 'https://static.wikia.nocookie.net/disney/images/7/74/Profile_-_Buzz_Lightyear.jpeg' },
  { title: 'Boston Celtics Vintage Cap', price: 2.50, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZzWivcwCbCtTsIMaKHTySYBx8hKkCMLor9g&usqp=CAU' },
  { title: 'Mario Kart Vintage', price: 2.19, img: 'https://sc01.alicdn.com/kf/Hcf5a987813f64603a231d52fe32c241en/234774818/Hcf5a987813f64603a231d52fe32c241en.jpg_.webp' }
]).map(item => ({ ...item, id: uuidv4() }))

app.get('/', (req, res) => {
  res.send(data)
})

app.post('/', (req, res) => {
  const item = req.body
  const newItem = { ...item, id: uuidv4() }
  data.push(newItem)
  res.send(newItem)
})

app.delete('/:id', (req, res) => {
  const { id } = req.params
  const itemIndex = data.findIndex(item => String(item.id) === String(id))
  const item = data.find(item => String(item.id) === String(id))
  if (itemIndex === -1) {
    return res.status(404).send({ message: 'Not Found' })
  }
  data.splice(itemIndex, 1)
  res.send(item)
})

app.listen(PORT, _ => {
  console.log(`LISTENING TO PORT ${PORT}`)
})
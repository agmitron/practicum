const router = require('express').Router()
const User = require('../models/user')

router.get('/users', (req, res) => {
    User.find({})
        .then(users => res.send({ users }))
        .catch(error => res.send({ error }))

})

router.get('/users/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => res.send({ user }))
        .catch(error => res.status(500).send({ error }))
})

router.put('/users/:id', (req, res) => {
    User.findOneAndUpdate(req.params.id)
        .then(user => res.send({ message: 'Updated successfully', user }))
        .catch(error => res.send({ error }))
})

router.delete('/users/:id', (req, res) => {
    User.findOneAndDelete(req.params.id)
        .then(user => res.send({ message: 'User removed successfully', user }))
        .catch(error => res.send({ error }))
})

router.post('/users', (req, res) => {
    User.create({
        name: 'Вася',
        gender: 'м',
        about: 'Я человек',
        hobbies: [
            'игра на гитаре',
            'компьютерные игры',
            'рыбалка'
        ],
        age: 28,
        pet: {
            name: 'Бобик',
            age: 4
        }
    })
        .then(user => res.send({ user }))
        .catch(error => res.status(500).send({ error }))
})

module.exports = router
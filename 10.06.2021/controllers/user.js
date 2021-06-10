const User = require('../models/user')

module.exports = {
    find(req, res) {
        User.find({})
            .then(users => res.send({ users }))
            .catch(error => res.send({ error }))
    },
    findOne(req, res) {
        User.findById(req.params.id)
            .then(user => res.send({ user }))
            .catch(error => res.send({ error }))
    },
    create(req, res) {
        const {
            name,
            gender,
            about,
            hobbies,
            age,
            car,
            pet
        } = req.body

        User.create({
            name,
            gender,
            about,
            hobbies,
            age,
            car,
            pet,
        })
            .then(user => res.send({ user }))
            .catch(error => res.status(500).send({ error }))
    },
    update(req, res) {
        const {
            name,
            gender,
            about,
            hobbies,
            age,
            car,
            pet
        } = req.body

        User.findByIdAndUpdate(req.params.id, {
            name,
            gender,
            about,
            hobbies,
            age,
            car,
            pet,
        })
            .then(user => res.send({ user }))
            .catch(error => res.status(500).send({ error }))
    },
    remove(req, res) {
        User.findByIdAndDelete(req.params.id)
            .then(user => res.send({ user }))
            .catch(error => res.status(500).send({ error }))
    }
}
const router = require('express').Router()

const { find, findOne, create, update, remove } = require('../controllers/user')

// CRUD

// Create - POST
// Read - GET
// Update - PUT
// Delete - DELETE

// /users/

router.get('/', find)

router.get('/:id', findOne)

router.post('/', create)

router.put('/:id', update)

router.delete('/:id', remove)



module.exports = router
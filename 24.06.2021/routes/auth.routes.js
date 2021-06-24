const router = require('express').Router()
const authMiddleware = require('../middlewares/auth.middleware')
const requireRoles = require('../middlewares/role.middleware')

const controller = require('../controllers/auth.controller')

// 4. Эндпоинт с ограничениями 2
// 5. Эндпоинт для создания ролей


router.post('/register', controller.register)

// Аутентификация
router.post('/login', controller.login)

// /auth/users
router.get('/users', [requireRoles(['USER']), authMiddleware], controller.getUsers)


module.exports = router

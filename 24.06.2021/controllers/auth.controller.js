const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/User')
const Role = require('../models/Role')

const generateAccessToken = (id, roles) => {
  const payload = { id, roles }

  return jwt.sign(payload, 'secret', {
    expiresIn: '24h'
  })
}

class AuthController {
  async register(req, res) {
    try {
      const { login, password } = req.body

      const candidate = await User.findOne({ login })

      if (candidate) {
        return res.status(409).json({
          message: 'Such user has already been existed'
        })
      }

      const userRole = await Role.findOne({ value: 'USER' })

      const hashedPassword = bcrypt.hashSync(password, 12)

      const user = new User({
        login,
        password: hashedPassword,
        roles: [userRole.value]
      })

      await user.save()

      return res.json({ message: 'User has been successfully created.', user })

    } catch (error) {
      return res.status(400).json({ error })
    }
  }

  async login(req, res) {
    try {
      const { login, password } = req.body

      const user = await User.findOne({ login })

      if (!user) {
        return res.status(400).json({
          message: 'Such user doesn\'t exist.'
        })
      }

      const isPasswordCorrect = bcrypt.compareSync(password, user.password)

      if (!isPasswordCorrect) {
        return res.status(400).json({
          message: 'Incorrect login or password'
        })
      }

      return res.json({
        token: generateAccessToken(user._id, user.roles)
      })

    } catch (error) {
      return res.status(400).json({ error })
    }
  }

  async getUsers(req, res) {
    try {
      return res.json({
        users: await User.find({})
      })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error })
    }
  }
}

module.exports = new AuthController()

const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    try {
      // Bearer <token>
      const token = req.headers.authorization.split(' ')[1]

      if (!token) {
        return res.status(401).json({
          message: 'You have to sign in'
        })
      }

      req.user = decodedData
      next()
    } catch (error) {
      console.error(`authMiddleware error: ${error}`)
      return res.status(500).json({
        error: 'auth middleware error'
      })
    }
  }

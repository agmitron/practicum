const pool = require('../pool')

const getMessages = (req, res) => {
  const {offset = 0, limit = 10} = req.query

  pool.query('SELECT * from messages LIMIT $1 OFFSET $2', [limit, offset], (err, result) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log(result.rows[0])
      res.send({ messages: result.rows })
    }
  })
}

module.exports = getMessages
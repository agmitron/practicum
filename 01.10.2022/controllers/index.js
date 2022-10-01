const pool = require('../pools')

const getMessages = (request, response) => {
  const { limit = 10, offset = 0 } = request.query;
  pool.query('SELECT * FROM messages LIMIT $1 OFFSET $2', [limit, offset], (error, result) => {
    if (error) {
      console.log(error.stack)
      response.send(500);
    } else {
      console.log(result.rows)
      response.send({ messages: result.rows })
    }
  })
}

module.exports = getMessages
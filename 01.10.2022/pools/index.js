const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'webinar0110_user',
  host: 'localhost',
  database: 'webinar0110',
  password: '',
  port: 5432,
})

module.exports = pool
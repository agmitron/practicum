const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'webinar_user',
  host: 'localhost',
  database: 'webinar_db',
  password: 'mypass',
  port: 5432,
})

module.exports = pool
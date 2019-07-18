//jshint esversion: 6

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'komo',
  host: 'localhost',
  database: 'event_tracker',
  password: 'event',
  port: 5432,
})


const getTasks = (request, response) => {
    pool.query('SELECT * FROM task ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  
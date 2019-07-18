//jshint esversion: 6

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'komo',
  host: 'localhost',
  database: 'event_tracker',
  password: 'event',
  port: 5432,
})

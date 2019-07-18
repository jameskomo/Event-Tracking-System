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

  const getTaskById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM task WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


  const createTask = (request, response) => {
    const { task_name, task_message, task_time, display_message, task_colors } = request.body
  
    pool.query('INSERT INTO task (task_name, task_message, task_time, display_message, task_colors) VALUES ($1, $2, $3, $4, $4)', [task_name, task_message, task_time, display_message, task_colors ], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Task added with ID: ${result.insertId}`)
    })
  }
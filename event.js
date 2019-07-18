//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
    response.json({ info: 'This is an event tracker based on Node.js, Express, and Postgres API' })
  });

  app.get('/tasks', db.getTasks)
  app.get('/tasks/:id', db.getTaskById)
  app.post('/tasks', db.createTask)
  app.put('/tasks/:id', db.updateTask)
  app.delete('/tasks/:id', db.deleteTask)


app.listen(port, () => {
    console.log(`Event Application running on port ${port}.`);
})

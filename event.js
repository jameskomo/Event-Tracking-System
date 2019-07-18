//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');

const app = express()
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


app.listen(port, () => {
    console.log(`Event Application running on port ${port}.`);
})

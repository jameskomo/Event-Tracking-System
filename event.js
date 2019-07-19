//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
var schedule = require('node-schedule');

const app = express()
const db = require('./query')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
    response.json({ info: 'This is an event tracker based on Node.js, Express, and Postgres API' })
    response.sendFile
  });

  app.get('/tasks', db.getTasks)
  app.get('/tasks/:id', db.getTaskById)
  app.post('/tasks', db.createTask)
  app.put('/tasks/:id', db.updateTask)
  app.delete('/tasks/:id', db.deleteTask)



// Setting up cron jobs for Task StaticRange, stop and reporting based on *second    *minute    *hour    * day of month   *day    *day of week(0 or7 sunday to)


  var start_tasks = schedule.scheduleJob('01 * * * * *', function(){
    console.log('The answer to life, the universe, and everything!');
    // Starting Servers
    function randomServersStart(min,max) // min and max included
    {
        return Math.floor(Math.random()*(max-min+1)+min);
        var start_servers=randomServersStart(10, 20);
        console.log("Start " + start_servers + " servers");
        
    }
    
      // Task ends


  // Stopping Servers
  function randomServersStop(min,max) // min and max included
  {
      return Math.floor(Math.random()*(max-min+1)+min);
      var stop_servers=randomServersStart(5, start_servers);
      console.log("Start " + start_servers + " servers");
      
  }
  // Task ends

  // Task Reporting
    var server_reporting=start_servers;
 
  // Task ends

  
  });

// Cron job end





app.listen(port, () => {
    console.log(`Event Application running on port ${port}.`);
})

var utilModule = require('./util');
var bodyParser = require('body-parser');
var reverseString = utilModule.reverseString;
// Imports the express Node module.
var express = require('express');
//Creates an Express server.
var app = express();
app.use(bodyParser.text());

// Defines what happens when it receives the 'GET /' request
app.get('/',function(req,res) {
  res.send('Hello World!');
});

//Starts the Server on port 3000!
app.listen(3000,function() {
  console.log('Example app listening on port 3000');
});

// Handle Post /reverse [data]
app.post('/reverse',function(req,res) {
  if (typeof(req.body) === 'string') {
    var reversed = reverseString(req.body);
    res.send(reversed);
  } else {
    res.status(400).end();
  }
})

var express = require('express');
var server = express();

// This will be call by APPLE TO VERIFY THE APP-SITE-ASSOCIATION 
// Make the 'apple-app-site-association' accessable to apple to verify the association
server.get('/.well-known/apple-app-site-association', function(request, response) {
  response.setHeader('content-type', 'application/json ');
  response.sendFile(__dirname +  '/apple-app-site-association');
});

// HOME PAGE
server.get('/home', function(request, response) {
  response.sendFile(__dirname +  '/home.html');
});

server.listen(8100, function () {
  console.log("started at 8100");
});
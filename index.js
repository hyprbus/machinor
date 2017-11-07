var express = require('express')
var app = express()
var path = require('path')

app.use(express.static(__dirname))
app.use('/', function(req, res) {
  res.redirect(301, '/dist');
});

app.listen(8080);
console.log("Node server listening on port 8080...")
console.log(__dirname)

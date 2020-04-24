var express = require('express')
var app = express()

app.get('/', function (req, res) {
  console.log("Server running")
  res.send('hello world')
})

app.listen(3000)
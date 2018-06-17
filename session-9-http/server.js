const express = require('express')
const server = express()

let count = 0

server.use(express.static('html'))

server.get('/api/time', function (request, response) {
  response.send({
    time: new Date()
  })
})

server.get('/api/counter', function (request, response) {
  response.send({
    count: count
  })
})

server.post('/api/counter', function (request, response) {
  count++
  response.send()
})

server.listen(3000)

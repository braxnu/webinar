const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

app.use('/', express.static(
  path.resolve('../chat/build')
))

app.use(bodyParser.json())

const statements = []

app.get('/statements', (req, res) => {
  res.send(statements)
})

app.post('/statements', (req, res) => {
  statements.push(req.body.statement)
  res.send()
})

app.listen(3010)

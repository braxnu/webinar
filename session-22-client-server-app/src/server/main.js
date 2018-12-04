const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000

const history = []

app.use(express.static('src/client'))

app.use(bodyParser.json())

app.post('/api/bmi', (req, res) => {
  history.push({
    bmi: req.body.bmi,
    date: new Date().toISOString(),
  })

  res.send({ok: true})
})

app.get('/api/bmi', (req, res) => {
  res.send(history)
})

app.listen(port, () => console.log(
  `Listening on port ${port}`
))

const request = require('request')

const url = 'https://ocdn.eu/pulscms-transforms/1/M-ZktkqTURBXy8xMGExYWVlN2I2NDBmNDcxODAyZGZkM2E2Y2M5MWQzOC5qcGVnkpUDAETNB9DNBGWTBV87'

function callback(error, response, body) {
  if (error) {
    console.log(error)
    return
  }

  console.log('pobrano obrazek')
  console.log(body.length)
}

console.log('before')
request(url, callback)
console.log('after')

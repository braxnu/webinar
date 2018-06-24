// request('http://obraze.com', function (data) {
//   // ...
// })

const fetch = require('node-fetch')
const url = 'https://ocdn.eu/pulscms-transforms/1/M-ZktkqTURBXy8xMGExYWVlN2I2NDBmNDcxODAyZGZkM2E2Y2M5MWQzOC5qcGVnkpUDAETNB9DNBGWTBV87'

const promise = fetch(url)

console.log('before')

promise
  .then(function () {
    console.log('pobrano obrazek 1')
  })
  .then(function () {
    console.log('pobrano obrazek 2 ')
  })
  .then(function () {
    console.log('pobrano obrazek 3')
  })
  .then(function () {
    console.log('pobrano obrazek 4')
  })
  .then(function () {
    console.log('pobrano obrazek 5')
  })

// promise.then(playSound)
// promise.then(showIcon)
// promise.then(shdiaush)
// promise.then(sadasd)

// console.log('after')

// showLoadingIcon()
//   .then(requestEmails)
//   .then(function () {

//   })
//   .then(playLoadingSound)
//   .then(playLoadingSound)
//   .then(hideLoadingIcon)
//   .then(updateMessageList)

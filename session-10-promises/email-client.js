const fetchEmail = require('./fetch-email')

console.log('uwaga! pobieram!')
const promise = fetchEmail()

promise
  .then(function () {
    console.log('maile pobrane')
  })
  .then(function () {
    console.log('ikonka pokazana')
  })
  .then(function () {
    console.log('gra dzwięk')
  })

console.log('maile są pobierane...')

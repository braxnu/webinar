console.log('client ready')

function reloadTime () {
  fetch('/api/time')
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      document
        .querySelector('#time')
        .innerHTML = data.time
    })
}

reloadTime()

function reloadCounter () {
  fetch('/api/counter')
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      document
        .querySelector('#counter')
        .innerHTML = data.count
    })
}

reloadCounter()
setInterval(reloadCounter, 2000)

function postCounter () {
  fetch('/api/counter', {method: 'POST'})
    .then(reloadCounter)
}

document
  .querySelector('#count-button')
  .addEventListener('click', postCounter)

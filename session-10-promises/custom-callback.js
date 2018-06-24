
function wait(seconds, callback) {
  // work work...
  setTimeout(callback, seconds * 1000)
}

function potem() {
  console.log('potem')
}


console.log('before')
wait(2, potem)
console.log('after')



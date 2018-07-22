const c = 3

function foo () {
  const a = 1

  function bar () {
    const b = 2

    return b
  }

  return [a, bar()]
}

// console.log(foo()[0], foo()[1], c)

function add (a) {
  const b = 2

  return a + b + c
}

console.log( add(3) )


// function getCounter () {
//   let count = 0

//   return {
//     read: () => count,
//     bump: () => {
//       count++
//     }
//   }
// }

// const myCounter = getCounter()

// myCounter.bump()
// myCounter.bump()
// myCounter.bump()
// myCounter.bump()
// console.log(myCounter.read())

function getTicker () {
  let count = 0

  setInterval(() => { count++ }, 1000)

  return () => count
}

const tick = getTicker()

// setInterval(() => {
//   console.log(tick())
// }, 500)

console.log(tick)

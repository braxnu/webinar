const str = ' gggg '

// console.log(str.length)

// if (str.trim()) {
//   console.log('string NOT empty')
// } else {
//   console.log('EMPTY')
// }

// console.log(str)
// console.log(str.trim())

// console.log('Good ' + ' morning')

// const sentence = 'Ala ma kota'

// console.log(
//   sentence.includes('wapno')
// )

// if (sentence.indexOf('kot') !== -1) {

// }

// const imie = 'włodek'
// const imie2 = 'jadzia'
// const przywitanie = `czesc ${imie} i ${imie2}`

// console.log(przywitanie)

const zdanie = 'terminator ma motor, a glonojad ma przyssawke'

// const slowa = zdanie.split(' ')

// const szukane = slowa.filter(slowo => slowo === 'ma')

// console.log(szukane.length)

console.log(
  zdanie
    .split(' ')
    .filter(s => s === 'ma')
    .length
)

console.log(
  zdanie
    .split('')
    .filter(s => s === 't')
    .length
)


// var count = 0

// for (var i = 0; i < slowa.length; i++) {
//   if (slowa[i] === 'ma') {
//     count++
//   }
// }

// console.log(count)

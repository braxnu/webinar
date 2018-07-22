"21-010"

function validKod(kod) {
  return !isNaN(kod[0]) &&
    !isNaN(kod[1]) &&
    !isNaN(kod[3]) &&
    !isNaN(kod[4]) &&
    !isNaN(kod[5]) &&
    kod.length === 6
}

console.log(validKod('21 010'))

'LU 12345'
'LUL G2345'

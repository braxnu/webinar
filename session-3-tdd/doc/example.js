function dodaj(a, b) {
  // return Math.abs(a) + Math.abs(b)
  return a + b
}


function testDodaj_1() {
  var wynik = dodaj(2, 2)

  if (wynik === 4) {
    console.log('ok')
  } else {
    console.error('wynik powinien byc 4 a jest', wynik)
  }
}

function testDodaj_2() {
  var wynik = dodaj(0, 2)

  if (wynik === 2) {
    console.log('ok')
  } else {
    console.error('wynik powinien byc 2 a jest', wynik)
  }
}

function testDodaj_3() {
  var wynik = dodaj(-1, -1)

  if (wynik === -2) {
    console.log('ok')
  } else {
    console.error('wynik powinien byc -2 a jest', wynik)
  }
}

function testDodaj_4() {
  var wynik = dodaj(0, 0)

  if (wynik === 0) {
    console.log('ok')
  } else {
    console.error('wynik powinien byc 0 a jest', wynik)
  }
}

function testDodaj_5() {
  var wynik = dodaj(-2, 2)

  if (wynik === 0) {
    console.log('ok')
  } else {
    console.error('wynik powinien byc 0 a jest', wynik)
  }
}

testDodaj_1()
testDodaj_2()
testDodaj_3()
testDodaj_4()
testDodaj_5()

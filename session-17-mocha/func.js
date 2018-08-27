function add() {}

// console.log(typeof add)

function przedstaw() {
  console.log('jestem', this.imie)
}

var czlowiek = {
  imie: 'Tytus',
  nazwisko: 'Andronicus'
}

czlowiek.przedstawSie = przedstaw.bind(czlowiek)

var pies = {
  imie: 'Brutus',
  przedstawSie: przedstaw
}

var mucha = {
  imie: 'Bzzz',
  przedstawSie: pies.przedstawSie
}

var bakteria = {
  imie: 'pippi',
  przedstawSie: czlowiek.przedstawSie
}

czlowiek.przedstawSie()
pies.przedstawSie()
mucha.przedstawSie()
bakteria.przedstawSie()

var pcz = bakteria.przedstawSie

pcz()

function przedstaw (slowo, liczba) {
  console.log('jestem ' + this.imie, slowo, liczba)
}

const lista = [
  { imie: 'Zbyszek' },
  { imie: 'Zosia' },
  { imie: 'Mariola' },
  { imie: 'Rafal' },
  { imie: 'Michal' },
]

// przedstaw.call()
// przedstaw.apply()

for (let i = 0; i < lista.length; i++) {
  // lista[i].przedstaw = przedstaw
  // lista[i].przedstaw()

  // przedstaw.call(lista[i], 'hej', 45)
  przedstaw.apply(lista[i], ['hej', 45])
}

// console.log(lista)

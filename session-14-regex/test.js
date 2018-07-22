
var czlowiek = {
  imie: 'bolek',
  przedtawSie: function() {
    console.log('jestem ' + this.imie)
  },
}

class Czlowiek {
  constructor(imie) {
    this.imie = imie
  }

  przedtawSie() {
    console.log('jestem ' + this.imie)
  }
}

const a = new Czlowiek('Bolek')
const b = new Czlowiek('Zosia')

a.przedtawSie()
b.przedtawSie()

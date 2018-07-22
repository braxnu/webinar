function Czlowiek (imie) {
  this.imie = imie
}

Czlowiek.prototype = {
  przedtawSie: function() {
    console.log('jestem ' + this.imie)
  }
}

const a = new Czlowiek('Bolek')
const b = new Czlowiek('Zosia')

a.przedtawSie()
b.przedtawSie()

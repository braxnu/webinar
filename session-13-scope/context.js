function przedstaw () {
  console.log(
    'czesc, jestem ' + this.imie +
    ', mam ' + this.wiek + ' lat'
  )
}

const czlowiek = {
  imie: 'Staszek',
  wiek: 54,
  przedstaw: przedstaw
}

const czlowieczka = {
  imie: 'Mariola',
  wiek: 21,
  przedstaw: przedstaw
}

czlowiek.przedstaw()
czlowieczka.przedstaw()

const maly = {
  imie: 'Kamcio',
  wiek: 7,
}

maly.przedstaw = przedstaw.bind(maly)

const duzy = {
  imie: 'Bobek',
  wiek: 12,
  przedstaw: czlowiek.przedstaw
}

maly.przedstaw()
duzy.przedstaw()

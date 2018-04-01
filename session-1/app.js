var guzikPowieksz = document.querySelector("button.plus")
var guzikPomniejsz = document.querySelector("button.minus")
var widokLicznika = document.querySelector("span.current")
var widokLicznikaTotal = document.querySelector("span.total")

var licznik = 0
var licznikTotal = 0

guzikPomniejsz.disabled = true

guzikPowieksz.addEventListener("click", function() {
  licznikTotal++
  widokLicznikaTotal.innerHTML = licznikTotal

  if (licznik < 30) {
    licznik = licznik + 1
    widokLicznika.innerHTML = licznik
  }

  if (licznik > 20) {
    widokLicznika.style.backgroundColor = 'red'
  }

  if (licznik === 30) {
    alert('wyczerpałeś limit')
    guzikPowieksz.disabled = true
  }

  guzikPomniejsz.disabled = false
})

guzikPomniejsz.addEventListener("click", function() {
  licznikTotal++
  widokLicznikaTotal.innerHTML = licznikTotal

  if (licznik > 0) {
    licznik = licznik - 1
    widokLicznika.innerHTML = licznik
  }

  if (licznik === 0) {
    guzikPomniejsz.disabled = true
  }

  if (licznik <= 20) {
    widokLicznika.style.backgroundColor = ""
  }

  guzikPowieksz.disabled = false
})

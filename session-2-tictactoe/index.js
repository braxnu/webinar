/*
 0 | 1 | 2
-----------
 3 | 4 | 5
-----------
 6 | 7 | 8

0. zaktualizuj widok
1. postaw x
1a. zaktualizuj widok
2. sprawdz czy x wygral
3. jesli x wygral, to ogłos i stop
3a. zaktualizuj widok
4. postaw o
4a. zaktualizuj widok
5. sprawdz czy o wygral
6. jesli o wygral to oglos i stop
7. goto 0.

*/

var board
var currentPlayer
var score

function reset() {
  currentPlayer = 'x'
  board = [
    '', '', '',
    '', '', '',
    '', '', ''
  ]
}

function resetMecz() {
  score = {
    x: 0,
    o: 0
  }
}

function czyLinia(a, b, c, znak) {
  return board[a] === znak && board[b] === znak && board[c] === znak
}

function czyWygral(znak) {
  return (
    czyLinia(0, 1, 2, znak) ||
    czyLinia(3, 4, 5, znak) ||
    czyLinia(6, 7, 8, znak) ||
    czyLinia(0, 3, 6, znak) ||
    czyLinia(1, 4, 7, znak) ||
    czyLinia(2, 5, 8, znak) ||
    czyLinia(0, 4, 8, znak) ||
    czyLinia(2, 4, 6, znak)
  )
}

function czyWygralMecz(znak) {
  return score[znak] === 3
}

function czyRemis() {
  return board.every(value => value)
}

function postaw(znak, pole) {
  if (board[pole]) {
    return
  }

  // postaw znak na planszy
  board[pole] = znak
  rysuj()

  // sprawdz czy aktualny gracz wygral
  if (czyWygral(znak)) {
    // gracz wygral
    setTimeout(function () {
      alert('wygral ' + znak)
      score[znak]++

      if (czyWygralMecz(znak)) {
        alert('zwyciezca meczu jest ' + znak)
        resetMecz()
      }

      reset()
      rysuj()
    }, 0)
  } else if (czyRemis()) {
    setTimeout(function () {
      alert('remis')
      reset()
      rysuj()
    }, 0)
  } else {
    // gracz nie wygral, zmien gracza
    if (znak === 'x') {
      currentPlayer = 'o'
    } else {
      currentPlayer = 'x'
    }
  }

  rysuj()
}

function rysuj() {
  document.querySelector('#player').innerHTML = currentPlayer
  document.querySelector('#x').innerHTML = score.x
  document.querySelector('#o').innerHTML = score.o

  for (var i = 0; i < 9; i++) {
    document.querySelector('#p' + i).innerHTML = board[i]
  }
}

function zapisz(pole) {
  document.querySelector('#p' + pole).addEventListener('click', function () {
    postaw(currentPlayer, pole)
  })
}

resetMecz()
reset()
rysuj()

for (var i = 0; i < 9; i++) {
  zapisz(i)
}

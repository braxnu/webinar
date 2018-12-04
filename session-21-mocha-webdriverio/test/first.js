const expect = require('chai').expect

it('dodawanie działa', function() {
  expect(2 + 2).equals(4)
})

it('odejmowanie działa', function() {
  expect(3 - 3).equals(0)
})

it('mnożenie działa', function() {
  expect(3 * 0).equals(0)
})

it('wiecej niz 10', function() {
  const score = 12

  expect(score).to.be.above(10)
})

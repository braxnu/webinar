const expect = require('expect.js')

const {
  add,
  substract,
  multiply,
  divide
} = require('../src/math')


describe('add function', function() {
  it('adds two positve numbers', function() {
    const result = add(2, 3)

    expect(result).to.eql(5)
  })

  it('adds two negative numbers', function() {
    const result = add(-1, -6)

    expect(result).to.eql(-7)
  })

  it('adds two zeroes', function() {
    const result = add(0, 0)

    expect(result).to.eql(0)
  })

  it('adds a positive and a negative number', function() {
    const result = add(-4, 4)

    expect(result).to.eql(0)
  })
})

describe('substract function', function() {
  it('substracts two positve numbers, first larger', function() {
    const result = substract(4, 2)

    expect(result).to.eql(2)
  })

  it('substracts two positve numbers, second larger', function() {
    const result = substract(3, 5)

    expect(result).to.eql(-2)
  })

  it('substracts two zeroes', function() {
    const result = substract(0, 0)

    expect(result).to.eql(0)
  })
})

describe('multiply function', function() {
  it('multiplies two positve numbers', function() {
    const result = multiply(4, 2)

    expect(result).to.eql(8)
  })

  it('multiplies zero and positve number', function() {
    const result = multiply(0, 5)

    expect(result).to.eql(0)
  })

  it('multiplies a negative and a positve number', function() {
    const result = multiply(2, -3)

    expect(result).to.eql(-6)
  })

  it('multiplies two negative numbers', function() {
    const result = multiply(-1, -3)

    expect(result).to.eql(3)
  })
})

describe('divide function', function() {
  it('divides two positve numbers', function() {
    const result = divide(4, 2)

    expect(result).to.eql(2)
  })

  it('divides two indentical numbers', function() {
    const result = divide(5, 5)

    expect(result).to.eql(1)
  })

  it('divides zero by any number', function() {
    const result = divide(0, 8)

    expect(result).to.eql(0)
  })

  it('divides two opposite numbers', function() {
    const result_1 = divide(-6, 3)
    const result_2 = divide(4, -2)

    expect(result_1).to.be.lessThan(0)
    expect(result_2).to.be.lessThan(0)
  })
})


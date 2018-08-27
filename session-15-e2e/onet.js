const expect = require('expect')
const webdriverio = require('webdriverio')

const options = {
  desiredCapabilities: {
    browserName: 'chrome'
  }
}

describe('wyszukiwarka onet', function () {
  it('zwraca 10 wyników', function () {
    this.timeout(60 * 1000)

    return webdriverio
      .remote(options)
      .init()
      .url('http://www.onet.pl')
      .setValue('.searchQueryInput', 'patelnia')
      .keys(['Enter'])
      .elements('.boxResult2 .box')
      .then(function(result) {
        expect(result.value.length).toEqual(10)
      })
      .end()
      .catch(function(err) {
        console.log(err);
      });
  })
})

describe('wyszukiwarka wp', function () {
  it('zwraca 10 wyników', function () {
    this.timeout(60 * 1000)

    return webdriverio
      .remote(options)
      .init()
      .url('http://www.wp.pl')
      .setValue('#q', 'patelnia')
      .keys(['Enter'])
      .elements('.bxSp')
      .then(function(result) {
        expect(result.value.length).toEqual(10)
      })
      .end()
      .catch(function(err) {
        console.log(err);
      });
  })
})

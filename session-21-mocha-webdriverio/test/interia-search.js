const expect = require('chai').expect
const webdriverio = require('webdriverio')
const chromedriver = require('chromedriver')

const port = 9515

const args = [
  '--url-base=wd/hub',
  `--port=${port}`
]

const options = {
    port,
    desiredCapabilities: {
        browserName: 'chrome'
    }
}


it('szukanie butów', function(done) {
  this.timeout(30000)
  chromedriver.start(args)

  const browser = webdriverio
    .remote(options)
    .init()
    .url('http://interia.pl')
    .click('.rodo-popup-agree')
    .setValue('.search-text', 'buty')
    .click('.search-submit')
    .elements('.search-results-element').then(function(result) {
      expect(result.value.length).to.equal(10)
    })
    .catch(function(err) {
        console.log(err)
        chromedriver.stop()
        browser.end()
    })
    .end()
    .call(function() {
      chromedriver.stop()
    })
    .call(done)
})

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

chromedriver.start(args)

const browser = webdriverio
    .remote(options)
    .init()
    .url('http://onet.pl')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .pause(5000)
    .catch(function(err) {
        console.log(err)
        browser.end()
    })
    .end()

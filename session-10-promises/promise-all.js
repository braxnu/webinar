const fetchEmail = require('./fetch-email')
const fetchAds = require('./fetch-ads')
const fetchNews = require('./fetch-news')

showLoadeingScreen()

Promise
  .all([
    fetchEmail(),
    fetchAds(),
    fetchNews()
  ])
  .then(hideLoadingScreen)
  .then(showAppInterface)

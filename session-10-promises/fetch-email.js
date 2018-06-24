module.exports = function () {
  return new Promise(function (resolve) {
    setTimeout(resolve, 2000)
  })
}

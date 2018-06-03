function getNumber (value) {
  return parseInt(value) || 0
}

function handleClick (button, input, calc) {
  button.addEventListener('click', function () {
    const count = getNumber(input.value)

    input.value = calc(count)
  })
}

module.exports = {
  getNumber,
  handleClick
}

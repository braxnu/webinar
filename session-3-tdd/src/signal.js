module.exports = () => {
  let current = 'red'
  let goingToGreen = true

  return {
    change: () => {
      if (current === 'red') {
        current = 'yellow'
      } else if (current === 'yellow') {
        if (goingToGreen) {
          current = 'green'
          goingToGreen = false
        } else {
          current = 'red'
          goingToGreen = true
        }
      } else if (current === 'green') {
        current = 'yellow'
      }
    },

    getCurrent: () => {
      return current
    },
  }
}

const colors = [
  'red',
  'yellow',
  'green',
  'yellow',
]

module.exports = () => {
  let current = 0

  return {
    change: () => {
      current++

      if (current === 4) {
        current = 0
      }
    },

    getCurrent: () => {
      return colors[current]
    },
  }
}

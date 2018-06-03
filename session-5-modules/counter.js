const { add, subst, multi2 } = require('./math')
const { handleClick } = require('./utils')

const input = document.querySelector('#counter')
const addButton = document.querySelector('#add')
const substButton = document.querySelector('#subst')
const multi2Button = document.querySelector('#multi-2')

handleClick(addButton, input, (count) => add(count, 1))
handleClick(substButton, input, (count) => subst(count, 1))
handleClick(multi2Button, input, (count) => multi2(count))

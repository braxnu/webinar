#!/usr/bin/env node

const fs = require('fs')
const params = require('commander')
const cwd = process.cwd()

params
  .option('-m', 'Use megabytes')
  .option('-l --limit <n>', 'Limit files number')
  .parse(process.argv)

let list = fs.readdirSync(cwd)

if (params.limit) {
  list.length = params.limit
}

list.forEach(fileName => {
  const size = fs.statSync(fileName).size

  if (params.M) {
    console.log(fileName, (size / 1000) + 'M')
  } else {
    console.log(fileName, size)
  }
})

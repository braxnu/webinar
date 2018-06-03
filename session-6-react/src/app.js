import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Dog from './dog'

const appEl = document.querySelector('#app')

ReactDOM.render(
  <div>
    <Dog name='Burek' age='3' />
    <Dog name='Reksio' age='6' />
    <Dog name='Szarik' age='1' />
    <Dog name='Pluto' age='50' />
  </div>
, appEl)

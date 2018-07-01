import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Conversation (props) {
  return (
    <div className="conversation">
      {props.list.map(statement => (
        <div>
          <div className="statement">
            {statement}
          </div>
        </div>
      ))}
    </div>
  )
}

function StatementInput (props) {
  return (
    <input type="text"
      onKeyPress={ev => {
        if (ev.key === 'Enter') {
          props.onEnter(ev.target.value)
          ev.target.value = ''
        }
      }} />
  )
}

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      statements: []
    }
  }

  componentDidMount () {
    setInterval(() => {
      fetch('/statements')
        .then(resp => resp.json())
        .then(statements => {
          this.setState({
            statements: statements
          })
        })
    }, 1000)
  }

  send(statement) {
    fetch('/statements', {
      method: 'POST',
      body: JSON.stringify({
        statement: statement
      }),
      headers: {
        'content-type': 'application/json'
      },
    })
  }

  render () {
    return (
      <div>
        <Conversation list={this.state.statements} />
        <StatementInput onEnter={statement => {this.send(statement)}} />
      </div>
    );
  }
}

export default App;

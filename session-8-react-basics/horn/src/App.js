import React, { Component } from 'react';

const Button = props => (
  <button
    onClick={() => props.onClick()}
    >{props.label}</button>
)


const Flower = props => {
  if (props.level <= 0) {
    return 'DEAD'
  } else {
    return props.level + '%'
  }
}


class App extends Component {

  constructor (props) {
    super(props)

    this.state = {
      level: 90
    }
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({
        level: this.state.level - 1
      })
    }, 1000)
  }

  water () {
    this.setState({
      level: this.state.level + 50
    })
  }

  render() {
    return (
      <div className="App">
        <Flower level={this.state.level} />
        <Button label="Water" onClick={() => this.water()} />
      </div>
    )
  }
}

export default App;

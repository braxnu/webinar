import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Car = props => (
  <div style={{color: 'red'}}>
    {props.make},
    {props.model},
    {props.year}
  </div>
);

class Human extends React.Component {
  render () {
    return (
      <div>
        {this.props.name},
        {this.props.age},
        {this.props.place}
      </div>
    );
  }
}

class Counter extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      count: props.count
    }
  }

  increase () {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrease () {
    this.setState({
      count: this.state.count - 1
    })
  }

  render () {
    return (
      <div>
        <span style={{padding: 20}}>{this.state.count}</span>
        <button onClick={ () => this.increase() }>+</button>
        <button onClick={ () => this.decrease() }>-</button>
      </div>
    );
  }
}

function List () {
  return (
    <div>
      <Car make="BMW" model="X7" year="2014" />
      <Car make="Audi" model="S3" year="2016" />
      <Human name="Wanda" age="21" place="Taiwan" />
      <Counter count={0} />
    </div>
  );
}

class Todo extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      newItem: '',
      list: []
    }
  }

  remove (itemToRemove) {
    const newList = this.state.list.filter(
      item => item !== itemToRemove
    )

    this.setState({
      list: newList
    })
  }

  update (value) {
    this.setState({
      newItem: value
    })
  }

  add (newItem) {
    const newList = this.state.list.slice();

    if (newList.includes(newItem)) {
      return
    }

    if (!newItem) {
      return
    }

    newList.push(newItem)

    this.setState({
      list: newList,
      newItem: ''
    })
  }

  clear () {
    this.setState({
      list: []
    })
  }

  render () {
    return (
      <div>
        <input
          value={this.state.newItem}
          onChange={ ev => this.update(ev.target.value) }
          type="text" />

        <button
          onClick={ () => this.add(this.state.newItem) }>Add</button>

        <button onClick={ () => this.clear() }>Clear</button>

        {this.state.list.map((item, i) =>
          <div key={item + i}>
            {item}
            <button onClick={() => this.remove(item)}>x</button>
          </div>
        )}
      </div>
    )
  }
}

ReactDOM.render(
  <div>
    <List />
  </div>,
  document.getElementById('root')
);

registerServiceWorker();

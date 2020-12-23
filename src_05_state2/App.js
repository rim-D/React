import React from 'react';
import './App.css';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.add = this.add.bind(this); //바인딩
    this.minus = this.minus.bind(this);
    this.reset = this.reset.bind(this); //바인딩
  }

  add() {
    this.setState(current => ({ count: current.count + 1 }));
  }
  minus() {
    this.setState(current => ({ count: current.count - 1 }));
  }
  reset() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div>
        <h1>현재 카운트 {this.state.count}</h1>
        <button onClick={this.add} onMouseOut={this.reset}>
          +1
        </button>
        <button onClick={this.minus} onMouseOut={this.reset}>
          -1
        </button>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Counter } from './components/Counter';
import { Counter2 } from './components/Counter2';

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Counter2 />
      </div>
    );
  }
}

export default App;

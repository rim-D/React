import React from 'react';

export class Counter2 extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    console.log('add()====');
    // this.setState({ count: this.setState.count + 1});
    this.setState(current => ({ count: current.count + 1 }));
  };
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.add}>add</button>
      </div>
    );
  }
}

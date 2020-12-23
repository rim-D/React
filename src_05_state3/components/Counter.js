import React from 'react';

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0, // 증가값
    };
    this.add = this.add.bind(this);
  }
  add() {
    this.setState({ count: this.state.count + 1, userid: '펭수' });
  }
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <p>{this.state.userid}</p>
        <button onClick={this.add}>+1</button>
      </div>
    );
  }
}

import React from 'react';

export class Counter extends React.Component {
  constructor() {
    // 1. 생성자 작성
    super();
    this.state = {
      //2. state 변수 선언 및 초기화
      num: 0,
      number: 100,
    };
    this.add = this.add.bind(this); // this(statae)를 바인딩
  }

  add() {
    console.log('add()====');
    this.setState({
      // state값 변경시 this.setState({})를 반드시 이용
      num: this.state.num + 1, // 기존값(this.state.키) 접근을 1증가 this.setState함수 사용 업데이트
    });
  }
  render() {
    return (
      <div>
        <h2>{this.state.num}</h2>
        <p>{this.state.number}</p>
        <button onClick={this.add}>add</button>
      </div>
    );
  }
}

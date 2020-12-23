import React, { Component } from 'react';
import './child.css';
class Child extends Component {
  render() {
    return (
      <div>
        {/* 이벤트 카멜표기법 */}
        <button onClick={this.hanldEvent}>handelEvent클릭</button>
        <button onClick={this.hanldEvent2}>handelEvent2클릭</button>

        {/* React에서는 false를 반환해도 기본 동작을 방지할 수 없습니다. 반드시
          preventDefault를 명시적으로 호출해야 합니다. */}

        <a href='http://www.daum.net' onClick={this.hanldEvent3}>
          handelEvent3클릭
        </a>
        <button onClick={() => this.a()}>a()</button>
        <button onClick={e => this.b(e, 100)}>b()</button>
      </div>
    );
  }

  hanldEvent() {
    console.log('handelEvent====');
  }
  hanldEvent2() {
    console.log('handelEvent2====');
  }
  hanldEvent3(e) {
    e.preventDefault(); // 필수
    console.log('handelEvent3====');
  }
  a() {
    console.log('a=============');
  }
  b(x, y) {
    console.log('b===============');
  }
}

export default Child;

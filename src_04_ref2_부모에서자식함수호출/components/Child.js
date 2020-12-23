import React from 'react';

export class Child extends React.Component {
  info() {
    // 부모 컴포넌트에서 info()함수 호출
    console.log('ChildComponent info ======');
  }
  render() {
    return <div>ChildComponent</div>;
  }
}

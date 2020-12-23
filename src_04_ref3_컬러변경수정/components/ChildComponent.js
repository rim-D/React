import React from 'react';

export class ChildComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      // 객체 상태 저장변수,
      // 초기화 this.state = {key:value}생성자에서 초기화
      colorName: 'white',
    };
  }
  info(color) {
    // 부모에서 넘어오는 데이터 받기
    this.setState({ colorName: color });
  }

  render() {
    return (
      <>
        <h1 style={{ background: this.state.colorName, fontSize: '50px' }}>
          컴포넌트 ref실습
        </h1>
      </>
    );
  }
}

export default ChildComponent;

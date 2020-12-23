import React from 'react';
import PropTypes from 'prop-types';

export class Contact extends React.Component {
  // 클래스안에서 static defaultProps설정
  static defaultProps = {
    name: '뽀로로',
    //age: 100,
  };
  static propTypes = {
    msg: PropTypes.string,
    age: PropTypes.number.isRequired, // 필수
  };
  render() {
    // 비구조분해 할당
    const msg = this.props.msg;
    return (
      <div>
        <p>{msg}</p>
        <p>{this.props.age}</p>
      </div>
    );
  }
}

// 클래스 바깥에서 기본값 클래스명.defaultProps설정
// 상단에 defaultProps를 설정하면 오류발생
// Contact.defaultProps = {
//   name: '뽀로로',
//   age: 100,
// };

import React from 'react';
import PropTypes from 'prop-types';

export class Contact extends React.Component {
  render() {
    const name = this.props.name;
    const age = this.props.age;
    const phones = this.props.phones;
    const fun = this.props.my;
    const isMarried = this.props.isMarried;
    return (
      <div>
        <h1>{name}</h1>
        <p>
          {this.props.age}, <b>{age}</b>
        </p>
        <p>{this.props.phones}</p>
        <p>{phones[0]}</p>
        <p>{this.props.isMarried}</p>
        <p>{this.props.fun}</p>
      </div>
    );
  }
}

Contact.defaultProps = {
  name: '뽀로로',
  age: 100,
};

Contact.propTypes = {
  // prop가 특정 JS 형식임을 선언할 수 있습니다.
  // 이것들은 기본적으로 모두 선택 사항입니다
  name: PropTypes.string,
  age: PropTypes.number,
  phones: PropTypes.array,
  my: PropTypes.func,
  isMarried: PropTypes.bool,
};

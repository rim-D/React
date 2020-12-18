import React from 'react';

export class Person extends React.Component {
  person; // 변수 초기화, this키로 접근
  render() {
    this.person = this.props.yyy; // persons의 한사람의 정보
    return (
      <tr key={this.props.yyy2}>
        <td>{this.props.yyy2 + 1}</td>
        <td>{this.person.name}</td>
        <td>{this.person.age}</td>
      </tr>
    );
  }
}

export default Person;

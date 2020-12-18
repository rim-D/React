import React from 'react';
import './contact.css';
import { Person } from './Person';

export class PersonList extends React.Component {
  persons; // this키로 접근
  render() {
    this.persons = this.props.person; //파싱
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>이름</th>
              <th>나이</th>
            </tr>
          </thead>
          <tbody>
            {this.persons.map(function (row, idx) {
              return (
                // <tr key={idx}>
                //   <td>{idx + 1}</td>
                //   <td>{row.name}</td>
                //   <td>{row.age}</td>
                // </tr>
                <Person key={idx} yyy={row} yyy2={idx} /> //한면의 정보 전송
              );
            })}
          </tbody>
        </table>
      </>
    ); // end retun
  } // end render
}

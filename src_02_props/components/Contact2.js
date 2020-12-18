import React from 'react';
import './contact.css';

export class Contact2 extends React.Component {
  render() {
    // 디스트릭처링
    let { msg, msg2 } = this.props;
    return (
      <div>
        <h1>Conteact2</h1>
        <p>{msg}</p>
        <p>{msg2}</p>
      </div>
    );
  }
}

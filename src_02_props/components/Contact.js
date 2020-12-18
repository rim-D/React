import React from 'react';
import './contact.css';

export class Contact extends React.Component {
  render() {
    console.log(this);
    let msg = this.props.msg; // this.props.변수명
    let msg2 = this.props.msg2;

    return (
      <div>
        <h1>Conteact1</h1>
        <p>{msg}</p>
        <p>{this.props.msg}</p>
        <p>{this.props.msg2}</p>
        <p>{msg2}</p>
      </div>
    );
  }
}

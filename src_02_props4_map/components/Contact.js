import React from 'react';

export class Contact extends React.Component {
  render() {
    const username = this.props.username; // App.js에서 props받아온 값

    return <div>{username}</div>; // 출력
  }
}

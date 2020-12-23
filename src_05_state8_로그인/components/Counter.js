import React from 'react';

export class Counter extends React.Component {
  // 아래 생성자의 this.state와 동일한 기능
  state = {
    userid: '',
    passwd: '',
  };

  submit = e => {
    e.preventDefault();
    const { x, y } = this.refs;
    this.setState({
      userid: x.value,
      passwd: y.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          아이디
          <input type='text' ref='x' />
          비밀번호
          <input type='text' ref='y' />
          <button>로그인</button>
        </form>

        <p>
          아이디: <b>{this.state.userid}</b>
        </p>
        <p>
          비밀번호: <b>{this.state.passwd}</b>
        </p>
      </div>
    );
  }
}

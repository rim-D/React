import React from 'react';

export class Counter extends React.Component {
  // 아래 생성자의 this.state와 동일한 기능
  state = {
    userid: '',
    passwd: '',
  };

  submit = e => {
    e.preventDefault();
  };
  change = e => {
    let nextState = {}; // 변경될 객체
    nextState[e.target.name] = e.target.value;
    // {userid:'aaa'}
    // {passwd:'1234'}
    this.setState(nextState);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          아이디
          <input
            type='text'
            value={this.state.userid}
            name='userid'
            onChange={this.change}
          />
          비밀번호
          <input
            type='text'
            value={this.state.passwd}
            name='passwd'
            onChange={this.change}
          />
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

import React from 'react';

export class Child extends React.Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
  }
  render() {
    return (
      // useRef로 특정 DOM선택하기
      <form onSubmit={this.submit}>
        아이디
        <input
          type='text'
          ref={y => {
            console.log('y====', y);
            this.userid = y;
          }}
          placeholder='아이디'
        />
        {/* ref값으로 콜백함수 지정가능 태그자체를 this.passwd변수에 저장 */}
        비밀번호
        <input
          type='text'
          ref={x => {
            console.log('x====', x);
            this.passwd = x;
          }}
          placeholder='아이디'
        />
        <button>로그인</button>
      </form>
    );
  }

  submit(e) {
    e.preventDefault();
    console.log(this.passwd);
    console.log(this.userid.value + '\t' + this.passwd.value);
  }
}

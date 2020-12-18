import React from 'react';

export class Contact extends React.Component {
  render() {
    let msg = this.props.msg;
    let msg2 = this.props.msg2;

    let body = this.props.children; // 컴포넌트에서 자식컴포넌트 안에 html 데이터 파싱
    console.log(msg, '\t', msg2);
    console.log(body[0], '\t', body[1].props.children);
    return (
      <div>
        <p>{msg}</p> {/* props msg값 */}
        <p>{this.props.msg2}</p>
        {/* props msg2값 */}
        <p>{body}</p> {/* hello! 펭하! 내용을 전달받아 뿌려줌 */}
      </div>
    );
  }
}

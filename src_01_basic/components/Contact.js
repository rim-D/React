import React from 'react';
import './contact.css'; // css 임폴트
/**
 *
 * export와 export default의차이
 * 1. export Default는 모듈에서 반드시 하만 사용
 * import 시 import Contact form './Contact', {}필요 as사용 alias가능
 *
 * 2. JSX에서 변수값 사용시 {}이용, 반드시 root태그가 있어야하며
 * ""사용안함
 */
export class Contact extends React.Component {
  render() {
    let msg = '펭하';
    return (
      <div>
        <h1 className='test'>{msg}</h1>
        {'Hello'}
        {100}
      </div>
    );
  }
}

// JSX에서 자바스크립트 사용시 {}이용
export class Contact2 extends React.Component {
  render() {
    let myArr = ['A', 'B', 'C'];
    return (
      <div>
        <ul>
          {myArr.map(function (row, idx) {
            console.log(row, '\t', idx);
            return <li key={idx}>{row}</li>;
          })}
        </ul>
      </div>
    );
  }
}

// 2-1 자바스크립트 코드가 render밖에 있기 때문에 다양한 작업이 가능
var myArr = ['D', 'E', 'F']; //클래스, 메소드 밖에 선언
function my() {
  return myArr.map(function (row, idx) {
    return <li key={idx}>{row}</li>;
  });
}

export class Contact21 extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {
            // 자바스크립트 코드 사용시 {}사용
            my()
          }
        </ul>
      </div>
    );
  }
}

// 3. jsx에서 spread연산자의 사용
export class Contact3 extends React.Component {
  render() {
    // 변수 선언, 랜더 함수 안
    var attr = {
      href: 'http://www.daum.net',
      target: '_blank',
    };

    return (
      <div>
        <h3>3. jsx에서 spread연산자의 사용</h3>
        <a {...attr}>
          <b> daum: </b>
          {attr.href}
        </a>
      </div>
    );
  }
}

// 4. jsx에서 사용하는 multi node 사용의 예
export class Contact4 extends React.Component {
  render() {
    // 배열을 사용할 때 key="key값" 설정해줘야함
    // unique "key" prop작성 해달라는 오류 메세지 발생
    var multi = [<span key='_1'>펭하</span>, <span key='_2'>하이~</span>];
    return (
      <div>
        <h3>4. jsx에서 사용하는 multi node 사용의 예</h3>
        {multi}
      </div>
    );
  }
}

// 5. jsx에서는 이벤트 처리시 camel표기법 필수
function myOk() {
  // this키 없이 사용
  console.log('myOK');
}
export class Contact5 extends React.Component {
  myOk2() {
    //this키로 접근
    console.log('myOK2');
  }

  render() {
    return (
      <div>
        <h3>5. jsx에서는 이벤트 처리시 camel표기법 필수</h3>
        <button onClick={myOk}>myOk</button>
        <button onClick={this.myOk2}>myOk2</button>
      </div>
    );
  }
}

// 6. jsx에서 css className, label은 htmlFor형식으로 사용
export class Contact6 extends React.Component {
  render() {
    return (
      <div>
        <h3>6. jsx에서 css className, label은 htmlFor형식으로 사용</h3>
        <p className='test'>Hello css적용</p>
        <label htmlFor='myInput'>hello2</label>
        <input type='text' name='myInput'></input>
      </div>
    );
  }
}

//7. jsx에서는 style이 객체로 처리됨
// backgroundColor, fontSize 같은 카멜표기법 사용
export class Contact7 extends React.Component {
  render() {
    let myStyle = {
      fontSize: '38px',
      backgroundColor: '#999',
    };
    return (
      <div>
        <h3>7. jsx에서는 style이 객체로 처리됨</h3>
        <p style={myStyle}>myStyle적용됨</p>
        <p style={{ fontSize: '28px', backgroundColor: 'violet' }}>
          myStyle적용됨
        </p>
      </div>
    );
  }
}

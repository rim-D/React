import React from 'react';

class App extends React.Component {
  render() {
    const persons = [
      { name: '야옹이', age: 2 },
      { name: '냐옹이', age: 3 },
      { name: '멍멍이', age: 5 },
    ];

    // 배열 컴포넌트 사용시 유일키값 정의 , 다시 출력시 기존의 컴포넌트 재활용하여 성능을 높임
    const contactProps = persons.map((row, i) => {
      return <li key={`t1_${i}`}> {row.name} </li>;
    });

    return (
      <>
        <ul>{contactProps}</ul>
      </>
    );
  }
}

export default App;

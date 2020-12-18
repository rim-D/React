import React from 'react';
import { PersonList } from './components/PersonList';

// 1.  컴포넌트 import
class App extends React.Component {
  persons = [
    //this 키워드로 접근
    { name: '홍길동', age: 20 },
    { name: '이순신', age: 30 },
    { name: '유관순', age: 40 },
    { name: '강감찬', age: 50 },
  ];
  render() {
    // javascript 작성 부분
    return (
      <div className='App'>
        <PersonList person={this.persons} />
      </div>
    );
  } //end render
} // end class

export default App;

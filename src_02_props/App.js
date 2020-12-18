import React from 'react';
import { Contact } from './components/Contact';
import { Contact2 } from './components/Contact2';

// 1.  컴포넌트 import
class App extends React.Component {
  render() {
    // javascript 작성 부분
    // 자식에게 데이터 전달
    return (
      <div className='App'>
        <Contact msg='펭하' msg2='10' />
        <Contact2 msg='뽀로로' msg2='50' />
      </div>
    );
  } //end render
} // end class

export default App;

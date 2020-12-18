import React from 'react';
import {
  Contact,
  Contact2,
  Contact21,
  Contact3,
  Contact4,
  Contact5,
  Contact6,
  Contact7,
} from './components/Contact';

// 1.  컴포넌트 import
class App extends React.Component {
  render() {
    // javascript 작성 부분
    return (
      <div className='App'>
        <Contact />
        <Contact2 />
        <Contact21 />
        <Contact3 />
        <Contact4 />
        <Contact5 />
        <Contact6 />
        <Contact7 />
      </div>
    );
  } //end render
} // end class

export default App;

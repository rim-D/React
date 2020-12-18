import React from 'react';
import { Contact } from './components/Contact';

// 1.  컴포넌트 import
class App extends React.Component {
  render() {
    // javascript 작성 부분
    return (
      <div className='App'>
        {/* 자식을 include시에 body가 존재할 경우 
        this.props.children 으로 받음 */}
        <Contact msg='펭수' msg2='20'>
          hello!
          <span>펭하!</span>
        </Contact>
      </div>
    );
  } //end render
} // end class

export default App;

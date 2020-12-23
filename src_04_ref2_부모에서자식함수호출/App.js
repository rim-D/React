import React from 'react';
import { Child } from './components/Child';

class App extends React.Component {
  render() {
    return (
      // 자식 컴포넌트를 this.x에 저장한 후
      // 자식의 함수 직접호출
      <div>
        <Child
          ref={ref => {
            console.log('ref====', ref);
            this.x = ref;
          }}
        />
        {/* 자식 함수 직접호출 */}
        <button onClick={e => this.x.info()}>자식의 info()</button>
      </div>
    );
  }
}

export default App;

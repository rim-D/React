import React from 'react';
import ChildComponent from './components/ChildComponent';
class App extends React.Component {
  render() {
    return (
      <div>
        {/* 자식 컴포넌트를 this.color에 저장 후 자식의 함수 직접 호출 하며 데이터 전송 */}
        <ChildComponent
          ref={ref => {
            console.log('ref====', ref);
            this.color = ref;
          }}
        />
        {/* 이벤트를 넘기며 자식 함수 직접 호출 */}
        <button onClick={e => this.color.info('red')}>
          자식의 info('red')
        </button>
        <button>
          {' '}
          onClick={e => this.color.info('blue')}자식의 info('blue')
        </button>
      </div>
    );
  }
}

export default App;

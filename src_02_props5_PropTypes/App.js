import React from 'react';
import { Contact } from './components/Contact';
class App extends React.Component {
  render() {
    return (
      <div>
        <Contact name='펭수' age='10' />
        <Contact />
      </div>
    );
  }
}

export default App;

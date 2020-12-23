import React from 'react';
import { Contact } from './components/Contact';

class App extends React.Component {
  render() {
    const persons = [
      { name: '야옹이', age: 2 },
      { name: '냐옹이', age: 3 },
      { name: '멍멍이', age: 5 },
    ];

    const contactProps = persons.map(row => {
      return <Contact username={row.name} />;
    });

    return <>{contactProps}</>;
  }
}

export default App;

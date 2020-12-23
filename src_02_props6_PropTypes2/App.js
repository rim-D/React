import React from 'react';
import { Contact } from './components/Contact';

class App extends React.Component {
  name = '펭수'; //this접근;
  age = 5;
  phones = ['010', '011'];

  my = function () {
    console.log('my함수');
    return '펭하';
  };

  isMarried = false;

  render() {
    return (
      <div>
        <Contact
          name={this.name}
          age={this.age}
          phones={this.phones}
          my={this.my}
          isMarried={this.isMarried}
        />
      </div>
    );
  }
}

export default App;

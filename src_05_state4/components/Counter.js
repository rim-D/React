import React from 'react';

export class Counter extends React.Component {
  // 아래 생성자의 this.state와 동일한 기능
  state = {
    contactData: [
      { name: 'Allen', phone: '000-000-0001' },
      { name: 'Bob', phone: '000-000-0022' },
      { name: 'Charlie', phone: '000-000-0333' },
      { name: 'David', phone: '000-000-4444' },
    ],
  };
  // arrow함수를 사용하면 bind필요없음
  add = () => {
    let contact = this.state.contactData;
    contact.push({ name: 'David', phone: '000-000-0000' });
    this.setState({ contactDate: contact }); //1씩 증가
  };

  render() {
    return (
      <div>
        {this.state.contactData.map((row, i) => {
          return (
            <div key={i}>
              {row.name}:{row.phone}
            </div>
          );
        })}
        <button onClick={this.add}>사용자 추가</button>
      </div>
    );
  }
}

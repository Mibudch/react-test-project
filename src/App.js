import React, { Component } from 'react';
import './App.css';
import Card from './Card'

class App extends Component {
  state = {
    pets: [
      { animal: 'Dog', name: 'Bobik', age: '4 year', color: 'brown' },
      { animal: 'Parrot', name: 'Petty', age: '2 year', color: 'yellow' }
    ],
    title: 'My pets'
  }
  changeHandler = () => {
    console.log('changed')
  }
  render() {
    const cardStyle = {
      width: '200px',
      margin: 'auto',
      textAlign: 'center',
      color: '#333',
      background: 'grey',
      fontSize: '24px',
      fontWeight: '800'
    }
    const pets = this.state.pets
    return (
      <div style={cardStyle}>
        <h2>{this.state.title}</h2>
        <Card animal={pets[0].animal} name={pets[0].name} age={pets[0].age} color={pets[0].color} />
        <Card animal={pets[1].animal} name={pets[1].name} age={pets[1].age} color={pets[1].color} />
        <button onClick={this.changeHandler}>Кнопка Change</button>
      </div>
    );
  }
}

export default App;

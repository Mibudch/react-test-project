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
  changeHandler = (newTilte) => {
    this.setState({
      title: newTilte
    })
  }

  handleInput = (event) => {
    this.setState({
      title: event.target.value
    })
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

    return (
      <div style={cardStyle}>
        <h2>{this.state.title}</h2>
        <input type='text' onChange={this.handleInput} />
        {this.state.pets.map((pet, i) => {
          return (
            <Card
              key={i}
              animal={pet.animal}
              name={pet.name}
              age={pet.age}
              color={pet.color}
              onChangeTitle={() => this.changeHandler(pet.name)}
            />
          )
        })}
        <button onClick={this.changeHandler.bind(this, 'change')}>Кнопка Change</button>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Card from './Card'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageTitle: 'My pets',
      pets: [
        { animal: 'Dog', name: 'Bobik', age: '5 years' },
        { animal: 'Cat', name: 'Pushok', age: '4 years' },
        { animal: 'Fish', name: 'Nemo', age: '2 years' }
      ]
    }
  }
  render() {
    return (
      <>
        <h2>{this.state.pageTitle}</h2>
        {this.state.pets.map((pet, index) => {
          return (
            <Card
              key={index}
              animal={pet.animal}
              name={pet.name}
              age={pet.age}
              year={pet.age}
            />
          )
        })
        }
      </>)
  }
}
export default App;
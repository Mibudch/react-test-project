import React, { Component } from 'react';
import './App.css';
import Card from './Card'

class App extends Component {
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
        <h2>My pets</h2>
      <Card animal={'Dog'} name={'Bobik'} age={'4 years'} color={'brown'}/>
      <Card animal={'Parrot'} name={'Petty'} age={'2 years'} color={'yellow'}/>
      </div>
    );
  }
}

export default App;

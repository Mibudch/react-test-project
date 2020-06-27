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
        <h2>My pet</h2>
      <Card />
      </div>
    );
  }
}

export default App;

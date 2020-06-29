import React, { Component } from 'react';
import './App.css';
import Input from './Input'

class App extends Component {
  state = {
    toDoes: []
  }
  onClickHandleAdd = () => {
    console.log('Click')
  }
  render() {
    return (
      <>
        <h2>You have 1 to does</h2>
        <Input />
        <ul>
          {/* <li>
            First to do
            <button>edit</button>
            <button>done</button>
          </li> */}
        </ul>
      </>
    );
  }
}

export default App;

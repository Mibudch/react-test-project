import React, { Component } from 'react';
import './App.css';
import ClubInfo from './clubInfo/ClubInfo'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clubInfo: [
        { name: 'Barcelona', city: 'Barcelona', year: '29.11.1899' }
      ],
      clubSucsess: [
        { medals: [], cups: [], goals: [] }
      ],
      team: [
        { goalkeeper: 'Иньяки Пенья', quarterback: 'Жерар Пике', halfback: 'Алекс Кольядо', forward: 'Лионель Месси' }
      ],
      title: 'Footbal Club'
    }
  }
  render() {
    return (
      <>
        <h3>{this.state.title}</h3>
        {this.state.clubInfo.map((elem, index) => {
          return (
            <ClubInfo
              key={index}
              name={elem.name}
              city={elem.city}
              year={elem.year}
            />
          )
        })}
      </>

    );
  }
}

export default App;

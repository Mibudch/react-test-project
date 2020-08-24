import React, { Component } from 'react';
import { CalendarView } from './CalendarView.js'

class CalendarContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentDate: Date()
        }
        function daysInMonth(year, month) {
            return new Date(year, month, 0).getDate();
          }
          console.log (daysInMonth(new Date().getFullYear(), new Date().getMonth()))
        //   console.log (daysInMonth(2016, 2))
    }
    render() {
        return (
            <CalendarView 
                currentDate = {this.state.currentDate}
            />
        )
    }
}

export default CalendarContainer
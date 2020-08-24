import React, { Component } from 'react';
import { CalendarView } from './CalendarView.js'

class CalendarContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentDate: Date(),
            days: ''
        }
        const daysInMonth = (year, month) => (
            new Date(year, month, 0).getDate()
        )
      daysInMonth(2020, 2)
    }
    render() {
        return (
            <CalendarView
                currentDate={this.state.currentDate}

            />
        )
    }
}

export default CalendarContainer
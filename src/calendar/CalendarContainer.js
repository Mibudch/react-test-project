import React, { Component } from 'react';
import { CalendarView } from './CalendarView.js';


class CalendarContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentDate: new Date()
        }
    }
    daysInMonth = (year, month) => {
        return (
            new Date(year, month, 0).getDate()
        )
    }
    numberOfDays = () => {
        return (
            [...Array(this.daysInMonth(2020, 2)).keys()].map(x => ++x)
        )
    }
    render() {
        return (
            <>
                <CalendarView
                    currentDate={this.state.currentDate}
                    numberOfDays={this.numberOfDays()}
                />

            </>
        )
    }
}

export default CalendarContainer
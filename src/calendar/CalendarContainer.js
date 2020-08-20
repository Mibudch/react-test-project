import React, { Component } from 'react';
import { CalendarView } from './CalendarView.js'

class CalendarContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentDate: Date()
        }
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
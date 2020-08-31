import React, { Component } from 'react';
import { CalendarView } from './CalendarView.js';


class CalendarContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentDate: new Date(),
            currentYear: new Date().getFullYear(),
            currentMonth: new Date().getMonth()
        }
    }
    daysInMonth = (year, month) => {
        return (
            new Date(year, month, 0).getDate()
        )
    }
    daysInPreviousMonth = (year, month) => {
        return (
            new Date(year, month - 2, 0).getDate()
        )
    }
    numberOfDays = () => {
        return (
            [...Array(this.daysInMonth(this.state.currentYear, this.state.currentMonth)).keys()].map(x => ++x)
        )
    }
    firstDayInMonth = (year, month) => {
        return (
            new Date(year, month, 0).getDay()
        )
    }
    daysFromPreviousMonth = () => {
        const arrOfPreviousMonthDays = [];
        const daysInPreviousMont = this.daysInPreviousMonth(this.state.currentYear, this.state.currentMonth)
        const firstDayInMonth = this.firstDayInMonth(this.state.currentYear, this.state.currentMonth)
        for (let i = daysInPreviousMont; i > (daysInPreviousMont - firstDayInMonth); i--) {
            arrOfPreviousMonthDays.push(i)
        }
        return arrOfPreviousMonthDays.reverse()
    }
    render() {
        console.log(this.daysFromPreviousMonth())
        return (
            <>
                <CalendarView
                    currentDate={this.state.currentDate}
                    numberOfDays={this.numberOfDays()}
                    daysFromPreviousMonth={this.daysFromPreviousMonth()}
                />
            </>
        )
    }
}

export default CalendarContainer
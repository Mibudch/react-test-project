import React, { Component } from 'react';
import { CalendarView } from './CalendarView.js';


class CalendarContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentDate: new Date(),
            currentYear: new Date().getFullYear(),
            currentMonth: new Date(2020, 7).getMonth(),
            currentDay: new Date().getDay()
        }
    }
    daysInMonth = () => {
        const date1 = new Date(this.state.currentYear, this.state.currentMonth, this.state.currentDay)
        const date2 = new Date(this.state.currentYear, this.state.currentMonth + 1, this.state.currentDay)
        const days = Math.round((date2 - date1) / 1000 / 3600 / 24)
        return days
    }
    numberOfDays = () =>{
        return(
        [...Array(this.daysInMonth()).keys()].map(x => ++x)
        )
    }
    daysInPreviousMonth = () => {
        const date1 = new Date(this.state.currentYear, this.state.currentMonth - 1, this.state.currentDay)
        const date2 = new Date(this.state.currentYear, this.state.currentMonth, this.state.currentDay)
        const days = Math.round((date2 - date1) / 1000 / 3600 / 24)
        return days
    }
    firstDayInMonth = () => {
        return (
            new Date(this.state.currentYear, this.state.currentMonth, 0).getDay()
        )
    }
    daysFromPreviousMonth = () => {
        const arrOfPreviousMonthDays = [];
        for (let i = this.daysInPreviousMonth(); i > (this.daysInPreviousMonth() - this.firstDayInMonth()); i--) {
            arrOfPreviousMonthDays.push(i)
        }
        return arrOfPreviousMonthDays.reverse()
    }
    daysFromNextMonth = () => {
        const days = (41 - this.daysInMonth())
        return (
            [...Array(days).keys()].map(x => ++x)
        )
    }
    render() {
        console.log(this.daysFromPreviousMonth())
        return (
            <>
                <CalendarView
                    currentDate={this.state.currentDate}
                    numberOfDays={this.numberOfDays()}
                    daysFromPreviousMonth={this.daysFromPreviousMonth()}
                    daysFromNextMonth={this.daysFromNextMonth()}
                />
            </>
        )
    }
}

export default CalendarContainer
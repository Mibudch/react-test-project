import React, { Component } from 'react';
import { CalendarView } from './CalendarView.js';


class CalendarContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentDate: new Date(),
            currentYear: new Date().getFullYear(),
            currentMonth: new Date().getMonth(),
            currentWeekDay: new Date().getDay(),
            currentDay: new Date().getDate()
        }
    }
    daysInMonth = () => {
        const date1 = new Date(this.state.currentYear, this.state.currentMonth, this.state.currentWeekDay)
        const date2 = new Date(this.state.currentYear, this.state.currentMonth + 1, this.state.currentWeekDay)
        const days = Math.round((date2 - date1) / 1000 / 3600 / 24)
        return days
    }
    numberOfDays = () => {
        return (
            [...Array(this.daysInMonth()).keys()].map(x => ++x)
        )
    }
    daysInPreviousMonth = () => {
        const date1 = new Date(this.state.currentYear, this.state.currentMonth - 1, this.state.currentWeekDay)
        const date2 = new Date(this.state.currentYear, this.state.currentMonth, this.state.currentWeekDay)
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
        const days = (42 - (this.daysInMonth() + this.daysFromPreviousMonth().length))
        return (
            [...Array(days).keys()].map(x => ++x)
        )
    }
    handlerOnClickNextMonth = () => {
        const nextMonth = this.state.currentMonth + 1;
        const nextYear = this.state.currentYear + 1
        this.state.currentMonth > 10 ? this.setState({
            currentYear: nextYear,
            currentMonth: 0
        }) : this.setState({
            currentMonth: nextMonth
        })
    }
    handlerOnClickPreviousMonth = () => {
        const previousMonth = this.state.currentMonth - 1
        const previousYear = this.state.currentYear - 1
        this.state.currentMonth < 1 ? (this.setState({
            currentYear: previousYear,
            currentMonth: 11
        })) : (this.setState({
            currentMonth: previousMonth
        }))
    }
    render() {
        return (
            <div>
                <CalendarView
                    currentDay={this.state.currentDay}
                    currentMonth={this.state.currentMonth}
                    currentYear={this.state.currentYear}
                    numberOfDays={this.numberOfDays()}
                    daysFromPreviousMonth={this.daysFromPreviousMonth()}
                    daysFromNextMonth={this.daysFromNextMonth()}
                    nextMonth={this.handlerOnClickNextMonth}
                    previousMonth={this.handlerOnClickPreviousMonth}
                />
            </div>
        )
    }
}

export default CalendarContainer
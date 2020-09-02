import React, { Component } from 'react';
import { CalendarView } from './CalendarView.js';
import axios from 'axios';
const genitiveMonth = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

class CalendarContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentDate: new Date(),
            currentYear: new Date().getFullYear(),
            currentMonth: new Date().getMonth(),
            currentWeekDay: new Date().getDay(),
            currentDay: new Date().getDate(),
            weather: []
        }
    }
    componentDidMount() {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=8deb1290960a6df846daf0a26e878871`)
            .then(res => {
                console.log(res)
                const weather = res.data;
                this.setState({ weather });
            })
    }
    daysInMonth = () => {
        const date1 = new Date(this.state.currentYear, this.state.currentMonth, this.state.currentWeekDay)
        const date2 = new Date(this.state.currentYear, this.state.currentMonth + 1, this.state.currentWeekDay)
        const days = Math.round((date2 - date1) / 1000 / 3600 / 24)
        return days
    }
    numberOfDays = () => {
        const days = []
        for (let i = 0; i < this.daysInMonth(); i++) {
            days.push(i + 1)
        }
        return days
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
    handlerOnClickNextYear = () => {
        const nextYear = this.state.currentYear + 1
        this.setState({
            currentYear: nextYear
        })
    }
    handlerOnClickPreviousYear = () => {
        const previousYear = this.state.currentYear - 1
        this.setState({
            currentYear: previousYear
        })
    }
    getGenitiveMonthMonth = () => {
        for (let i = 0; i < genitiveMonth.length; i++) {
            if (new Date().getMonth() === i) {
                return genitiveMonth[i]
            }
        }
    }
    getMonth = () => {
        for (let i = 0; i < month.length; i++) {
            if (this.state.currentMonth === i) {
                return month[i]
            }
        }
    }
    getTodayFlag = () => (new Date().getMonth() === month.indexOf(this.getMonth()) && new Date().getFullYear() === this.state.currentYear)


    render() {
        return (
            <>
                <CalendarView
                    currentDay={new Date().getDate()}
                    currentMonth={this.getGenitiveMonthMonth()}
                    currentYear={new Date().getFullYear()}
                    numberOfDays={this.numberOfDays()}
                    daysFromPreviousMonth={this.daysFromPreviousMonth()}
                    daysFromNextMonth={this.daysFromNextMonth()}
                    nextMonth={this.handlerOnClickNextMonth}
                    previousMonth={this.handlerOnClickPreviousMonth}
                    nextYear={this.handlerOnClickNextYear}
                    previousYear={this.handlerOnClickPreviousYear}
                    bottomMonth={this.getMonth()}
                    bottomYear={this.state.currentYear}
                    todayFlag={this.getTodayFlag()}
                />
            </>
        )
    }
}

export default CalendarContainer
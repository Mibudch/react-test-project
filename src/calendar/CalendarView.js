import React from 'react'
import { Header } from './calendarView/Header.js'
import { Section } from './calendarView/Section.js'
import {Footer} from './calendarView/Footer.js'
import './calendarView/CalendarView.css'
export const CalendarView = (props) => (
    <div className='padding'>
        <Header
            currentDay={props.currentDay}
            currentMonth={props.currentMonth}
            currentYear={props.currentYear}
        />
        <Section
            numberOfDays={props.numberOfDays}
            daysFromPreviousMonth={props.daysFromPreviousMonth}
            daysFromNextMonth={props.daysFromNextMonth}
            nextMonth={props.nextMonth}
            previousMonth={props.previousMonth}
            nextYear={props.nextYear}
            previousYear={props.previousYear}
            bottomMonth={props.bottomMonth}
            bottomYear={props.bottomYear}
            todayFlag={props.todayFlag}
        />
        <Footer 
        bottomMonth={props.bottomMonth}
        bottomYear={props.bottomYear}
        />
    </div>
)

import React from 'react'
import { Header } from './calendarView/Header.js'
import { Section } from './calendarView/Section'

export const CalendarView = (props) => (
    <>
        <Header currentDate={props.currentDate} />
        <Section numberOfDays={props.numberOfDays} daysFromPreviousMonth={props.daysFromPreviousMonth}/>
    </>
)

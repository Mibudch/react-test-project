import React from 'react';
import './Section.css'
const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс',]
export const Section = (props) => (
    <section className='width'>
        <div>
            <button onClick={props.previousMonth} className='buttonWidth'><strong>Previous month</strong></button>
            <button onClick={props.nextMonth} className='buttonWidth'><strong>Next month</strong></button>
            <button onClick={props.previousYear} className='buttonWidth'><strong>Previous year</strong></button>
            <button onClick={props.nextYear} className='buttonWidth'><strong>Next year</strong></button>
        </div>
        <div>
            <strong className='flex'>
                {weekDays.map((el, i) => {
                    return (
                        <div key={i} className='size border centried'>{el}</div>
                    )
                })}
            </strong>
            <div className='flex wrap'>
                {props.daysFromPreviousMonth.map((el, i) => {
                    return (
                        <div key={i} className='size border centried'>{el}</div>
                    )
                })}
                {props.numberOfDays.map((el, i) => {
                        return (
                            (el + 1) === new Date().getDay() ? <strong key={i} className='size border centried fade red'>{el}</strong> : <strong key={i} className='size border centried fade'>{el}</strong>
                        )
                })}
                {props.daysFromNextMonth.map((el, i) => {
                    return (
                        <div key={i} className='size border centried'>{el}</div>
                    )
                })}
            </div>
        </div>
    </section>
)



import React from 'react';
import './Section.css'
const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс',]
export const Section = (props) => (
    <section className='width'>
        <div>
            <button onClick={props.previousMonth}><strong>Previous month</strong></button>
            <button onClick={props.nextMonth}><strong>Next month</strong></button>
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
                        <strong key={i} className='size border centried fade'>{el}</strong>
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


